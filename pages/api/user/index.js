import User from "@/db/models/user";
import dbConnect from "@/db/connect";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res);

  if (session) {
    await dbConnect();

    const { user } = session;
    if (req.method === "GET") {
      const currentUser = await User.findOne(user);

      if (!currentUser) {
        return res.status(404).json({ error: "Something bad happened" });
      }
      return res.status(201).json(currentUser.favorites);
    }
  } else {
    res.status(401).json({ message: "You are not authorized!" });
  }
}
