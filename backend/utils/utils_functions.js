const db = require('../db/db')

const checkIfDeviceAlreadyExists = async (deviceName) => { 
    const cityRef = db.collection('main').doc(deviceName);
const doc = await cityRef.get();
if (!doc.exists) {
  return false
} else {
  return true
}
}

module.exports = { checkIfDeviceAlreadyExists }