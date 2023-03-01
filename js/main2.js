
var sliderValue = document.querySelector('.part1__span');
var inputSlider = document.querySelector('.part1__range');

inputSlider.oninput = (()=>{
   let value = inputSlider.value;
   sliderValue.textContent = value;
   sliderValue.style.left = ((value / 10000) * 2) + "%";
   sliderValue.classList.add('show');
});
inputSlider.onblur = (() => {
   sliderValue.classList.remove('show');
});
// next

const headerItem0 = document.querySelectorAll('.choice');
const mainContent0 = document.querySelectorAll('.group');

for(let item of headerItem0) {
   item.addEventListener('click', ()=> {
      for(let element of mainContent0) {
         element.classList.add('hidden0'); 
         headerItem0.forEach(el=>{ el.classList.remove('active'); });
         item.classList.add('active');
      }
      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden0');

   });
}


const choice0 = document.querySelectorAll('.part1__sale_choice');

choice0.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      choice0.forEach(el=>{ 
         el.classList.remove('active'); 
      });
   item.classList.add('active');
   item.classList.remove('dark');
});
});

const choice1 = document.querySelectorAll('.part1__choice1');

choice1.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      choice1.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});

//  next

const filterItem = document.querySelector('.home1__calls');
const filterImage = document.querySelectorAll('.home1__items');

window.onload = () => { // once window loaded 
   filterItem.onclick = (selectedItem) => { // when user clicked on filterItem
      if(selectedItem.target.classList.contains('home1__call')) { // if user click element has class .item
         let filterName = selectedItem.target.getAttribute('data-name'); // getting data-name value of the user selected and scrolling in a filterName variable
         filterImage.forEach((image) => {
            let filterImages = image.getAttribute('data-name'); 
            if((filterImages == filterName) || filterName == 'all') {
               image.classList.remove('hide');
               image.classList.add('show');
            } else {
               image.classList.add('hide');
               image.classList.remove('show');
            }
         });
      }
   }
}

// next 

const burger0 = document.querySelector('.home1__burger');
const krest = document.querySelector('.home1__krest');

burger0.addEventListener('click', ()=> {
   document.querySelector('.home1__part1').classList.add('active');
   burger0.classList.add('active');
});
krest.addEventListener('click', ()=> {
   document.querySelector('.home1__part1').classList.remove('active');
   burger0.classList.remove('active');
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