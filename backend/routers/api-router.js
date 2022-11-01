const express = require("express");
const apiRouter = express.Router();
const { getAPI } = require("../controllers/api");
const { deviceListRouter } = require("./deviceList-router")


apiRouter.route("/").get(getAPI);
apiRouter.use("/dictionary", deviceListRouter )

module.exports = { apiRouter };