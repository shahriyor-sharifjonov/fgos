import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".reviews__swiper", {
    grabCursor: true,
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween:30,
    watchSlidesProgress: true,
    navigation:{
        prevEl: ".reviews__button-prev",
        nextEl: ".reviews__button-next",
    },
    breakpoints:{
        575:{
            slidesPerView: 4,
            spaceBetween:20,
        }
    }
});

window.addEventListener('load', function() {
    var header = document.querySelector('header');
    
    if (window.pageYOffset > 0) {
        header.classList.add('fixed');
    }
  
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});