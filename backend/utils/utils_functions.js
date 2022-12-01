const db = require('../db/db')

const checkIfDeviceAlreadyExists = async (deviceName) => { 
    const deviceNameRef = db.collection('main').doc(deviceName);
const doc = await deviceNameRef.get();
if (!doc.exists) {
  return false
} else {
  return true
}
}

module.exports = { checkIfDeviceAlreadyExists }