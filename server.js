const express = require("express");
const mongoose = require("mongoose"); 
require("dotenv").config();
const workoutsRouter = require("./routes/workouts");

// Create the server
const app = express();
app.use(express.json());

app.use("/api/workouts", workoutsRouter);

mongoose.connect(process.env.MONGODB_URI).then(() => {
// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Connected to DB and server is running on port ${process.env.PORT}`);
});
}).catch((error) => {
  console.log(error);
}
);

module.exports = app;


