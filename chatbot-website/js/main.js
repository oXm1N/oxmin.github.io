var pricesSwiper = new Swiper(".prices-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 0,
      width: '330',
    },
    769: {
      centeredSlides: true,
      slidesPerView: 1,
      initialSlide: 1,
    }
  }
});

var stepsSwiper = new Swiper(".steps-swiper", {
  slideActiveClass: 'steps-swiper-active',
  slidesPerView: 2,
  spaceBetween: 80,
  loop: true,
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
});

var testimonialsSwiper = new Swiper(".testimonials-swiper", {
  slideActiveClass: 'testimonials-swiper-active',
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    365: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

// modal windows

var login = document.querySelector('.entrance-desk');
var registration = document.querySelector('.registration-desk')
var body = document.querySelector('body');

document.querySelector('#login').addEventListener('click', function(popupOpen){
  login.classList.add("popup-active");
  body.style.overflow = 'hidden';
});

document.querySelector('#registration').addEventListener('click', function(popupOpen){
  registration.classList.add('popup-active');
  body.style.overflow = 'hidden';
});

document.querySelector('#popup-close-one').addEventListener('click', function(popupClose){
  login.classList.remove('popup-active');
  body.style.overflow = 'visible';
});

document.querySelector('#popup-close-two').addEventListener('click', function(popupClose){
  registration.classList.remove('popup-active');
  body.style.overflow = 'visible';
});

// burger

// function burgerMenu() {
//   var links = document.getElementById("links");

//   if (links.style.display === "flex") {
//     links.style.display = "none";
//   }
//   else {
//     links.style.display = "flex";
//   }
// }


var navIcon = document.getElementById("nav-icon");
var links = document.getElementById("links");
var header = document.getElementById("header-content")


document.getElementById("nav-icon").addEventListener('click', function(menuOpen){
  links.classList.add('links');
  links.style.display = 'block';
  navIcon.style.display = 'none';
  body.style.overflow = 'hidden';
  header.style.webkitFilter = 'blur(40px)';
});

document.getElementById("close-burger").addEventListener('click', function(menuClose){
  registration.classList.remove('links');
  links.style.display = 'none';
  navIcon.style.display = 'block';
  body.style.overflow = 'visible';
  header.style.webkitFilter = 'blur(0)';
});
