const {addNewDevice} = require("../models/dictionary")

const postNewDevice = (req, res, next) =>{
    let deviceName = req.params.deviceName
    addNewDevice(deviceName).then(()=>{
    })

}

module.exports = { postNewDevice }