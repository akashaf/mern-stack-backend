// Initilize express router
const express = require("express");
const Workout = require("../models/workout");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ message: "Workouts route" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Workout with id ${id}` });
});

router.post("/", async(req, res) => {
  const { title, reps, load } = req.body;
  try {
   const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Workout delete with id ${id}` });
});
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Workout update with id ${id}` });
});

module.exports = router;
