/*$(function(){
    $('.login').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
*/


$(function() {

	$("#input-text").on("keyup", function() {
	   let countNum = String(140 - $(this).val().length);
	   $("#counter").text(countNum + "/140");
	 });

	/*
	$(window).scroll(function (){
	    $('.about-message .anim').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).addClass('active');
            }
        });
    });


	$(window).scroll(function (){
	    $('.service-frame .anim').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).addClass('active');
            }
        });
    });


    $(window).scroll(function (){
	    $('.contact-mail .anim').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).addClass('active');
            }
        });
    });


    $(window).scroll(function (){
		$('#about-wrapper').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function (){
		$('#member-wrapper').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function (){
	    $('#service-wrapper').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).addClass('scrollin');
            }
        });
    });



   	$(window).scroll(function (){
	    $('.detail-frame').each(function(){
	        var elemPos = $(this).offset().top;
	        var scroll = $(window).scrollTop();
	        var windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight){
	            $(this).find('.detail-l .anim').addClass('active');
	            $(this).find('.detail-r .anim').addClass('active');
            }
        });
    });


    $('.drop-menu span').click(function(){
    	$('.overmenu,.overmenu001,.overmenu002').find('img').attr('src', '../images/DSC_3799.png');
  		$('.header-middle').animate({width:'hide'});
  		$('.overmenu,.overmenu001,.overmenu002').removeClass('.close-menu');
  		$('.overmenu,.overmenu001,.overmenu002').animate({opacity: '1', easing: 'Liner'},750);
    });

    WindowHeight = $(window).height();
    $('.header-middle').css('height', WindowHeight);
    */
     
    $(document).ready(function() {
        $('.login-field').click(function(){
      		$('.dropdown').toggle();
        });
   	});


   	$(document).ready(function() {
        $('.recommend-on img').click(function(){
      		$('.markup').toggle();
        });
   	});



   	$(document).ready(function() {
        $(document).on('click','.close-menu',function() {
      	if($('.header-middle').is(":animated")){
        	return false;
      	}else{
	        $('.header-middle').animate({width:'hide'}, { duration: 250, easing: 'swing'});
	        $('.overmenu,.overmenu001,.overmenu002').animate({opacity: '1', easing: 'Liner'},750);
	        $('.mv-bg a').animate({opacity: '1', easing: 'Liner'},500);
	        return false;
      	}
        });
   	});

   	/*
    $('.mv-bg img').css("display","none");
	setTimeout(function(){
		$('.mv-bg img').fadeIn(1000);
	},0); 

	$('.reserve-form-inner01').css('display', 'none');
	$('.reserve-form-inner02').css('display', 'none');

	$("#changeSelect").change(function() {
		var extraction_val = $("#changeSelect").val();
		if(extraction_val == "挑戦している自分に") {
		    $('.reserve-form-inner01').css('display', 'block');
		    $('.reserve-form-inner02').css('display', 'none');
		}else if(extraction_val == "応援している方に") {
		    $('.reserve-form-inner01').css('display', 'none');
		    $('.reserve-form-inner02').css('display', 'block');
		    if (window.matchMedia( '(min-width: 670px)' ).matches) {
			    $('#reserve-body').css('height', '1441px');
			    $('.reserve-main').css('height', '1381px');
			} else {
				$('#reserve-body').css('height', '1397px');
			    $('.reserve-main').css('height', '1377px');
			};
		}
	});


	$('.liver-prof').css("opacity","0.3");
	setTimeout(function(){
		$('.liver-prof').animate({opacity: '1', easing: 'easeInExpo'},500);
	},0); 
	*/



});


$(document).ready(function($) {
    //670px以上の場合
    if (window.matchMedia( '(min-width: 670px)' ).matches) {
		$(function(){

			$(window).scroll(function (){
		    	var scroll = $(window).scrollTop();
		        if ( scroll > 800) {
					$('.overmenu').find('img').attr('src', '../images/menu.png');
				} else {
					$('.overmenu').find('img').attr('src', '../images/DSC_3799.png');
				}
	        });

			

			setTimeout(function(){
				$('.menu-wrapper').addClass('active');
			},1000); 


			$(window).on("load", function() {
				$('.menu-inner').addClass('active');
			});


			$(window).scroll(function (){
			    $('.menu-inner').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $(this).addClass('active');
		            }
		        });
		    });


		    $('.menu-inner span:nth-child(3)').css("opacity","0");

			$('.menu').hover(function(){   
			    $(this).find('.menu-inner span:nth-child(3)').animate({"margin-left":'10%', opacity: '1'},500);
			}, function() {
				$(this).find('.menu-inner span:nth-child(3)').animate({"margin-left":'0', opacity: '0'},500);
 			});


 			$(window).scroll(function (){
			    $('.about-top').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $(this).addClass('scrollin');
			            $('.about-top .anim').addClass('active');
			            $('.about-title .anim').addClass('active');
		            }
		        });
		    });

 			$('.dropdown').css("display","none");
		    $('.login-field').hover(function(){
		    	$('.dropdown').css("display","block");
		    }, function() {
		    	$('.dropdown').css("display","none");
		    });


			$('.prof-name p').css("color","rgba(0,0,0,0)");
			$('.prof-name p').css("-webkit-text-stroke","1px #FFF");
			$('.prof-c').hide();
			$('.prof-sns').hide();
			$('.prof0000 img').hide();
		    $('.prof-l000 img').hide();

			$('.prof-name').hover(function() {
				$(this).find('p').css("color","#FFF");
				$(this).find('p').css("-webkit-text-stroke","none");
				$(this).find('.prof-c').show();
				$(this).find('.prof-sns').show();
				$(this).find('.prof0000 img').show();
				$(this).find('.prof-l000 img').show();
			}, function() {
				$(this).find('p').css("color","rgba(0,0,0,0)");
				$(this).find('p').css("-webkit-text-stroke","1px #FFF");
				$(this).find('.prof-c').hide();
				$(this).find('.prof-sns').hide();
				$(this).find('.prof0000 img').hide();
			    $(this).find('.prof-l000 img').hide();
			});



			$(window).scroll(function (){
			    $('.contact-msg .anim').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $(this).addClass('active');
		            }
		        });
		    });


 			$('.sv-plan-r-hv').css("opacity","0");

			$('.sv-plan-r01').hover(function(){   
			    $(this).find('.sv-plan-r-hv').animate({"margin-left":'10%', opacity: '1'},500);
			}, function() {
				$(this).find('.sv-plan-r-hv').animate({"margin-left":'0', opacity: '0'},500);
 			});
 			$('.sv-plan-r02').hover(function(){   
			    $(this).find('.sv-plan-r-hv').animate({"margin-left":'10%', opacity: '1'},500);
			}, function() {
				$(this).find('.sv-plan-r-hv').animate({"margin-left":'0', opacity: '0'},500);
 			});
 			$('.sv-plan-r03').hover(function(){   
			    $(this).find('.sv-plan-r-hv').animate({"margin-left":'10%', opacity: '1'},500);
			}, function() {
				$(this).find('.sv-plan-r-hv').animate({"margin-left":'0', opacity: '0'},500);
 			});


 			$(function(){
			    $('.js-modal-open').on('click',function(){
			        $('.js-modal').fadeIn();
			        return false;
			    });
			    $('.js-modal-close').on('click',function(){
			        $('.js-modal').fadeOut();
			        return false;
			    });
			});


		    $(window).scroll(function (){
			    $('.about-more').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $('.link-ab .anim').addClass('active');
		            }
		        });
		    });


			$('a[href^=#]').click(function() {
				var speed = 400;
				var href= $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top;
				$('body,html').animate({scrollTop:position}, speed, 'swing');
				return false;
			});


		});

	    //670px以下の場合
	    } else {
		$(function(){


			/*
			$(".overmenu,.overmenu001").on('click',function(){
				if($(this).hasClass('.close-menu') == false){
					$(this).find('img').attr('src', '../images/tam_white.png');
					$('.header-middle').animate({width:'show'});
				}else{
					$(this).find('img').attr('src', '../images/DSC_3799.png');
					$('.header-middle').animate({width:'hide'});
				}
				$(this).toggleClass('.close-menu');
				
			});

			$(".overmenu002").on('click',function(){
				if($(this).hasClass('.close-menu') == false){
					$(this).find('img').attr('src', '../images/tam_white.png');
					$('.header-middle').animate({width:'show'});
				}else{
					$(this).find('img').attr('src', '../images/menu.png');
					$('.header-middle').animate({width:'hide'});
				}
				$(this).toggleClass('.close-menu');
				
			});
			
			*/

			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			/*
		   	$(window).scroll(function (){
			    $('.about-top').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $('.about-top .anim').addClass('active');
		            }
		        });
		    });
		    */


		   	$(window).scroll(function (){
			    $('.about-message-sp .anim').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $(this).addClass('active');
		            }
		        });
		    });


		    $(window).scroll(function (){
			    $('.contact-msg-sp .anim').each(function(){
			        var elemPos = $(this).offset().top;
			        var scroll = $(window).scrollTop();
			        var windowHeight = $(window).height();
			        if (scroll > elemPos - windowHeight){
			            $(this).addClass('active');
		            }
		        });
		    });


			
			$('.prof-other01').hide();

			$('.p-touch01').on('touchend',function(){
			    $('.prof-other01').toggle();
			});

			$(function(){
			    $('.js-modal-open').on('click',function(){
			        $('.js-modal').fadeIn();
			        return false;
			    });
			    $('.js-modal-close').on('click',function(){
			        $('.js-modal').fadeOut();
			        return false;
			    });
			});


			$('.prof-c').hide();
			$('.prof-name.selected').find('.prof-c').show();
			$('.prof-l000').hide();
			$('.prof-l000').hide();
			$('.prof-name.selected').find('.prof-l000').show();
			$('.prof-name.selected').find('.prof-l000').show();
			var profSelected = $('.prof-name');

			profSelected.on('click',function() {
				profSelected.removeClass('selected');
				profSelected.find('.prof-c').hide();
				profSelected.find('.prof-l000').hide();
				profSelected.find('.prof-l000').hide();
				profSelected.find('.prof0000 img').css("opacity","0");
				$(this).addClass('selected').find('.prof-c').show();
				$(this).addClass('selected').find('.prof-l000').show();
				$(this).addClass('selected').find('.prof-l000').show();
			});

			
		});
    };
});