
var button=document.getElementById("myButton");
var title=document.getElementById("myTitle");
var headerlogo=document.getElementById("headerLogo");

button.onclick=function() {
    title.style.color="red";
}

title.onclick=function() {
    title.style.color="black";
}

headerlogo.onmouseenter=function() {
    headerlogo.style.fontSize= "40px";
}

headerlogo.onmouseleave=function() {
    headerlogo.style.fontSize="";
}

var button=document.getElementById ("myButton");

var modal=document.getElementById ("myModal");

var close=document.getElementById ("myClose");

button.onclick = function () {
    modal.style.display= "block";
}

close.onclick=function () {
    modal.style.display= "none";
}

