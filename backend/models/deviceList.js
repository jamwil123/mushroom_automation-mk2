const db = require("../db/db");
const { checkIfDeviceAlreadyExists } = require("../utils/utils_functions");

const addNewDevice = async (deviceName, deviceData) => {
  const data = {
    CurrentStatus: deviceData["CurrentStatus"],
    PrevStatus: deviceData["PrevStatus"],
    statusChange: deviceData["statusChange"],
    time_function: deviceData["time_function"],
    GPIO_Pin: deviceData["GPIO_Pin"],
    time_schedule: {
      schedule: deviceData["time_schedule"]["schedule"],
      start_date: deviceData["time_schedule"]["start_date"],
      start_time: deviceData["time_schedule"]["start_time"],
      end_date: deviceData["time_schedule"]["end_date"],
      end_time: deviceData["time_schedule"]["end_time"],
      interval: deviceData["time_schedule"]["interval"],
      repeat_timer: deviceData["time_schedule"]["repeat_timer"],
    },
  };
  let check = await checkIfDeviceAlreadyExists(deviceName);
  if (check) {
    return Promise.reject({
      status: 400,
      msg: "This Device Name Already Exists!",
    });
  }

  await db.collection("main").doc(deviceName).set(data);

  return await checkIfDeviceAlreadyExists(deviceName)
    ? { msg: "device created!", status: 201 }
    : Promise.reject({ msg: "device was not succesfully created", status: 400 });
};

const fetchAllDevices = () => {
  return db
    .collection("main")
    .get()
    .then((res) => {
      return res.docs.map((devices) => {
        let deviceName = devices["_ref"]["_path"]["segments"][1]
        return {[deviceName]:{...devices.data()}}
      });
    });
};

module.exports = { addNewDevice, fetchAllDevices };
