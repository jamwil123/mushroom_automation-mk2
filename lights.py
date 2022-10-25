import time
import schedule
# import RPi.GPIO as GPIO

# GPIO.setmode(GPIO.BCM) # GPIO Numbers instead of board numbers


startTime = devicesStatus[lights][time_schedule][startTime]
endTime = time.time() + ST_ET_GAP
ST_ET_GAP = 10
interval = 10
repeat = devicesStatus[lights][time_schedule][repeat_timer]
GPIO_Pin = devicesStatus[lights][GPIO_Pin]
isOn = devicesStatus[lights][CurrentStatus]


def lights():
    global endTime
    global isOn
    global startTime
    global repeat
    global interval
    global repeat
    global ST_ET_GAP
    
    if time.time() < endTime and isOn == False: 
        lightsOn()
        isOn = True
        print('in If 1')
    
    if time.time() >= endTime and isOn: 
        lightsOff()
        isOn = False 
        print('in If 2')
    

    if repeat and time.time() >= endTime + interval and isOn == False:
        lightsOn()
        isOn = True
        startTime = time.time()
        endTime = ST_ET_GAP + time.time()
        print('in If 3')


def lightsOn():
    # GPIO.output(GPIOVal, True)
    print('Lights on!')

def lightsOff(): 
    # GPIO.output(GPIOVal, False)
    print("lights off")


 
    # Turning on devices. Scan the API for all registered devices.
    # Map over each device and check if the key status change has been changed to true 
    # if it has, run the function turnOnDevice 
    


    # run a function that will start a 
