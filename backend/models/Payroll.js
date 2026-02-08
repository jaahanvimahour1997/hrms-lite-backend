const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  basicSalary: {
    type: Number,
    required: true
  },
  workingDays: {
    type: Number,
    required: true
  },
  presentDays: {
    type: Number,
    required: true
  },
  calculatedSalary: {
    type: Number
  }
}, { timestamps: true });

module.exports = mongoose.model("Payroll", payrollSchema);
