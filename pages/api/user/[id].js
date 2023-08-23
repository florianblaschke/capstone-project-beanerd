import dbConnect from "@/db/connect";
import User from "@/db/models/user";
import Method from "@/db/models/method";
import Score from "@/db/models/score";
import { getServerSession } from "next-auth";
import Roast from "@/db/models/roast";

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
      const favoriteRoasts = await currentUser.roasts;
      const pickedRoast = await favoriteRoasts.find(
        (roast) => roast._id.toString() === id
      );
      const relatedMethods = await currentUser.methods.filter(
        ({ roastIdForMethod }) => roastIdForMethod === id
      );
      await pickedRoast.populate("score");
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
        return res.status(418).json({ error: error.message });
      }
      return res.status(201).json({ message: "Success!" });
    }

    if (req.method === "PATCH") {
      const data = req.body;
      const userId = currentUser._id.toString();
      data.userId = userId;
      const roastToRate = await Roast.findById(id).populate("score");
      const alreadyRated = roastToRate.score.find(
        (score) => score.userId === userId
      );
      if (alreadyRated) {
        try {
          alreadyRated.rating = data.rating;
          await alreadyRated.save();
          return res.status(202).json({ message: "We updated your Rating!" });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      }
      try {
        const userScore = await Score.create(data);
        roastToRate.score.push(userScore._id.toString());
        await roastToRate.save();
        return res.status(201).json({ message: "Success!" });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
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
