const db = require('../db/db')

const checkIfDeviceAlreadyExists = (deviceName) => { 
    console.log("in uti func")
    return db
    .collection('main')
    .doc(deviceName)
    .get()
    .then((res)=>{
        console.log(res.docs(), "<<<<<")

   
    })
}

module.exports = { checkIfDeviceAlreadyExists }