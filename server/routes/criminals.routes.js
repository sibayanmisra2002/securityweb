const express = require("express");
const router = express.Router();
const criminal = require("../model/criminals.model"); // Import your Person model

// Define your GET endpoint to fetch all records
router.get("/", async (req, res) => {
  try {
    const people = await criminal.findAll(); // Fetch all records from the Person model
    res.json(people); // Send the records as JSON response
  } catch (error) {
    console.error("Error fetching people:", error);
    res.status(500).json({ error: "Internal server error" }); // Send an error response
  }
});

module.exports = router;
