import dbConnect from "@/db/connect";
import Roast from "@/db/models/roast";

export default async function handler(req, res) {
  const connection = await dbConnect();
  const { id } = req.query;
  if (!connection)
    return res.status(500).json({ error: "No connection to database!" });

  if (req.method === "GET") {
    const singleRoast = await Roast.findById(id);

    if (!singleRoast) {
      return res.status(404).json({ error: "We did not find any coffee …" });
    }

    return res.status(200).json(singleRoast);
  }

  if (req.method === "PUT") {
    const existingRoast = await Roast.findOne(req.body);
    if (existingRoast) {
      return res.status(400).json({ error: "Roast already exists" });
    }

    const updateRoast = await Roast.findByIdAndUpdate(id, { $set: req.body });

    if (!updateRoast) {
      return res
        .status(404)
        .json({ error: "We did not find the coffee you wanted to update …" });
    }

    return res.status(201).json({ message: "Update successfull!" });
  }
}
