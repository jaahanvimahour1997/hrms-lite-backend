const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES 👇
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/payroll", require("./routes/payrollRoutes"));
app.use("/api/leaves", require("./routes/leaveRoutes")); // ✅ ADD THIS LINE
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

// Test route
app.get("/", (req, res) => {
  res.send("HRMS Backend Running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
