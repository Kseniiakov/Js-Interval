"use strict";

const seasonImg = document.querySelector('#image');

setInterval(() => {
    let src = seasonImg.getAttribute('src');

    if(src === './imgs/spring.jpg') {
        seasonImg.setAttribute('src', './imgs/summer.jpg');
    };
    
    if(src === './imgs/summer.jpg') {
        seasonImg.setAttribute('src', './imgs/fall.jpg');
    };

    if(src === './imgs/fall.jpg') {
        seasonImg.setAttribute('src', './imgs/winter.jpg');
    };
    
    if(src === './imgs/winter.jpg') {
        seasonImg.setAttribute('src', './imgs/spring.jpg');
    };
}, 5000);