(function ($) {
	"use strict";

    jQuery(document).ready(function($){


			skrollr.init({
				render: function(data) {
					//Log the current scroll position.
					//console.log(data.curTop);
				}
			});        

			$('.video-play-btn').magnificPopup({
			type:'video',
			});
			
			
			
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	





