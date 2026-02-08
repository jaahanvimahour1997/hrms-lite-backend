const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: {
  type: String,
  required: true
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "Half-Day"],
      default: "Present",
    },
    checkInTime: String,
    checkOutTime: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
