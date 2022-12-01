const express = require("express");
const deviceScheduleRouter = express.Router();




deviceScheduleRouter.route("/:deviceName").post(postNewSchedule)






module.exports = {deviceScheduleRouter}