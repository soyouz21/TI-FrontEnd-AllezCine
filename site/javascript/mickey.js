$(".onglets").hide();
$("#presentation").show();
$(".input-accumulateur").hide();
$("#biography").hide();

$(".presentation").click(function(){
  $(".onglets").hide();
  $("#presentation").show();
  $(".input-accumulateur").hide();
});
$(".biography").click(function(){
  $("#presentation").hide();
  $(".onglets").hide();
  $("#biography").show();
  $(".input-accumulateur").hide();
});
$(".goodies").click(function(){
  $("#presentation").hide();
  $(".input-accumulateur").show();
  $(".onglets").hide();
  $("#goodies").show();
});
$(".contact").click(function(){
  $("#presentation").hide();
  $(".onglets").hide();
  $("#contact").show();
  $(".input-accumulateur").hide();
});
$(".photo").click(function(){
  $("#presentation").hide();
  $(".onglets").hide();
  $("#photo").show();
  $(".input-accumulateur").hide();
});
$(".thanks").hide();
$(".preview").click(function(){
  $(".shops").hide();
  $(".thanks").show();
});
//code pour le lightbox
function myFunction() {
  var shop = document.forms[0];
  var txt = 0;
  var i;
  for (i = 0; i < shop.length; i++) {
    if (shop[i].checked) {
      txt += parseInt(shop[i].value);
      console.log(shop[i].value);
    }
  }
  document.getElementById("order").value = "Total : " + txt + "$";
}
function openModal() {
  document.getElementById('myModalS').style.display = "block";
}
function closeModal() {
  document.getElementById('myModalS').style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
// code pour le présentation
// code pour le tooltip
