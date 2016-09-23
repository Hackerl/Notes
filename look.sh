#!/bin/bash
for i in `seq 1 254`
do
    {
        ping -c2 192.168.0.$i &>/dev/null && echo "192.168.0.$i is alive"
    }&
done
wait
#探测局域网存活主机
