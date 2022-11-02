const db = require('../db/db')
const { checkIfDeviceAlreadyExists } = require("../utils/utils_functions")


const addNewDevice = async (deviceName, deviceData) => {
const data = {
    "CurrentStatus": deviceData["CurrentStatus"],
    "PrevStatus": deviceData["PrevStatus"],
    "statusChange": deviceData["statusChange"],
    "time_function": deviceData["time_function"],
    "GPIO_Pin": deviceData["GPIO_Pin"],
    "time_schedule": {
        "schedule": deviceData["time_schedule"]["schedule"],
        "start_date" : deviceData["time_schedule"]["start_date"],
        "start_time" : deviceData["time_schedule"]["start_time"],
        "end_date" : deviceData["time_schedule"]["end_date"],
        "end_time" : deviceData["time_schedule"]["end_time"],
        "interval" : deviceData["time_schedule"]["interval"],
        "repeat_timer" : deviceData["time_schedule"]["repeat_timer"]
    }
}
console.log('In model')
let check = await checkIfDeviceAlreadyExists(deviceName)
    if(check){
    console.log('inside If res == false')
      return Promise.reject({status: 400, msg: 'This Device Name Already Exists!'})
    }

//  .catch(({status, msg})=>{
//     return {status: status, msg: msg}
//  })

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