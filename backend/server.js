const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// ✅ Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const volunteerRoutes = require("./routes/volunteerRoutes");
app.use("/api/volunteers", volunteerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
