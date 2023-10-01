#!/usr/bin/env python3
# NO SLICES

print(*((''.join(map(string.__getitem__,range(start,start+leng))) if start+leng-1 < len(string) else "presiahli ste koniec retazca") for string,start,leng in ((input("Zadajte retazec:"),int(input("Zadajte zaciatok useku:")),int(input("Zadajte dlzku useku:"))),)))

