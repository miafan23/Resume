(function($, window, document, Math, undefined) {
	$.fn.activeAppear = function (options) {
		options = $.extend({
			appearSpeed: 500,
			opacity: 'opacity',
			padding: 'padding',
			top: 'top',
			topnum: -4
		})
		var FA = $.fn.activeAppear;
		var $appear = $('.active').find('.appear');
		var length = $appear.length;
		for (var i=0; i<length; i++){
			(function (num) {
				setTimeout(_appearfunc($appear.eq(num)),options.appearSpeed*(num+1))
			})(i);
		}

		function appearfunc (event) {
			var opacitynum = 0;
			var timer = setInterval(function () {
				$(event).css({opacity:opacitynum,
						 top:topnum+'%'});
				opacitynum += 1/options.appearSpeed;
				topnum += 20/options.appearSpeed;
				if (opacitynum>1 && topnum > 0) {
					clearInterval(timer)
				}
			}, 1)

			
		}

		function _appearfunc (event) {
			return function () {
				appearfunc(event)
			}
		}

		console.log($appear);
	}


})(jQuery, window, document, Math);