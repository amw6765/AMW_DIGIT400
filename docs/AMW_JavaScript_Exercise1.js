window.addEventListener('DOMContentLoaded',tiger,false);

function tiger() {
    alert ('Hi there! Looks like the page loaded! Yay!');
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', dateTime ,false)
buttons[1].addEventListener('click', changeColor, false)
}

function dateTime() {
    document.getElementById('dateTime').innerHTML = Date();
    
}

function changeColor() {
var p1 = document.getElementById("welcome") 
console.log('This function is firing!')
{p1.style.backgroundColor = "aqua";}
}

