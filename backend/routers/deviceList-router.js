const express = require("express");
const deviceListRouter = express.Router();
const {getLightsDict} = require('../controllers/lights')
const { postNewDevice, getAllDeviceList} = require('../controllers/deviceList')


deviceListRouter.route('/add-device/:deviceName').post(postNewDevice)
deviceListRouter.route('/').get(getAllDeviceList)
// deviceListRouter.route('/lights').get(getLightsDict)



module.exports = {deviceListRouter}