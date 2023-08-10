import dbConnect from "@/db/connect";
import User from "@/db/models/user";
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

    const currentUser = await User.findOne(user).populate("roasts");
    if (!currentUser) {
      return res.status(401).json({ message: "You are not authorized!" });
    }

    if (req.method === "GET") {
      const favoriteRoasts = await currentUser.roasts;
      const pickedRoast = await favoriteRoasts.find(
        (roast) => roast._id.toString() === id
      );
      return res.status(201).json(pickedRoast);
    }
  } else {
    return res.status(401).json({ message: "You are not authorized!" });
  }
}
