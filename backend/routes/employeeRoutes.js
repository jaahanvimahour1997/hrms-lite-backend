const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");


// ✅ CREATE Employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, email } = req.body;

    // Prevent duplicates
    const exists = await Employee.findOne({
      $or: [{ employeeId }, { email }],
    });

    if (exists) {
      return res.status(400).json({
        message: "Employee with this ID or Email already exists",
      });
    }

    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ READ all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ UPDATE employee  ⭐⭐⭐ IMPORTANT
router.put("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // return updated data
        runValidators: true,
      }
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ✅ DELETE employee
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;

