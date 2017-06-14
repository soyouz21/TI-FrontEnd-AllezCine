$(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
});

// code du carrousel de la section shop

$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});




//BOUTON "Plus de films",fonction pour faire apparaître la 3 row au click du bouton "plus de films"

function buttonDisplay(classe, valeur) {
    var lesFilms = document.getElementsByClassName(classe);
    for (var i = 0; i < lesFilms.length; ++i) {
        lesFilms[i].style.display = valeur;
    }
}

document.getElementById('ALL').onclick = function () {
    buttonDisplay('films', 'block');
}
document.getElementById('ACTIONS').onclick = function () {
    buttonDisplay('films', 'none');
    buttonDisplay('ACTIONS', 'block');
}
document.getElementById('HORREUR').onclick = function () {
    buttonDisplay('films', 'none');
    buttonDisplay('HORREUR', 'block');
}

document.getElementById('KIDS').onclick = function () {
    buttonDisplay('films', 'none');
    buttonDisplay('KIDS', 'block');
}
document.getElementById('SUSPENSE').onclick = function () {
    buttonDisplay('films', 'none');
    buttonDisplay('SUSPENSE', 'block');
}


//BOUTON qui fait apparaître ma 3row au click du bouton plus de films.
//BOUTON "moins de films" qd on click sur "plus de films" 
$(".3row").hide()
$("#moinsdefilms").hide()
$("#plusdefilms").click(function () {

    $(".3row").show("slow");
    $("#moinsdefilms").show();
    $("#plusdefilms").hide();

});

$("#moinsdefilms").click(function(){
    $(".3row").hide("slow");
    $("#plusdefilms").show();
    $("#moinsdefilms").hide();
    
})








/*
       
   
*/
