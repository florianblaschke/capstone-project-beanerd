import dbConnect from "@/db/connect";
import User from "@/db/models/user";
import Method from "@/db/models/method";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  const session = await getServerSession(req, res);

  if (session) {
    const { user } = session;
    const connection = await dbConnect();
    const { id } = req.query;

    if (!connection) {
      return res.status(500).json({ message: "No connection to database!" });
    }

    const currentUser = await User.findOne(user)
      .populate("roasts")
      .populate("methods");

    if (!currentUser) {
      return res.status(401).json({ message: "You are not authorized!" });
    }

    if (req.method === "GET") {
      const relatedMethods = await currentUser.methods.filter((relId) =>
        relId.roastIdForMethod === id ? true : false
      );
      const favoriteRoasts = await currentUser.roasts;
      const pickedRoast = await favoriteRoasts.find(
        (roast) => roast._id.toString() === id
      );
      const data = { relatedMethods, pickedRoast };
      return res.status(201).json(data);
    }

    if (req.method === "POST") {
      const data = req.body;
      try {
        const newMethod = await Method.create(data);
        currentUser.methods.push(newMethod._id.toString());
        await currentUser.save();
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(201).json({ message: "Success!" });
    }
  } else {
    return res.status(401).json({ message: "You are not authorized!" });
  }
}
