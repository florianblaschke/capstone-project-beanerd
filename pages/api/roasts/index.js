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
}
