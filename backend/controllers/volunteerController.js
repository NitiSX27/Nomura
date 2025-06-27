const Volunteer = require("../models/volunteer");

// @desc    Get top volunteers
// @route   GET /api/volunteers/top
exports.getTopVolunteers = async (req, res) => {
  try {
    const topVolunteers = await Volunteer.find().sort({ points: -1 }).limit(5);
    res.json(topVolunteers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch top volunteers" });
  }
};

// @desc    Get a single volunteer by name
// @route   GET /api/volunteers/:name
exports.getVolunteerByName = async (req, res) => {
  try {
    const name = decodeURIComponent(req.params.name); // Handle URL encoding
    const volunteer = await Volunteer.findOne({ name });

    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }

    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch volunteer" });
  }
};
