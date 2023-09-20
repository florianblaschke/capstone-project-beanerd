import User from "@/db/models/user";
import dbConnect from "@/db/connect";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res);

  if (session) {
    await dbConnect();

    const { user } = session;
    if (req.method === "GET") {
      const currentUser = await User.findOne(user).populate({
        path: "roasts",
        populate: { path: "score" },
      });

      if (!currentUser) {
        return res.status(404).json({ error: "Something bad happened" });
      }
      return res.status(201).json(currentUser);
    }

    if (req.method === "POST") {
      const id = req.body;
      const currentUser = await User.findOne(user);
      if (!currentUser) {
        return res.status(404).json({ error: "Something bad happened" });
      }

      const alreadyFavorite = await currentUser.roasts.find(
        (existingId) => existingId.toString() === id
      );

      if (alreadyFavorite) {
        return res.status(418).json({ message: "This is already a favorite" });
      }

      try {
        await currentUser.roasts.push(id);
        await currentUser.save();
        return res
          .status(201)
          .json({ message: "Saved successfully in favorites!" });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    if (req.method === "PATCH") {
      const id = req.body;
      const currentUser = await User.findOne(user);

      if (!currentUser) {
        return res.status(401).json({ message: "You are not authorized!" });
      }
      const roastToDelete = await currentUser.roasts.findIndex(
        (favId) => favId.toString() === id
      );
      await currentUser.roasts.splice(roastToDelete, 1);
      await currentUser.save();
      return res.status(201).json({ message: "Success!" });
    }
  } else {
    res.status(401).json({ message: "You are not authorized!" });
  }
}
