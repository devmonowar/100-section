(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		$(".product-list").slick({
			             dots: false,
						infinite: true,
						centerMode: true,
						slidesToShow: 3,
						slidesToScroll: 1,
					   adaptiveHeight:false,
					   variableWidth:false,
					   
					   responsive: [
							{
								breakpoint: 1170,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
							},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}
							// You can unslick at a given breakpoint now by adding:
							// settings: "unslick"
							// instead of a settings object
						]
			
		})


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	