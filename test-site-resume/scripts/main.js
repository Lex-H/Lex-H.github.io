var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/photo2.png') {
        myImage.setAttribute('src', 'images/photo4.jpg');
    } else {
        myImage.setAttribute('src', 'images/photo2.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('請輸入你的名字');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "嗨!" + myName + "。歡迎參觀我的網站！";
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "嗨!" + myName + "。歡迎參觀我的網站！";
}

myButton.onclick = function () {
    setUserName();
}