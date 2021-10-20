window.addEventListener('DOMContentLoaded',tiger,false);

function tiger() {
    alert ('Hi there! Looks like the page loaded! Yay!');
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeColor,false)

}


function changeColor() {
var p1 = document.getElementById("colorToggle") 
{p1.style.backgroundColor = "skyblue";}