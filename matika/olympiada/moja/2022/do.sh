#!/usr/bin/env bash
cd xetex
f=$(ls p*.tex|awk -F. '{print $1}')
cd ..
for i in $f ;do
	echo "doing $i"
	rm pdf/$i.pdf 2>/dev/null
	cp xetex/$i.tex pdf/$i.tex
	echo "running xelatex"
	xelatex pdf/$i.tex  
	echo "removing junk files"
	#mv pdf/$i.pdf . 
	rm pdf/$i.*
	mv $i.pdf pdf;
	rm $i* *.log 2>/dev/null
	echo "$i done"
	done
echo "fp done"
echo "jamming"
pdfjam pdf/p*.pdf -o /dev/stdout| tee pdf/all.pdf | cat >all.pdf
pdfjam pdf/pz9*.pdf -o /dev/stdout| tee pdf/9all.pdf | cat>9all.pdf
echo "all done"
