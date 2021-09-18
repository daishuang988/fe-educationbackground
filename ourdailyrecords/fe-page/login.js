function login() {
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if (username == "许欣欣" && password == "1029") {
        window.location.href = "index.html";
    } else {
        alert("用户名或者密码输入错误，请重新输入");
    }
}
// 判断audio标签的对象是否在播放，没播放的话执行play()方法,无法暂停下来
window.onload = function() {
    setInterval("toggleSound()", 100);
}

function toggleSound() {
    var music = document.getElementById("vd"); //获取ID  

    if (music.paused) { //判读是否播放  
        music.paused = false;
        music.play(); //没有就播放 
    }
}