const connectDB = require("../../db/dbConnect");

async function AddComplaints(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("complaints");

    const { userName, subject, compDetails } = req.body;

    if (!userName || !subject || !compDetails) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    await collection.insertOne({
      userName,
      subject,
      compDetails,
      timestamp: new Date(),
    });

    return res
      .status(201)
      .json({ success: true, message: "Complaint added successfully" });
  } catch (error) {
    console.error("addComplaints", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { AddComplaints };
