"use strict";



let images = document.querySelectorAll(".card-img-top");

images.forEach(image => {
    image.addEventListener("mouseover",function(){
        image.style.zIndex = "0";
    })

    image.addEventListener("mouseout",function(){
        image.style.zIndex = "1";
    })

});


