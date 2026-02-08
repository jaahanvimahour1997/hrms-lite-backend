const express = require("express");
const router = express.Router();
const {
  applyLeave,
  getLeaves,
  updateLeaveStatus,
} = require("../controllers/leaveController");

const authMiddleware = require("../middleware/authMiddleware");

// Routes
router.post("/", authMiddleware, applyLeave);
router.get("/", authMiddleware, getLeaves);
router.put("/:id", authMiddleware, updateLeaveStatus);

module.exports = router;
