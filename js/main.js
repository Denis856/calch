var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');

function showText1() {
   content1.classList.add('show');
   content2.classList.add('show1');
}

function showText2() {
   content1.classList.remove('show');
   content2.classList.remove('show1');
}

$(document).ready(function(){
   $('.title21').click(function(event){
      if($('.page2_items').hasClass('one')) {
         $('.title21').not($(this)).removeClass('active');
         $('.text21').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});
