$(window).scroll(function(){
  var scrollval = $(this).scrollTop();  //this will return the scroll value
  $(".header").css("transform", 'translate(0px,-'+scrollval*0.15+'%)');
})
