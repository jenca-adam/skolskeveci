#!/usr/bin/env python3
import  plotly.express as exp
import pandas as pd
def main():
    data=[]
    df=pd.read_csv('ba.csv')
    days=[] 
    for i,row in df.iterrows():
        ix=i+1
        hrs=i*24
        data.extend([row['t1'],row['t2'],row['t3'],row['t4']])
        days.extend([str(hrs),str(hrs+6),str(hrs+12),str(hrs+18)])
    print(days)
    plot=exp.line(x=days,y=data,title='teploty',labels={'x':'Čas (hodiny)','y':'Teplota(°C)'})
    plot.show()
    
if __name__=='__main__':
    main()
