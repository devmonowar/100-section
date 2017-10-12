(function ($) {
	"use strict";

    jQuery(document).ready(function($){



		jQuery(".projects-title ul li").on('click', function() {
            $(".projects-title ul li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
               filter: selector 
            });
        });
        


    });


    jQuery(window).load(function(){

        
		$(".projects-list").isotope({
			
		});
		
		
		
    });


}(jQuery));	