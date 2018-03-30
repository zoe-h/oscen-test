$(document).ready(function() {


// Add jQuery here

  $('.chapter-accordion').find('.chapter-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).toggleClass('icon-active');


    //Hide the other panels
//    $(".article-container").not($(this).next()).slideUp('fast');

  });


// typewriter effect

var p = document.getElementById('typewriter');
var n = 0;
var str = p.innerHTML;
p.innerHTML = '';
setInterval(function() {
  n = n + 1;
  p.innerHTML = str.slice(0, n)
}, 80);


  });
