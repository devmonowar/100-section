(function ($) {
	"use strict";

    jQuery(document).ready(function($){

			var center = [23.90317,89.1288885];
			$('.map')
			  .gmap3({
				center: center,
				scrollwheel: false,
				zoom: 13,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			  })
			  .circle({
				center: center,
				radius : 2000,
				fillColor : "#FFAF9F",
				strokeColor : "#FF512F"
			  })
			.infowindow({
				position: center,
				content: "Hello from kushtia"
			  })
			  .then(function (infowindow) {
				infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
			  })
			  .marker({
				position: [23.8977209,89.1186612],
				icon: 'http://maps.google.com/mapfiles/marker_green.png'
			  })
					  

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	