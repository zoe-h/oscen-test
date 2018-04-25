$(document).ready(function() {


// Add jQuery here

  $('.chapter-accordion').find('.chapter-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).toggleClass('icon-active');


    //Hide the other panels
   $(".article-panel").not($(this).next()).slideUp('fast');

  });


// hover effect
  $('.chapter-toggle').click(function(){

  $(this).closest('.chapter-accordion').next().find('.chapter-toggle').addClass('nudge-down');

  });


  $('.chapter-toggle').mouseOver(function(){
    $(this).addClass('nudge-down');
  });


// tranistion


function transition(){
     $(".white-slide").addClass('transition');
}

window.onbeforeunload = function(){
  transition();
  alert('Bye.');
};

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
