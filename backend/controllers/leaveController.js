const Leave = require("../models/Leave");

// Apply Leave
exports.applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Leaves
exports.getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Leave Status (Approve / Reject)
exports.updateLeaveStatus = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
