$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage', 'lastPage'],
		menu: '#myMenu',
		navigation: true,
    	sectionsColor: ['#F9FAE1', '#F04F47', '#F9FAE1', '#F04F47', '#F9FAE1','#F04F47','#F9FAE1' ],
    	'afterLoad': function(anchorLink, index){
    				var speed = 500
				    var windowWidth =  $(window).width()
				    var radius = 60;
						if(windowWidth < 600){
							radius = 50;
						}
						if(windowWidth < 350){
							radius = 40;
						}
						var fontSize = Math.floor(radius / 3.3);
				if(index == 1){
					}
					if(index == 2){
						setTimeout(function () {
							$('#skills').find('.order1').addClass('active')
						}, speed*1)

						setTimeout(function () {
							$('#skills').find('.order2').addClass('active')
						}, speed*2)

						$('#html').waterbubble({
							radius: radius,
							wave: false,
							txt: 'HTML',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.8
						})
						$('#css').waterbubble({
							radius: radius,
							wave: false,
							txt: 'CSS',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.7
						})
						$('#javascript').waterbubble({
							radius: radius,
							wave: false,
							txt: 'JavaScript',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.6
						})
						$('#jquery').waterbubble({
							radius: radius,
							wave: false,
							txt: 'jQuery',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.5
						})
						$('#design').waterbubble({
							radius: radius,
							wave: false,
							txt: 'Design',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.5
						})
						$('#vue').waterbubble({
							radius: radius,
							wave: false,
							txt: 'Vue',
							font:'bold ' + fontSize + 'px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.5
						})
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
				}
	});
	
	

});

