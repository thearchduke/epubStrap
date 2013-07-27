$(document).ready(function () {


/* SLIDESHOWS: See the jQuery Cycle plugin documentation for information on how to customize this. */
     $('.slideshow').cycle({
       fx: 'shuffle'       
       });



/* HIDDEN CLASSES: These classes are hidden by the javascript so that they'll show up on non-JS-enabled 
devices. See Introduction - Notes on Accessibility for details. */

$('.slideIn').hide();

/*
$('.explanation').hide();
*/

/* UNCOMMENT THIS IF YOU'RE USING THE JAVASCRIPT 'FIX' FOR SLIDERS */
/*
$('.sliding').show();
$('.slidingSpan1').show();
$('.slidingSpan2').show();
$('.slidingSpan3').show();
*/


/* HIGHLIGHTER: Any element with the class of 'highlighter' will use this code to 
toggle highlighting for all elements of its parent's class(es); useful for plays, etc. */
    $('.highlighter').on('click', function () {
        var myClass = $(this).parent().attr("class");
        var bColor = $(this).parent().css('background-color');
        if (bColor == 'rgba(0, 0, 0, 0)' || bColor == 'rgb(255, 255, 255)') {
            $('.' + myClass).css('background-color', 'yellow');
        } else if (bColor == 'rgb(255, 255, 0)') {
            $('.' + myClass).css('background-color', '#fff');
        }
    });


/* QUIZZES: Wrap your quiz in a div with the quiz class; each question in a div with 
the question class; each answer should have the answer class, as well as the additional 
class of right or wrong indicating correctness. Further explanatory text may be placed 
after an answer with the class explanation; however, this text may be visible on systems 
that don't properly parse javascript/jQuery. */
    $('.answer.wrong').on('click', function () {
        $(this).prepend('<span class="wrongX">X </span>');
        $(this).addClass('btn-danger');
        $(this).find('.explanation').show();
    });
    $('.answer.right').on('click', function () {
        $(this).prepend('<span class="rightCheck">✓ </span>');
        $(this).addClass('btn-success');
        $(this).find('.explanation').show();
    });

    $('.quiz').show();


/* SLIDERS: To make something toggle between 'visible' and 'just a button', follow this template:
      <div class="sliding slidIn">+/-
         <span class="sliderText">Sohn am Ort, the son in town, lorem ipsum dolor sit amit</span >
      </div>
*/
    $('.sliding').on('click', function () {
      $(this).find('.sliderText').toggle();
      $(this).toggleClass('slidIn');
    });
    $('.slidingSpan1').on('click', function () {
      $(this).find('.sliderText').toggle();
      $(this).toggleClass('slidIn');
    });
    $('.slidingSpan2').on('click', function () {
      $(this).find('.sliderText').toggle();
      $(this).toggleClass('slidIn');
    });
    $('.slidingSpan3').on('click', function () {
      $(this).find('.sliderText').toggle();
      $(this).toggleClass('slidIn');
    });
});
