import threading
import time
import weather
dys=['Pon','Uto','Str','Štv','Pia','Sob','Ned']
def logdata():
    while True:
        data=[]
        tm=time.localtime()
        if tm.tm_hour%6==0 & tm.tm_sec==0:
                data.append([tm,int(weather.forecast().today[f'{tm.tm_hour}:00'].temp)]
                with open('data.dat','w')as f:
                    f.write(str(data))
threading.Thread(target=logdata,daemon=True).start()
