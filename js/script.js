var burger = document.querySelector('.header__burger');
var item0 = document.querySelectorAll('.footer__item2');
   
burger.addEventListener("click", ()=>{
   document.querySelector('.header__menu_burger').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
   burger0.classList.toggle('active');
   item0.forEach(item => {
      item.classList.remove('active');
      item.closest('.footer__item2').querySelector('.footer__up_icon').classList.remove('active');
   });
});

// next

window.onload = function () {
   document.addEventListener("click", activet);

   function activet(e) {
      const targetElem = e.target;
      if(targetElem.classList.contains('footer__up')) {
         targetElem.closest('.footer__item2').classList.toggle('active');
         targetElem.closest('.footer__item2').querySelector('.footer__up_icon').classList.toggle('active');
      }
   }
}

// next


const slides = document.querySelectorAll('.home__slider_img'),
lines = document.querySelector('.home__slider_line'),
dots = document.querySelectorAll('.home__dot'),
next = document.querySelector('.home__btn_next'),
prev = document.querySelector('.home__btn_prev');

let sliderCount = 0,
sliderWidth;

window.addEventListener('resize', sliderShow);

// присвоение функций кнопкам

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// адаптив слайдера

function sliderShow() {
   sliderWidth = document.querySelector('.home__slider').offsetWidth;

   rollSlider();
}

sliderShow();

// вперед и назад

function nextSlide() {
   sliderCount++;
   if(sliderCount >= slides.length) sliderCount = 0;

   rollSlider();
   thisSlide(sliderCount);
}

function prevSlide() {
   sliderCount--;
   if(sliderCount < 0) sliderCount = slides.length -1;

   rollSlider();
   thisSlide(sliderCount);
}

// расстояние переключений

function rollSlider() {
   lines.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// какой слайд активен

function thisSlide(index) {
   dots.forEach(item => item.classList.remove('active'));
   dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
   dot.addEventListener('click', ()=> {
      sliderCount = index;
      rollSlider();
      thisSlide(sliderCount);
   });
});

// next

const headerItem = document.querySelectorAll('.inputs__input_call');
const mainContent = document.querySelectorAll('.inputs__group');

for(let item of headerItem) {
   item.addEventListener('click', ()=> {
      for(let element of mainContent) {
         element.classList.add('hidden'); 
         headerItem.forEach(el=>{ el.classList.remove('active'); });
         item.classList.add('active');
      }
      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden');

   });
}

// next 

var productContainers = document.querySelectorAll('.items');
var item20 = document.querySelectorAll('.item0')[0];
var nxtBtn = document.querySelectorAll('.products__prev');
var preBtn = document.querySelectorAll('.products__next');

productContainers.forEach((item, i) => {
      let containerWidth = item20.clientWidth + 30;

      nxtBtn[i].addEventListener('click', () => {
         item.scrollLeft += containerWidth;
      });

      preBtn[i].addEventListener('click', () => {
         item.scrollLeft -= containerWidth;
      });
      
});

// next

'use strick'

const tabsBtn = document.querySelectorAll('.products__item01');
const tabsContent = document.querySelectorAll('.products__items');

tabsBtn.forEach(function(element) {
   element.addEventListener('click', open);
});

function open(evt){
   const tabTarget = evt.currentTarget;
   const button = tabTarget.dataset.button;

   tabsBtn.forEach(function(item){
      item.classList.remove('active');
   });
   tabsContent.forEach(function(item){
      item.classList.remove('active');
   });

   tabTarget.classList.add('active');
   document.querySelector(`#${button}`).classList.add('active');

}
