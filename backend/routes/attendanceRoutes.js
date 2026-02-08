const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ ADD HERE

// MARK ATTENDANCE (POST)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET ALL ATTENDANCE
router.get("/", authMiddleware, async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("employeeId");
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
