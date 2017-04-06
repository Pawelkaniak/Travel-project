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
  /*$('#colorSi').on('click', function () {
    $('.dropdown').find('li').eq(0).slideToggle(250);
    $('.dropdown').find('li').eq(1).slideToggle(500);
    $('.dropdown').find('li').eq(2).slideToggle(750);
    $('.dropdown').find('li').eq(3).slideToggle(1000);
  });*/
  
 $('#colorSi').on('click', function () {
    $('.dropdown').find('li').eq(0).slideToggle(160, function()  { 
      $('.dropdown').find('li').eq(1).slideToggle(160, function()  { 
        $('.dropdown').find('li').eq(2).slideToggle(160, function()  { 
          $('.dropdown').find('li').eq(3).slideToggle(160); 
        })
      })
    })
  });
      
  
  /* Change icon in  */
  $('#colorSi').mouseenter(function( ) {
    $('#prof_icon').attr("src","images/icons/forum-user2.png");   
  });
  $('#colorSi').mouseleave(function( ) {
    $('#prof_icon').attr("src","images/icons/forum-user1.png");   
  });
  
  /*$('#colorSi').on( 'click', function( ) {
    $('#prof_icon').attr("src","images/icons/forum-user2.png");   
  });
*/
  
  /* datapickers in JQuery */
  $('#check_in').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  });
  $('#check_out').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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