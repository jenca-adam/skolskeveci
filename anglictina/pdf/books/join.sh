#!/bin/bash
pr="page1.pdf"
for i in chapter* ;do
	cd $i
	nohup pdfjam page* worksheet.pdf -o chapter.pdf 2>/dev/stderr;
	qpdf --rotate=-90 chapter.pdf --replace-input;
	echo -ne "made $i\t\t\r"
	cd ..;
	done
echo -ne "\rFinished. Writing book.pdf ..."
nohup pdfjam chapter*/chapter.pdf -o book.pdf --papersize '{1080px,850px}'
echo -ne "\r\t\t\r"
