(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".projects-filter li").on('click', function() {

    		$(".projects-filter li").removeClass("active");
    		$(this).addClass("active");

    		var selector = $(this).attr('data-filter');
    		$(".project-list").isotope({
    			filter: selector,
    		});

    	});
		
		jQuery(".project-list").isotope();
		

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	