// Initialize express router
const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workout");

const router = express.Router();

// Route to get all workouts
router.get("/", getWorkouts);

// Route to get a specific workout by id
router.get("/:id", getWorkout);

// Route to create a new workout
router.post("/", createWorkout);

// Route to delete a workout by id
router.delete("/:id", deleteWorkout);

// Route to update a workout by id
router.patch("/:id", updateWorkout);

module.exports = router;
