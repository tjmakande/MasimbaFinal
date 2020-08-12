
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearStream();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  clearStream();
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll("#mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "flex";  

}

function clearStream(){
  document.querySelector('.stream_details_first').style.display = 'none';
  document.querySelector('.stream_details_second').style.display = 'none';
  document.querySelector('.stream_details_third').style.display = 'none';
}


$(window).scroll(function(){
  var scrollval = $(this).scrollTop();  //this will return the scroll value
  $(".header").css("transform", 'translate(0px,-'+scrollval*0.15+'%)');
})