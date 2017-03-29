document.addEventListener("DOMContentLoaded", function () {
  /*funkcja do zabezpieczenia kodu*/
  console.log('DOM fully loaded and parsed');

  
  
  /*  */ 
  
  
  /* datapicker in JQuery */
  $(function() {
    $( "#datepicker" ).datepicker();
  } );



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




