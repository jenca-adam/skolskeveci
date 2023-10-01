#!/bin/bash
for i in chapter* ;do
	cd $i;
	echo -ne "\rProcessing $i ...";
	nohup pdfjam page?.pdf worksheet.pdf -o chapter.pdf 2> /dev/null ;
	qpdf --rotate=-90 chapter.pdf --replace-input;
	
	cd ..;
	done
echo -ne "\rFinished. Writing book.pdf ..."
nohup pdfjam chapter*/chapter.pdf -o book.pdf --papersize '{1080px,850px}' 2>/dev/null
echo -ne "\r\t\t\r"
