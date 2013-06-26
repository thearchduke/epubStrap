$(document).ready(function () {

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
        $(this).css('color', 'red');
        $(this).find('.explanation').show();
    });
    $('.answer.right').on('click', function () {
        $(this).css('color', 'blue');
        $(this).find('.explanation').show();
    });
});