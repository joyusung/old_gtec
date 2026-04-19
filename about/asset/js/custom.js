/** gnb menu **/
var gn_speed = 3;
var gn_main = 0;

function gnb(gn,lm1,lm2){
	gn_main = gn;

    if(gn == '100'){
		var gn1 = 5-parseInt('1');
	}else	if(gn == '101'){
		var gn1 = 5+parseInt('1');
	}else{
	//메뉴 check
	var gn1 = gn-parseInt('1');
	}

	if(gn == '100'){
		lm_check(6,lm1);
	}else	if(gn == '100'){
		lm_check(6,lm1);
	}else{
		//메뉴 check
		lm_check(gn,lm1);
	}

	if(gn == '5'){
		$("body").addClass("sub05");
	} else if(gn =='0'){
		$("body").addClass("main");
	} else if(gn =='6'){
		$("body").addClass("sub06");
	} else if(gn =='4'){
		$("body").addClass("sub04");
	} else if(gn == '3'){
		$("body").addClass("sub03");
	} else if(gn == '2'){
		$("body").addClass("sub02");
	} else if(gn == '1' & lm1 == '1'){
		$("body").addClass("sub0101");
	} else if(gn == '1' & lm1 == '2'){
		$("body").addClass("sub0102");
	} else if(gn == '1' & lm1 == '3'){
		$("body").addClass("sub0103");
	} else if(gn == '1' & lm1 == '4'){
		$("body").addClass("sub0104");
	};
}
function lm_check(gn,lm1,lm2){
	gn--;
	lm1--;
	lm2--;

	var lm0 = lm1+parseInt('1');
	var gn0 = gn+parseInt('1');
	if(gn0 != "0"){
		$("#gnb > li").eq(gn).toggleClass("active");
        $(".sub-vis .vis-mn .itm").eq(lm1).toggleClass("active");
	}
}

/** gnb end **/

$(function(){
    
    $("#wrap").append("<div class='mbg'></div>");
    
    $("#gnb > li").each(function(){
		$(this).bind({
			"mouseenter focusin":function(){
				$("#header").addClass("on");
				$("#header #gnb > li").removeClass('active');
				$(this).addClass('active');
				$('#header .subDepth').removeClass('show_menu');
                $('#header .subBg').stop().slideDown(200);
				$(this).find('.subDepth').stop().slideDown(200, function(){
					$(this).addClass('show_menu');
				})
			}
		});
	});
	$("#gnb > li").each(function(){
		$(this).bind({
			"mouseleave focusout":function(){
				$("#header").removeClass("on");
				$("#header #gnb > li").removeClass('active');
                $('#header .subBg').stop().slideUp(100);
				$('#header .subDepth').stop().slideUp(100, function(){
					$(this).addClass('show_menu');
				});
			}
		});
	});

	$("#header .lang").each(function(){
		$(this).bind({
			"mouseenter focusin":function(){
                $("#header").addClass("on");
	       }
		});
	});
    $("#header .lang").each(function(){
		$(this).bind({
			"mouseleave focusout":function(){
                $("#header,#header .lang > .bt").removeClass("on");
                $("#header .lang > div").fadeOut(100);
	       }
		});
	});
    $("#header .lang .bt").click(function (){
		$("#header .lang > div").animate({height:"toggle"},100);
		$(this).addClass("on");
		return false;
	});

	$("#footer .foot-link .bt").click(function (){
		$(this).next("ul").animate({height:"toggle"},300);
		$(this).addClass("on");
		return false;
	});

	$(".foot-link ul").mouseleave(function(){
		$(".foot-link ul").css("display","none");
		$(".foot-link .bt").removeClass("on");
	});
	$(".foot-link ul li:last-child").focusout(function(){
		$(".foot-link ul").css("display","none");
		$(".foot-link .bt").removeClass("on");
	});
    
    
    //slide 이벤트
    var mainSlide = new Swiper('.main-visual', {
        speed: 800,
		loop:true,
        autoplay: {
            delay:8000,
            disableOnInteraction: false,
        },        
        pagination: {
            el: '.main-visual .pag',
            type: "fraction",
        },
        navigation: {
            nextEl: '.main-visual .next',
            prevEl: '.main-visual .prev',
        }, 
    });  
    
    mainSlide.on('slideChange', function () {
        if (mainSlide.realIndex==0) {
            $(".main-mn .mn1").addClass('active').siblings().removeClass('active');
        } else	if (mainSlide.realIndex==1){
            $(".main-mn .mn2").addClass('active').siblings().removeClass('active');
        } else	if (mainSlide.realIndex==2){
            $(".main-mn .mn3").addClass('active').siblings().removeClass('active');
        }
    });	
    
    $(".main-visual .cotr .stop").click(function() {
        mainSlide.autoplay.stop();
        $(this).removeClass("on");
        $(".main-visual .cotr .play").addClass("on");
    });  

    $(".main-visual .cotr .play").click(function() {
        mainSlide.autoplay.start();
        $(this).removeClass("on");
        $(".main-visual .cotr .stop").addClass("on");
    });     
    
    var mainGoods = new Swiper('.main-s02bx .slide-bx', {
        speed: 800,
        slidesPerView: '3',
        spaceBetween: 40,
        autoplay: {
            delay:8000,
            disableOnInteraction: false,
        },   
        navigation: {
            nextEl: '.main-s02bx .next',
            prevEl: '.main-s02bx .prev',
        }, 

		breakpoints: {
            900: {
                slidesPerView: 1,
            },
			1200: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });      
    
    var mainEdu = new Swiper('.main-edu .slide-bx', {
        speed: 800,
        spaceBetween: 40,      
        pagination: {
            el: '.main-edu .pag',
            clickable: true,
        },
        autoplay: {
            delay:8000,
            disableOnInteraction: false,
        },   
        navigation: {
            nextEl: '.main-s02bx .next',
            prevEl: '.main-s02bx .prev',
        }, 
    });    
    
    var mainBbs = new Swiper('.main-bbs .tc', {
        speed: 800,
        spaceBetween: 50,   
        slidesPerColumn: 3,
        pagination: {
            el: '.main-bbs .pag',
            clickable: true,
        },
    }); 
    
    
    var mbTc = $('div.main-bbs .tc');
	mbTc.hide().filter(':first').show();
	$('div.main-bbs .tab a').click(function () {
		mbTc.hide();
		mbTc.filter(this.hash).show();
		$('div.main-bbs .tab a').parent().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
    
	$( window ).scroll( function() {
	  if ( $( document ).scrollTop() > 100 ) {
		$("#wrap,.locationBar").addClass('fixed');
	  }
	  else {
		$("#wrap,.locationBar").removeClass('fixed');
	  }
	});
    
    if($(window).width() < 767){ //mobile	
		sizeChk = 0;
	}else{ //pc  
		sizeChk = 1;
	}
    
    if($(window).width() < 769){ //mobile
    } 
    
    $('.locationBar .location > a').click(function(){
		$('.locationBar .location > ul').not($(this).next()).slideUp('fast');
		$(this).parent().toggleClass('active').siblings('.location').removeClass('active');
		$(this).next().slideToggle('fast');
		return false;
	});
            
    //faq
	$(".faq-wr dd").hide();
	$(".faq-wr dt").click(function(){
		$(this).next("dd").slideToggle(200)   
		.siblings("dd:visible").slideUp(200) 
		$(this).toggleClass("active")               
		.siblings("dt").removeClass("active");
		$(".faq-wr dd p").removeAttr("style");
		$(".faq-wr dd p span").removeAttr("style");
	}).filter(':first').click();
             
    //datepicker
    $( ".datepicker" ).datepicker({
        monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['S','M','T','W','T','F','S'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        buttonImageOnly: true,
        showMonthAfterYear:true,
        dateFormat: 'yy-mm-dd'
    });
    
    //filebox
	var fileTarget = $('.filebox .upload-hidden'); 
	fileTarget.on('change', function(){ // 값이 변경되면 
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; } else { // old IE 
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
		} // 추출한 파일명 삽입 
		$(this).siblings('.upload-name').val(filename); 
	});
    
    //detail tab
	//var mOffset = $('.prod-con .prod-tab').offset();
    /*if($('.main-mn').length > 0){
        
        var $section = $('#indexWrap .section');
        $(window).on({
            'scroll' : function(){
                var i,
                    sct = $(this).scrollTop(),
                    start = 100,
                    sectionPos = [
                        $section.eq(0).offset().top,
                        $section.eq(1).offset().top,
                        $section.eq(2).offset().top
                    ];
                if(sct > sectionPos[0]-start && sct < sectionPos[1]-start){
                    $(".main-mn .mn1").addClass('active').siblings().removeClass('active');
                }else if(sct > sectionPos[1]-start && sct < sectionPos[2]-start){
                    $(".main-mn .mn2").addClass('active').siblings().removeClass('active');
                }else if(sct > sectionPos[2]-start){
                    $(".main-mn .mn3").addClass('active').siblings().removeClass('active');
                }
            }
        });
    };*/
    
    adjustScript();
    
    $("#header .bt-sch").click(function(){
        if($("#header .bt-sch").hasClass("active")){            
            $(this).removeClass("active");
            $("#header .hd-schbx").slideUp(200);
        }else{
            $(this).addClass("active");
            $("#header .hd-schbx").slideDown(200);    
        }
	});
    
});

$(window).on('resize', function(){
	adjustScript();
});

function adjustScript() {    
    if($(window).width() < 1023){ //mobile
		$(".tbl-scroll").append("<button class='responsive-dim'></button>");
    } else { //pc 
    }
}

$(window).on('resize', function(){
	//adjustScript();

	if($(window).width() < 767 && sizeChk == 1){ 
		location.reload();
	}else if ($(window).width() > 767 && sizeChk == 0) {
		location.reload();
	}

});

var ua = window.navigator.userAgent;
var winW = $(window).width();

$(window).bind('resize', function(){
	setTimeout(function(){
		if(winW != $(window).width()){
			winW = $(window).width();
		}
	}, 500);
});

$(document).on("click", "#header .bt-mn,#siteFunctions .bt-close", menuCtr);
$(document).on("click", ".mobMenu > li > a", subMenu);

function menuCtr(e){
	e.preventDefault();
	
	$("#header .bt-mn,#siteFunctions .bt-close").toggleClass("open");	
    
    if($(window).width() < 1024){ 
        $(".subDepth").slideUp(200);
	   $(".mobMenu li").removeClass("active");
    } else {
        
    }

	

	if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
		$("body").toggleClass("ovf_hdn");
	}else{
		$("html, body").toggleClass("ovf_hdn");
	}	

	if(!$(this).hasClass("open")){
        if($(window).width() < 1024){ 
            $("#siteFunctions").stop().animate({right : '-100%'}, 250);
        } else {
            $("#siteFunctions").stop().animate({top : '-700px'}, 250);
        }
		
		$(".mbg").fadeOut(200);
		lm_open = false;

		if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
			$("html").css({"height" : "100%"});
			$("body").css({"height" : "100%", "overflow" : "visible", "position" : "static"});
		}
	}else{
        if($(window).width() < 1024){ 
            $("#siteFunctions").stop().animate({right : 0}, 250);
        } else {
            $("#siteFunctions").stop().animate({top : 0}, 250);
        }		
		$(".mbg").fadeIn(200);
		lm_open = true;

		if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
			$("html").css({"height":$(window).height() + "px"});
			$("body").css({"height":$(window).height() + "px", "overflow" : "hidden", "position" : "relative"});
		}
	}
}

    
function subMenu(e){
    $thisp = $(this).parent();

    var chk = false;
    
    if($(window).width() < 1024){ 
        $(".mobMenu > li").removeClass("active");

        var dropDown = $(this).next(".subDepth");
        $(".subDepth").not(dropDown).slideUp("fast");
        dropDown.stop(false, true).slideToggle("fast", function(){
            if($(this).is(":hidden")){
                $thisp.removeClass("active");
                chk = false;
            }else{
                $thisp.addClass("active");
                chk = true;
            }
        });

        if(!chk){
            $(this).parent().find(".mdepth3").each(function(idx){
                if($(this).css("display") == "block"){
                    $(this).parent().removeClass("active");
                    $(this).parent().find(".mdepth3").hide();
                }
            });
        }
    }
}

// layer popup
function callBpop(classId){
	$(classId).bPopup();
}

function indSol01(){
    industSlide.slideTo(0, 800);
    $(".indust-sol .pnt a").eq(0).addClass("on").siblings().removeClass("on");
}
function indSol02(){
    industSlide.slideTo(1, 800);
    $(".indust-sol .pnt a").eq(1).addClass("on").siblings().removeClass("on");
}
function indSol03(){
    industSlide.slideTo(2, 800);
    $(".indust-sol .pnt a").eq(2).addClass("on").siblings().removeClass("on");
}
function indSol04(){
    industSlide.slideTo(3, 800);
    $(".indust-sol .pnt a").eq(3).addClass("on").siblings().removeClass("on");
}
function indSol05(){
    industSlide.slideTo(4, 800);
    $(".indust-sol .pnt a").eq(4).addClass("on").siblings().removeClass("on");
}

$(function(){	
	scrollAnimation();
});

function scrollAnimation(){

	// Animations
	//-----------------------------------------------
	if ($("[data-animation-effect]").length>0) {
		$("[data-animation-effect]").each(function() {
			var $this = $(this),
			animationEffect = $this.attr("data-animation-effect");
			//if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {					
				$this.appear(function() {
					var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
					if(delay > 1) $this.css("effect-delay", delay + "ms");
					setTimeout(function() {
						$this.addClass('animated object-visible ' + animationEffect);
					}, delay);
				}, {accX: 0, accY: -130});
			//} else {
			//	$this.addClass('object-visible');
			//}
		});
	};
	

} 

$(function(){
	// Dim Close
	$('.responsive-dim').on('touchstart', function(){
		$(this).hide();
	});
})