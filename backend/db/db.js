const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require("../utils/mushroom-automation-firebase-adminsdk-00s7u-f008580307.json");



initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


module.exports = db; 