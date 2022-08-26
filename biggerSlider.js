let slide = document.getElementById("slider");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");

btn1.onclick = function(){
    slide.style.transform = "translatex(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    // btn5.classList.remove("active");
}

btn2.onclick = function(){
    slide.style.transform = "translatex(-100%)";
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    // btn5.classList.remove("active");
}

btn3.onclick = function(){
    slide.style.transform = "translatex(-200%)";
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
}

btn4.onclick = function(){
    slide.style.transform = "translatex(-300%)";
    btn4.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn5.classList.remove("active");
}

btn5.onclick = function(){
    slide.style.transform = "translatex(-400%)";
    btn5.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}