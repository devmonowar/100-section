(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		$(".product-list").slick({
				centerPadding: '60px',
				slidesToShow: 3,
			    responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 3,
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
					  }
					}
				  ],
				  centerPadding: '80px',
			
		})


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	