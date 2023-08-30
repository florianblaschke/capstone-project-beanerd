import { getServerSession } from "next-auth";
import dbConnect from "@/db/connect";
import User from "@/db/models/user";
import Method from "@/db/models/method";

export default async function handler(req, res) {
  const session = await getServerSession(req, res);
  const { id } = req.query;

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

    if (req.method === "DELETE") {
      const indexOfMethod = currentUser.methods.findIndex(
        ({ _id }) => _id.toString() === id
      );
      try {
        await currentUser.methods.splice(indexOfMethod, 1);
        await currentUser.save();
        await Method.findByIdAndDelete(id);
        return res.status(201).json({ message: "Recipe deleted!" });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  } else {
    return res.status(401).json({ message: "You are not authorized!" });
  }
}
