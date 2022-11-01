const db = require('../db/db')


const fetchLightsDict = () =>{

    return db
    .collection('main')
    .doc('lights')
    .get()
    .then((res)=>{
        console.log(res.data())
            return res.data()
    })

}

module.exports = {fetchLightsDict}