$(document).ready(function() {


// Add jQuery here

  $('.chapter-accordion').find('.chapter-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).toggleClass('icon-active');


    //Hide the other panels
//    $(".article-container").not($(this).next()).slideUp('fast');

  });





  });
