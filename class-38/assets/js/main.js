(function ($) {
	"use strict";

    jQuery(document).ready(function($){

	$(".homepage-slides").owlCarousel({
		
			items:1,
			loop:true,
			dots:true,
			nav:true,
			autoplay:false,
			navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			animateOut: 'fadeOut'
			
	})

		
		
		

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	