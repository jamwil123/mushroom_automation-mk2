const db = require('../db/db')
const { checkIfDeviceAlreadyExists } = require("../utils/utils_functions")
const postNewDevice = (deviceName) => {

const data = {
    "CurrentStatus": false,
    "PrevStatus": false,
    "statusChange": false,
    "time_function": "",
    "GPIO_Pin": NaN,
    "time_schedule": {
        "schedule": true,
        "start_date" : NaN,
        "start_time" : NaN,
        "end_date" : NaN,
        "end_time" : NaN,
        "interval" : NaN,
        "repeat_timer" : true
    }
}
return db
.collection('main')
.doc(deviceName)
.set(data)
.then(()=>{
    return db
    .collection('main')
    .doc(deviceName)
    .get().then((res)=>{
        return res.data()
    })
})
}


module.exports = {postNewDevice}