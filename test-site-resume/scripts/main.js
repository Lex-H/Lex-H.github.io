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
    var myName = prompt('�п�J�A���W�r');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "��!" + myName + "�C�w����[�ڪ������I";
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "��!" + myName + "�C�w����[�ڪ������I";
}

myButton.onclick = function () {
    setUserName();
}