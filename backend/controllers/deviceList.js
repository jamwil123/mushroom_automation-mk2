const {addNewDevice, fetchAllDevices} = require("../models/deviceList")

const postNewDevice = (req, res, next) =>{
    let deviceName = req.params.deviceName
    console.log(deviceName)
    addNewDevice(deviceName).then((res)=>{
        console.log(res)
    })

}

const getAllDeviceList = (req, res, next) => {
    console.log('hello')
    fetchAllDevices().then((devices)=>{
        console.log(devices)
        res.status(200).send(devices)
    })

}

module.exports = { postNewDevice, getAllDeviceList }