$(function(){
    $('.sec02 .pic-grid ul li').click(function(event){        
        event.preventDefault();


        if($(this).hasClass('active') === true){
             $(this).removeClass('active');
        } else if($(this).hasClass('active') === false) {            
            $('.sec02 .pic-grid ul li').removeClass('active');
             $(this).addClass('active');
             $('html,body').stop().animate({scrollTop:$(this).offset().top -50}, 300);
        }
    });

    $('.video-box video').click(function(){
        if($(this).parents('.video-box').hasClass('stop') === true){
            $(this).parents('.video-box').removeClass('stop');
            this.play();
        } else if($(this).parents('.video-box').hasClass('stop') === false) {            
             $(this).parents('.video-box').addClass('stop');
             this.pause();
        }
    });

    $('.location > ul > li').hover(function(){
		$(this).find('.location_btn').addClass('active');
		$(this).find('.location_sub').stop().slideDown(150);
	},function(){
		$(this).find('.location_btn').removeClass('active');
		$(this).find('.location_sub').stop().slideUp(150);
	});
});

