const express = require("express");
const deviceListRouter = express.Router();
const {getLightsDict} = require('../controllers/lights')
const { postNewDevice} = require('../controllers/deviceList')


deviceListRouter.route('/:deviceName').post(postNewDevice)
deviceListRouter.route('/').get(getAllDeviceList)
deviceListRouter.route('/lights').get(getLightsDict)



module.exports = {deviceListRouter}