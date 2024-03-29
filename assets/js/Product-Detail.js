"use strict";


let headphone1 = document.querySelector(".headphone1");
let headphone1URL = "./assets/images/headphone-5.png";

let headphone2 = document.querySelector(".headphone2");
let headphone2URL = "./assets/images/headphone-6.png";

let headphone3 = document.querySelector(".headphone3");
let headphone3URL = "./assets/images/headphone-7.png";

let mainImage = document.querySelector(".main-img");


headphone1.addEventListener("click", function(){
    mainImage.src = "";
    mainImage.src = headphone1URL;

})

headphone2.addEventListener("click", function(){
    mainImage.src = "";
    mainImage.src = headphone2URL;
})

headphone3.addEventListener("click", function(){
    mainImage.src = "";
    mainImage.src = headphone3URL;
})



