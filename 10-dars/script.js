let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let slider = document.querySelector(".slider");
let elContainer = document.querySelector(".container");
let elBody = document.querySelector("body");

btn1.onclick = function(){
    this.style.background = "#fff";
    btn2.style.background = "transparent";
    btn3.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '0px';
}



btn2.onclick = function(){
    this.style.background = 'white';
    btn1.style.background = "transparent";
    btn3.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '-600px';
}


btn3.onclick = function(){
    this.style.background = 'white';
    btn2.style.background = "transparent";
    btn1.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '-1200px';
}


btn4.onclick = function(){
    this.style.background = 'white';
    btn2.style.background = "transparent";
    btn3.style.background = "transparent";
    btn1.style.background = "transparent";
    slider.style.marginLeft = '-1800px';

}