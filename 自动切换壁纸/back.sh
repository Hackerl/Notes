#!/bin/bash

. /root/folder/background/discover_session_bus_address.sh
export DISPLAY=:0
confFile="/tmp/.switchbg.conf"
BGDIR="${HOME}/Pictures/AutoWallpaper"
filepath=${BGDIR}

find $filepath | grep -i -E ".jpg$|.png$|.jpeg$|.bmp$" > $confFile
cnt=`cat $confFile | wc -l`

while true
do
	line=$(($RANDOM % $cnt + 1))
	bgfile=$(head -n $line $confFile | tail -n 1)
	bgfile="'file://$bgfile'"
	bkfile=$(gsettings get org.gnome.desktop.background picture-uri)
#	echo "old_wallpaper: $bkfile"
#	echo "new_wallpaper: $bgfile"

	if [[ ( ${cnt} == 1 ) && ( $bkfile == $bgfile ) ]]; then
		break
	fi
	if [[ $bkfile != $bgfile ]]; then
		break
	fi
done
gsettings set org.gnome.desktop.background picture-uri "$bgfile"
rm -f $confFile
