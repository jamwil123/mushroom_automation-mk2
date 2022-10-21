import requests
import time 
import json
import schedule 
from datetime import datetime, date 
from lights import *
from humidifier import humidifier

def connected_to_internet(url='http://www.google.com/', timeout=5):
    try:
        _ = requests.head(url, timeout=timeout)
        print('Connected to the internet')
        return True
    except requests.ConnectionError:
        print("No internet connection available.")
    return False


def turnOnDevice(timeToTurnOnFor, timeUnit, actionFunc, pinNo):
        if timeUnit ==  "Seconds":
            return schedule.every(timeToTurnOnFor).seconds.do(actionFunc, pinNo)
        if timeUnit == "Minutes":
            return schedule.every(timeToTurnOnFor).minutes.do(actionFunc, pinNo)
        if timeUnit == "Hours":
            return schedule.every(timeToTurnOnFor).hours.do(actionFunc, pinNo)
        if timeUnit == "Days":
            return schedule.every(timeToTurnOnFor).days.do(actionFunc(pinNo))

def testFunc(pinNo=10):
    print('This is a working test and the pin Number is: {}'.format(pinNo))



devicesStatus = {
    "lights": {
    'CurrentStatus': False,
    'PrevStatus': False,
    "statusChange": True,
    "time_function": lights,
    "time_schedule": {
        "start_date":'18/10/22',
        "start_time": '12:00:00',
        "end_date": '20/10/23',
        "end_time": '13:00:00'

    }
    }, "humidifier": {
    'CurrentStatus': False,
    'PrevStatus': False,
    "statusChange": True,
    "time_function": humidifier,
    "time_schedule": {
        "start_date":'18/10/22',
        "start_time": '12:00:00',
        "end_date": '20/10/23',
        "end_time": '13:00:00'

    }
    },


}





while True:
    if connected_to_internet():
        x = requests.get('https://catfact.ninja/fact')
        data = json.loads(x.text)

    for device in devicesStatus: 
                devicesStatus[device]['time_function']()

    

    schedule.run_pending()
    time.sleep(1)





