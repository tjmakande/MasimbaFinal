// $(window).scroll(function(){
//   var scrollval = $(this).scrollTop();  //this will return the scroll value
//   $(".header").css("transform", 'translate(0px,-'+scrollval*0.15+'%)');
// })

window.onscroll = function() {
  var scrollval = window.scrollY
  document.querySelector('.header').style.transform = `translate(0px,-` + scrollval * 0.15+'%)';
};
