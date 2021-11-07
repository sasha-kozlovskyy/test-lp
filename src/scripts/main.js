/* eslint-disable no-unused-vars */
'use strict';

const counter = document.querySelector('.header__counter');
const speed = 100;
const updateCount = (data) => {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const inc = target / speed;

  if (count < target) {
    counter.innerText = count + inc;
    setTimeout(updateCount, 50);
  } else {
    counter.innerText = target;
  }
};

updateCount(counter);

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const menuActiv = document.querySelector('.menu__activ');
const menuClose = document.querySelector('.menu__close');
const list = document.querySelectorAll('.nav__link');

menu.addEventListener('click', () => {
  nav.classList.toggle('nav--activ');
  menuActiv.classList.toggle('menu__activ--hide');
  menuClose.classList.toggle('menu__close--hide');
});

[...list].map(item => item.addEventListener('click', () => {
  nav.classList.remove('nav--activ');
  menuActiv.classList.remove('menu__activ--hide');
  menuClose.classList.remove('menu__close--hide');
}));

// eslint-disable-next-line no-undef
const swiper = new Swiper('.slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  pagination: false,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  loop: true,
});
