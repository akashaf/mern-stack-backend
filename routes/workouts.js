// Initilize express router
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ message: "Workouts route" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Workout with id ${id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Workout created" });
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
