import dbConnect from "@/lib/dbConnect";
import Generator from "@/models/Generator";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const generators = await Generator.find({});
        res.status(200).json({ success: true, generators });
        
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
