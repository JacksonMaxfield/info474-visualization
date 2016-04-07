$(document).ready(function() {
	$('a[href^="#"]').on('click',function (event) {
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
		  var x = $(window).width();

			if (x < 800) {
				$('html, body').stop().animate( {
		        'scrollTop': $target.offset().top - 120
		    }, 800, 'swing');
	    } else {
				$('html, body').stop().animate( {
		        'scrollTop': $target.offset().top
		    }, 800, 'swing');
			}
	});
});
