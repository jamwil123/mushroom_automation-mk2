const db = require("../db/db");

const setNewSchedule = (deviceName, rawData)=>{
    db
    .collection("main")
    .doc(deviceName)
    .set(data);
}




module.exports = {setNewSchedule}