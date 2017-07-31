// JavaScript Document

$(function(){
	
"use strict";

var topoffset = 50;  // variable for menu height	
	
//Activate ScrollSpy
	$('body').scrollspy ({
		target: 'header .navbar'
		offset: topoffset
		
	});
	
//Highlight navigation with scrolling
var hash = $(this).find('li.active a').attr('href');	

	
//Smooth scrolling on navigation
	
$('.navbar a[href*=#]:not([href=#])').click(function() {
	if(location.pathname.replace(/^\//,'') ===
	   this.pathname.replace(/^\//,'') &&
	   location.hostname === this.hostname) {
		var target = $(this.hash);
		target = target.lenth ? target : $('[name=' + this.hash.slice(1) +']');
		if(target.length ) {
			$('html,body').animate({
				scrollTop: target.offset().top-topoffset+2
			}, 500);
			return false;
		}
	}
});
	
	
	
	
$('#carousel1').carousel({
	interval: false
});
	
});