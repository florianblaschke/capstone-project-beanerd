import dbConnect from "@/db/connect";
import Roast from "@/db/models/roast";

export default async function handler(req, res) {
  const connection = await dbConnect();
  if (!connection)
    return res.status(500).json({ error: "No connection to database!" });

  if (req.method === "GET") {
    const allRoasts = await Roast.find();

    if (!allRoasts) {
      return res.status(404).json({ error: "We did not find any coffee …" });
    }

    return res.status(200).json(allRoasts);
  }

  if (req.method === "POST") {
    const newRoast = req.body;

    const existingRoast = await Roast.findOne(newRoast);

    if (existingRoast) {
      return res.status(400).json({ error: "Roast already exists" });
    }

    try {
      await Roast.create(newRoast);
      return res.status(201).json({ message: "New roast created" });
    } catch (error) {
      return res.status(418).json({ error: error.message });
    }
  }
}
