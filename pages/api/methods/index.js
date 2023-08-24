import { getServerSession } from "next-auth";
import dbConnect from "@/db/connect";
import User from "@/db/models/user";
import Method from "@/db/models/method";

export default async function handler(req, res) {
  const session = await getServerSession(req, res);

  if (session) {
    const { user } = session;
    const connection = await dbConnect();

    if (!connection) {
      return res.status(500).json({ message: "No connection to database!" });
    }

    const currentUser = await User.findOne(user);

    if (!currentUser) {
      return res.status(401).json({ message: "You are not authorized!" });
    }

    if (req.method === "PUT") {
      const { id } = req.body;
      try {
        await Method.findByIdAndUpdate(id, {
          $set: req.body,
        });
        return res.status(201).json({ message: "Success!" });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  } else {
    return res.status(401).json({ message: "You are not authorized!" });
  }
}
