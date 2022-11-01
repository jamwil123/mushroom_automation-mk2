const checkIfDeviceAlreadyExists = (deviceName) => { 
    db
    .collection('main')
    .doc()
    .get()
    .then((res)=>{
        const data = res.filter((item)=>{
            deviceName == item 
        })
        return data.length == 0 ? true : false 
    })
}