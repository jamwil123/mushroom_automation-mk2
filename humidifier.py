import time
import schedule
# import RPi.GPIO as GPIO

# GPIO.setmode(GPIO.BCM) # GPIO Numbers instead of board numbers

startTime = time.time()
endTime = time.time() + 10
interval = 10
repeat = True 
GPIOVal = 1
isOn = False


def humidifier():
    global isOn
    if repeat and time.time() < endTime and isOn == False: 
        humidifierOn()
        isOn = True
    
    if startTime + interval > endTime and isOn: 
        humidifierOff()
        isOn = False 

def humidifierOn():
    # GPIO.output(GPIOVal, True)
    print('humidifier on!')

def humidifierOff(): 
    # GPIO.output(GPIOVal, False)
    print("humidifier off")


 
    # Turning on devices. Scan the API for all registered devices.
    # Map over each device and check if the key status change has been changed to true 
    # if it has, run the function turnOnDevice 
    


    # run a function that will start a 
