(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".hompage-slides").owlCarousel({
			items:1,
			loop:true,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			dots:true,
			dotsData: true,
			autoPlay:false
			
		});

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	