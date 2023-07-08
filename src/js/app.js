import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

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