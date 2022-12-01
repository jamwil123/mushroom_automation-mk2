const { addNewDevice, fetchAllDevices } = require("../models/deviceList");

const postNewDevice = (req, res, next) => {
  let deviceName = req.params.deviceName;
  let deviceData = req.body;
  addNewDevice(deviceName, deviceData[0])
    .then(({msg, status}) => { 
        res.status(status).send({msg: msg})
    })
    .catch(({ msg, status }) => {
      res.status(status).send({ err_msg: msg });
    });
};

const getAllDeviceList = (req, res, next) => {
  fetchAllDevices().then((devices) => {
    res.status(200).send(devices);
  });
};

module.exports = { postNewDevice, getAllDeviceList };
