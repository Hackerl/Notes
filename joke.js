function joke(){
    parent=$("td[align$='center']");
    for(var i = parent.length - 1; i >= 0; i--) { 
        parent[i].removeChild(parent[i].childNodes[5]);
        parent[i].removeChild(parent[i].childNodes[4]);  
    }
    setTimeout(function () {
        alert("你是不是没有找到删除按钮^_^它已经被我藏起来了");
    }, 4000);
}
setTimeout(joke, 500);
