const {setNewSchedule} = require('../models/device-schedule')



const postNewSchedule = (req, res, next)=>{

    let deviceName = req.params.deviceName
    let updatedData = req.body
    setNewSchedule(deviceName, updatedData).then(()=>{

    })


}

module.exports = {postNewSchedule}