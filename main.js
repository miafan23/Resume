$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','lastPage'],
		menu: '#myMenu',
		navigation: true,
    	sectionsColor: ['#F9FAE1', '#F04F47', '#F9FAE1', '#F04F47', '#F9FAE1','#F04F47' ],
    	'afterLoad': function(anchorLink, index){
    				var speed = 500;
    				if(index == 1){
					}
					if(index == 2){
						setTimeout(function () {
							$('#skills').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#skills').find('.order2').addClass('active')
						}, speed*2)
					}
					if(index == 3){
						setTimeout(function () {
							$('#projects').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#projects').find('.order2').addClass('active')
						}, speed*2)
					}

					if(index == 4){
						setTimeout(function () {
							$('#education').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#education').find('.order2').addClass('active')
						}, speed*2)
					}
				},
	});
	setTimeout(function () {
							$('#intro').addClass('first')
						}, 10)

	skillLayout('.skill-name');
	skillLayout('.skill-level');

	function appear (event, order,speed) {
	var $element = $(event).find(order);
	var num = 0;
	var timer = setInterval(function () {
		$element.eq(num).addClass('active');
		if(num < $element.length){
			num++
		}else{clearInterval(timer)}

		},speed)
	}

	function skillLayout (event) {
		$event = $(event);
		var bodyWidth = $('body').width();
		var eWidth = $(event).eq(0).width()
		var length = $event.length;
		if (bodyWidth <= eWidth*length*1.5){
		}else {
			var leftDis1 = (bodyWidth - eWidth*(2*length-1))/2
			$event.eq(0).css("left", leftDis1+'px')
			for (var i = 1; i < length; i++){
			$event.eq(i).css("left", leftDis1+eWidth*i*2+'px')
		}
		}
		
	}

});

