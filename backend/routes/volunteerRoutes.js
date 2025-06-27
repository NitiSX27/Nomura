const express = require("express");
const router = express.Router();
const { getTopVolunteers, getVolunteerByName } = require("../controllers/volunteerController");

// Existing route
router.get("/top", getTopVolunteers);

// ✅ New route to fetch volunteer by name
router.get("/:name", getVolunteerByName);

module.exports = router;
