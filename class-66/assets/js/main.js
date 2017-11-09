(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		

	$(".jquery-sticky").sticky({topSpacing:0});
	
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();

				if (scroll >= 100) {
					$(".window-scroll").addClass("is-stick");
				} else {
					$(".window-scroll").removeClass("is-stick");
				}
			});

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	