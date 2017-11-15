(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		$('.clock').countdown('2018/11/15', function(event) {
		  $(this).html(event.strftime('<span class="countdown-wrapper"><span class="single-countdown-inner">%w <br><span>weeks</span></span><span class="single-countdown-inner">%d <br><span>days</span></span><span class="single-countdown-inner">%H <br><span>hours</span></span><span class="single-countdown-inner">%M <br><span>minutes</span></span><span class="single-countdown-inner">%S <br><span>seconds</span></span></span>'));
		});


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	