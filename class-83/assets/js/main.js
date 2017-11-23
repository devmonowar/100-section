(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		

		  $('#web-design-progressbar').circleProgress({
			value: .9,
			 size: 200,
			 fill: '#0ABBC1',
			emptyFill: '#fff',
			thickness: 4,
			startAngle: 5,
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.progressbar-persentage').html(Math.round(90 * progress) + '<i>%</i>');
		  });

		  $('#graphic-design-progressbar').circleProgress({
			value: .95,
			 size: 200,
			 fill: '#ff0088',
			emptyFill: '#fff',
			thickness: 3,
			startAngle: 6,
			
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.progressbar-persentage').html(Math.round(95 * progress) + '<i>%</i>');
		  });

		  $('#digitalmarkating-progressbar').circleProgress({
			value: .84,
			 size: 200,
			 fill: '#ff00f8',
			emptyFill: '#fff',
			thickness: 4,
			startAngle: 5,
			
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.progressbar-persentage').html(Math.round(84 * progress) + '<i>%</i>');
		  });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	