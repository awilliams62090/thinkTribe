const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const taskRoutes = require("./task");

// User routes
router.use("/user", userRoutes);

// Task Routes
router.use("/task", taskRoutes);

// Appointment Routes
router.use("/appt", taskRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;