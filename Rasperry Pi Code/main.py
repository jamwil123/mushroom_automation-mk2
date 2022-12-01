import requests
import time 
import json
import schedule 
from datetime import datetime, date 
from lights import lightsController
from humidifier import humidifier


def connected_to_internet(url='http://www.google.com/', timeout=5):
    try:
        _ = requests.head(url, timeout=timeout)
        print('Connected to the internet')
        return True
    except requests.ConnectionError:
        print("No internet connection available.")
    return False



devicesStatus = {
    "lights": {
    "CurrentStatus": False,
    "PrevStatus": False,
    "statusChange": True,
    "time_function": lightsController,
    "GPIO_Pin": 1,
    "time_schedule": {
        "schedule": True,
        "start_date" : time.time(),
        "start_time" : time.time(),
        "end_date" : time.time(),
        "end_time" : time.time() + 10,
        "interval" : 10,
        "repeat_timer" : True

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
print(devicesStatus["lights"]["time_schedule"]["start_date"])


data = None 


while True:
    if connected_to_internet():
        x = requests.get('https://catfact.ninja/fact')
        data = json.loads(x.text)

    for device in devicesStatus: 
                devicesStatus[device]['time_function']()

    

    schedule.run_pending()
    time.sleep(0.1)






