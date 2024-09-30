const express = require("express");
require("dotenv").config();
const workoutsRouter = require("./routes/workouts");

// Create the server
const app = express();

app.use("/api/workouts", workoutsRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
