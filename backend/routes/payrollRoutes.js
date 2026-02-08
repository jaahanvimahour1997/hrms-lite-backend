const express = require("express");
const Payroll = require("../models/Payroll");

const router = express.Router();

// Create Payroll
router.post("/", async (req, res) => {
  try {
    const { employeeId, month, basicSalary, workingDays, presentDays } = req.body;

    const perDaySalary = basicSalary / workingDays;
    const calculatedSalary = perDaySalary * presentDays;

    const payroll = new Payroll({
      employeeId,
      month,
      basicSalary,
      workingDays,
      presentDays,
      calculatedSalary
    });

    await payroll.save();
    res.status(201).json(payroll);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Payrolls
router.get("/", async (req, res) => {
  const payrolls = await Payroll.find();
  res.json(payrolls);
});

module.exports = router;
