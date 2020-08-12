$(document).ready(function(){ 
    $('.icon').click(function(){
        if(!$('.Menu').hasClass('open')){
            $('.Menu').addClass('open');
            // $('.Primary_Content').animate({'margin-right':250}, 1000)
            $('.Menu').animate({'width':250}, 1000);
            $('.BB').css({'width':'100vw'});

        }else{
            $('.Menu').removeClass('open')
            // $('.Primary_Content').animate({'margin-right':0}, 1000)
            $('.Menu').animate({'width':0}, 1000);
            $('.BB').css({'width':'0'}, 1000)
        }
    });
});
