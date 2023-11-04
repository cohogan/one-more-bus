import dbConnect from "@/lib/dbConnect";
import Zone from "@/models/Zone";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const zones = await Zone.find({hasActiveIpRange: true});
        console.log(zones.length)
        res.status(200).json({ success: true, zones });
        
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
