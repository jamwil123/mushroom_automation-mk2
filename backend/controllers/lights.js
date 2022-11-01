const {fetchLightsDict} = require('../models/lights')

getLightsDict = (req, res) => {
    fetchLightsDict().then((dict)=>{
        res.status(200).send(dict)
    }).catch((err)=>{
        res.status(400).send(err)
    })
}

module.exports = {getLightsDict}