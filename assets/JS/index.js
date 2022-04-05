"use strict";

const seasonImg = document.querySelector('#image');

const imgs = [
    './imgs/spring.jpg',
    './imgs/summer.jpg',
    './imgs/fall.jpg',
    './imgs/winter.jpg',
];

let currentSlide = 0;

setInterval(() => {

    if(currentSlide === imgs.length - 1) {
        currentSlide  = 0;
    } else {
        currentSlide++;
    }
    seasonImg.setAttribute('src', imgs[currentSlide]);
}, 5000);