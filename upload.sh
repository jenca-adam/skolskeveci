git add --all -v
for i in *;do
	git add $i;done 
git commit -m "$(date)" 
git push
