// Import the mongoose library for interacting with MongoDB
const mongoose = require("mongoose");

// Import the Workout model to interact with the workouts collection in the database
const Workout = require("../models/workout");

// Function to delete a workout by ID
const deleteWorkout = async (req, res) => {
    // Extract the workout ID from the request parameters
    const { id } = req.params;

    try {
        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).json({ error: "Workout ID is not valid" });

        // Find the workout by ID and delete it from the database
        const workout = await Workout.findOneAndDelete({_id: id});

        // If the workout is not found, respond with a 404 status code and an error message
        if (!workout) return res.status(404).json({ error: "Workout not found" });

        // Respond with a success message and the deleted workout
        res.status(200).json({ message: `Workout deleted with id ${id}`, workout });
    } catch (error) {
        // If there's an error, respond with a 400 status code and the error message
        res.status(400).json({ error: error.message });
    }
};

// Function to create a new workout
const createWorkout = async (req, res) => {
  // Extract title, reps, and load from the request body
  const { title, reps, load } = req.body;

  try {
    // Create a new workout document in the database
    const workout = await Workout.create({ title, reps, load });

    // Respond with the created workout and a 200 status code
    res.status(200).json(workout);
  } catch (error) {
    // If there's an error, respond with a 400 status code and the error message
    res.status(400).json({ error: error.message });
  }
};

// Function to get all workouts
const getWorkouts = async (req, res) => {
  try {
    // Find all workouts in the database and sort them by creation date in descending order
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    // Respond with the found workouts and a 200 status code
    res.status(200).json(workouts);
  } catch (error) {
    // If there's an error, respond with a 400 status code and the error message
    res.status(400).json({ error: error.message });
  }
};

// Function to get a single workout by ID
const getWorkout = async (req, res) => {
    // Extract the workout ID from the request parameters
    const { id } = req.params;

    try {
        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(400).json({ error: "Workout ID is not valid" });

        // Find the workout by ID in the database
        const workout = await Workout.findById(id);

        // If the workout is not found, respond with a 404 status code and an error message
        if (!workout) return res.status(404).json({ error: "Workout not found" });

        // Respond with the found workout and a 200 status code
        res.status(200).json(workout);
    } catch (error) {
        // If there's an error, respond with a 400 status code and the error message
        res.status(400).json({ error: error.message });
    }
};

// Function to update a workout by ID
const updateWorkout = async (req, res) => {
    // Extract the workout ID from the request parameters
    const { id } = req.params;

    try {
    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ error: "Workout ID is not valid" });

    // Find the workout by ID and update it in the database
    const workout = await Workout.findOneAndUpdate({ _id: id }, req.body);

    // If the workout is not found, respond with a 404 status code and an error message
    if (!workout) return res.status(404).json({ error: "Workout not found" });

    // Respond with a success message and the updated workout
    res.status(200).json({ message: `Workout updated with id ${id}`, workout });
    } catch (error) {
    // If there's an error, respond with a 400 status code and the error message
    res.status(400).json({ error: error.message });
    }
};

// Export the functions to be used in other parts of the application
module.exports = {
  createWorkout, // Function to create a new workout
  getWorkouts, // Function to get all workouts
  getWorkout, // Function to get a single workout by ID
  deleteWorkout, // Function to delete a workout by ID
  updateWorkout // Function to update a workout by ID
};
