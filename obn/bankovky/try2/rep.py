import art
import os
import sys
import tabulate
FN="t2.txt"

out=[]
for line in open(FN):
    if line.startswith(":fancy:"):
        out.append(art.text2art(line.replace(":fancy:",""),"doom").rstrip())
    elif line.startswith(":table:"):
        f=f"tab/{line.replace(':table:','').strip()}.tab"
        if not os.path.exists(f):
            print(":ALERT: No such table:",line.replace(':table:','').strip(),",skipping!",file=sys.stderr)
            continue
        tab=[t.split(',') for t in open(f)]
        out.append(tabulate.tabulate(tab,tablefmt="rounded_grid"))
    else:
        out.append(line)
print(''.join(out))

