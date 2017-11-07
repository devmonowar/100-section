(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		
			var center = [23.90317,89.1288885];
			$('.map').gmap3({
						center: center,
						scrollwheel: false,
						zoom: 10
					  })
					  .marker({
						position: center,
						icon: 'http://monowar.tk/class-61/assets/img/map-marker.png'
					  })
					
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	