// code pour déterminer l'age d'un utilisateur
$(document).ready( function() {
  var txt;
  var r = confirm("En pressant \"OK\", vous confirmez avoir 18ans et plus!");
  if (r == true) {
      window.cookieconsent.initialise({
          "palette": {
              "popup": {
                  "background": "#eb6c44",
                  "text": "#ffffff"
              },
              "button": {
                  "background": "#f5d948"
              }
          },
          "position": "top",
          "static": true,
          "content": {
              "message": "En poursuivant votre naviguation, vous acceptez le dépôt de cookies tiers destinés à vous proposer des vidéos, des boutons de partage, des remontées de contenus de plateformes sociales.",
              "dismiss": "J'accepte!",
              "link": "Lire +"
          }
      })
  } else {
      window.location.assign("test.html");
  }
  });

// menu déroulant
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

// Jumbotron
$(document).ready( function() {
    $('#myCarousel').carousel({
		interval:   4000
	});
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');
			}
		}
		clickEvent = false;
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
  $(".3row").show("slow");
  $("#moinsdefilms").show();
  $("#plusdefilms").hide();
    buttonDisplay('films', 'block');
}
document.getElementById('ACTIONS').onclick = function () {
  $(".3row").show("slow");
  $("#moinsdefilms").show();
  $("#plusdefilms").hide();
    buttonDisplay('films', 'none');
    buttonDisplay('ACTIONS', 'block');
}
document.getElementById('HORREUR').onclick = function () {
  $(".3row").show("slow");
  $("#moinsdefilms").show();
  $("#plusdefilms").hide();
    buttonDisplay('films', 'none');
    buttonDisplay('HORREUR', 'block');
}
document.getElementById('KIDS').onclick = function () {
  $(".3row").show("slow");
  $("#moinsdefilms").show();
  $("#plusdefilms").hide();
    buttonDisplay('films', 'none');
    buttonDisplay('KIDS', 'block');
}
document.getElementById('SUSPENSE').onclick = function () {
  $(".3row").show("slow");
  $("#moinsdefilms").show();
  $("#plusdefilms").hide();
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

//ici code cookies
 window.addEventListener("load", function() {
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#eb6c44",
                        "text": "#ffffff"
                    },
                    "button": {
                        "background": "#f5d948"
                    }
                },
                "position": "top",
                "static": true,
                "content": {
                    "message": "En poursuivant votre naviguation, vous acceptez le dépôt de cookies tiers destinés à vous proposer des vidéos, des boutons de partage, des remontées de contenus de plateformes sociales.",
                    "dismiss": "J'accepte!",
                    "link": "Lire +"
                }
            })
        });

//ici fleche vers le haut
var fleche=document.createElement("IMG");
fleche.setAttribute("src","site/image/fleche.png");
fleche.setAttribute("width","40px");
fleche.setAttribute("height","40px");

$(".fleche").append(fleche);


fleche.click(function(){
$('html, body').animate({scrollTop:$(the_id).offset().top}, 'slow');//return false;
});

$(fleche).click(function(){
  $('html, body').animate({scrollTop: '0px'}, 1000);
});

//fleche qui scroll jusqu' en bas du Jumbotron
    $(document).ready(function() {
	// On écoute le scroll sur la page
    $('.fleche').hide();
	$(document).scroll(function() {
		// On récupère la hauteur de la page
		var hautfen = $(window).height();
		// On récupère la position du scroll
		var posScroll = $(window).scrollTop();
		// On calcule l'endroit à partir duquel on veut faire apparaître le bouton
		var diff = hautfen - posScroll - (hautfen);

		if (diff < 0) {
			// On fait apparaître le bouton en fondu sur 0.5s
			$('.fleche').show(500);
		} else {
			// On fait disparaitre le bouton en fondu sur 0.5s
			$('.fleche').hide(500);
		}
	});
});


// code pour la partie carrosel shop vidéo

$(".bay").hide();
$(".nemo").hide();
$(".bay-img").click(function(){
  $(".shop-video").hide();
  $(".bay").show();
});
$(".nemo-img").click(function(){
  $(".shop-video").hide();
  $(".nemo").show();
})
$(".wonder-img").click(function(){
  $(".shop-video").hide();
  $(".wonder").show();
})
