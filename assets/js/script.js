/*
 *  I apated this code from these open-source locations:
 *  https://codepen.io/ugokuweb/pen/JjRMbdL
 *  https://qiita.com/Oyuki123/items/1db4a81954ffd0c3d862
 * 	https://weblasts.com/javascript/slick-basic-option
 * 
 */

$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow'); // fade out the logo (1.2s)
  
    //===== after fading out the loading area (spash area)
    $("#splash").delay(1500).fadeOut('slow',function(){ // fade out the loading area
    
        $('body').addClass('appear'); // add appear class to body after fade out completes
  
    });
    
   //===== if you want to add any js after the animation ends, put it here
    $('.splashbg').on('animationend', function() {    
        // empty for now
    });
        
});

// full screen menu
jQuery(function($){
    $('.menu').on('click',function(){
        $('.menu-line').toggleClass('active');
        $('.gnav').fadeToggle();
    });
});

// top slider
$(document).on('ready', function() {
    $('.top-slider').slick({
		slidesToShow:1, // how many slides to show on the screen
		slidesToScroll:1, // how many slides to scroll at a time
		autoplay:true, // whether to autoplay
		autoplaySpeed: 3000, // autoplay interval
		dots:true, // dots at the bottom of the slider
		fade:true, // whether to fade the slides
		pauseOnFocus:false,
		pauseOnHover:true,
		pauseOnDotsHover:false,
		arrows:false, // whether to display L/R navigation arrows
		infinite:true, // whether to loop
  });
});

// lineup
$(document).on('ready', function() {
  $(".lineup-slider").slick({
	slidesToShow:6, //
    dots: false,
	arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
	cssEase: "linear",
    speed: 300,
    infinite: true,
	swipeToSlide:true,
	pauseOnFocus:false,
	pauseOnHover:false,
	responsive: [
      {
    breakpoint: 768,
    settings: {
    slidesToShow:4,
        }
      },
      {
    breakpoint: 750,
    settings: {
    slidesToShow:3,
        }
      },
	{
    breakpoint: 375,
    settings: {
    slidesToShow:2,
        }
      },
    ]
  });
});

// specify :not() to scroll all non-specified link anchors
$(function(){
$('a[href^="#"]:not(.item)').click(function(){
var speed = 500;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});
});

// accordion list actions
$('#past .title').on('click', function() { // cick title element
	$('#past .box').slideUp(500); // close all
    
	var findElm = $(this).next("#past .box"); // get the area to open below the title
    
	if($(this).hasClass('close')){ // if title element has the class 'close'
		$(this).removeClass('close'); // remove close class    
	}else{//それ以外は
		$('.close').removeClass('close'); // remove all close classes
		$(this).addClass('close'); // add close to the clicked title element
		$(findElm).slideDown(500); // open the accordion
	}
});

// when the page is loaded, add the open class and open
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); // add the open class to first li in accordion
	$(".open").each(function(index, element){	// get each open class
		var Title =$(element).children('#past .title');	 // get the title class of child element w/ open class
		$(Title).addClass('close');				// add the close class to the title
		var Box =$(element).children('#past .box');	// get the box class of the open child element
		$(Box).slideDown(500);					// open the accordion
	});
});

//Fancybox3
$(document).ready(function() {
	$('[data-fancybox]').fancybox({
		loop : true, // loop first and last images when displaying multiple images
		animationEffect: "fade", // fade animation
		hash : false, // null on
		autoFocus:false, // whether to auto focus on focusable elements when zooming
		backFocus:false, // whether to auto focus on focusable elements on prev page when zooming is closed 
		trapFocus:false, // whether to focus outside of zoom element
	});
});