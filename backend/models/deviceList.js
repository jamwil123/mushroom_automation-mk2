const db = require('../db/db')
const { checkIfDeviceAlreadyExists } = require("../utils/utils_functions")


const addNewDevice = (deviceName) => {
    console.log('in model')
    console.log("func check " +  checkIfDeviceAlreadyExists(deviceName))
// if(checkIfDeviceAlreadyExists()) {//Checks DB to see if the device name already exists 
// throw 'Device name already exists' } //If the device exists, throw error
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


const fetchAllDevices = () =>{
    return db
    .collection('main')
    .get()
    .then((res)=>{
       
        return res.docs.map((devices)=>{
            console.log(devices.data())
            return devices.data()
        })
        
    })
    
}


module.exports = {addNewDevice, fetchAllDevices}