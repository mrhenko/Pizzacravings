/*
	This file is for JS that is used solely
	for design and behavior of the UI.
*/

/* Some variables to write less code later in the file */
var s2 = $('section:nth-child(2)');
var w = $(window);
var s4 = $('section:nth-child(4)'); // The section with the button.
var s3 = $('section:nth-child(3)');
var s5 = $('section:nth-child(5)');

(function ($) { 
	$(document).ready(function() {
		rSize();
		/* The positioning of the button */
		var rtimer;
		w.resize(function() {
			clearTimeout(rtimer);
			rtimer = setTimeout(rSize, 100);
		});
		
		function rSize() {
			if (w.width() >= '481') {
				var vpos = s2.position();
				vpos = vpos.top;
				vpos = vpos + s2.height() + 40;
				s4.css('top', vpos);
				vpos = vpos + s4.height() + 40;
				s3.css('top', vpos);
				s5.css('top', vpos);
			}
		}
	});
})(jQuery)