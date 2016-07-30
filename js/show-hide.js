document.getElementById("header").style.display = "block";
document.getElementById("about").style.display = "block";
document.getElementById("mapcontain").style.display = "none";
document.getElementById("contribute").style.display = "none";

//variables for each menu item
var home = document.getElementsByTagName("a")[0];
var here = document.getElementsByTagName("a")[1];
var search = document.getElementsByTagName("a")[2];
var contrib = document.getElementsByTagName("a")[3];
var us = document.getElementsByTagName("a")[4];
var button1 = document.getElementsByTagName("a")[5];
var button2 = document.getElementsByTagName("a")[6];

//
home.onclick=function(){
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("mapcontain").style.display = "none";
    document.getElementById("contribute").style.display = "none";
};

here.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

search.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

contrib.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "none";
    document.getElementById("contribute").style.display = "block";
};

us.onclick=function(){
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("mapcontain").style.display = "none";
    document.getElementById("contribute").style.display = "none";
};

button1.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

button2.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};
