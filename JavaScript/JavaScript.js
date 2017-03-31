document.addEventListener("DOMContentLoaded", function () {
  console.log('DOM fully loaded and parsed');
  /*funkcja do zabezpieczenia kodu*/
  

  /* Animation for account - dropdown list JS */
  
  
  /* var buttonSingIn = document.querySelector('#colorSi');
   var dropDownList = document.querySelector('.dropdown');
   
   console.log(buttonSingIn);
   
   buttonSingIn.addEventListener("click", function (event) {
     if (dropDownList.style.visibility == 'visible') {
       dropDownList.style.visibility = 'hidden';
     } else { 
       dropDownList.style.visibility = 'visible';
       }
   }); */
  
  
  /* Animation for account - dropdown list JQuery */

    /* slide down animation JQ*/
  $('#colorSi').on('click', function () {
    $('.dropdown').find('li').eq(0).slideToggle(250);
    $('.dropdown').find('li').eq(1).slideToggle(500);
    $('.dropdown').find('li').eq(2).slideToggle(750);
    $('.dropdown').find('li').eq(3).slideToggle(1000);
  });
  
  /*$('#colorSi').on('click', function () {
    $('.dropdown').find('li').eq(0).slideToggle(250, function()  { 
      $('.dropdown').find('li').eq(1).slideToggle(250, function()  { 
        $('.dropdown').find('li').eq(2).slideToggle(250, function()  { 
          $('.dropdown').find('li').eq(3).slideToggle(250); 
        })
      })
    })
  });*/
      
      /*$('.dropdown').find('li').eq(2).slideToggle(1000);
    $('.dropdown').find('li').eq(3).slideToggle(1000);
    });*/
  
  
  /* datapicker in JQuery */
  $(function () {
    $("#datepicker").datepicker();
  });
  
  
  /* JS changing class in membership section.  */
  var buttons = document.querySelectorAll('button.join_us');
  var oldClass = document.querySelectorAll('.support_member');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      if (oldClass[i].classList.contains('support_member')) {
        oldClass[i].classList.remove('support_member');
        oldClass[i].classList.add('color_member');
      }
      else {
        oldClass[i].classList.remove('color_member');
        oldClass[i].classList.add('support_member');
      }
    });
  }
});