const {addNewDevice, fetchAllDevices} = require("../models/deviceList")

const postNewDevice = (req, res, next) =>{
    let deviceName = req.params.deviceName
    let deviceData = req.body
    console.log(deviceName, deviceData)

    addNewDevice(deviceName, deviceData[0]).then((res)=>{
        console.log(res)
    }).catch(({msg, status})=>{
        console.log(msg)
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