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

						$('#html').waterbubble({
							radius: 60,
							wave: false,
							txt: 'HTML',
							font:'bold 18px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.8
						})
						$('#css').waterbubble({
							radius: 60,
							wave: false,
							txt: 'CSS',
							font:'bold 18px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.7
						})
						$('#javascript').waterbubble({
							radius: 60,
							wave: false,
							txt: 'JavaScript',
							font:'bold 18px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.6
						})
						$('#jquery').waterbubble({
							radius: 60,
							wave: false,
							txt: 'jQuery',
							font:'bold 18px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.5
						})
						$('#design').waterbubble({
							radius: 60,
							wave: false,
							txt: 'Design',
							font:'bold 18px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.5
						})
						$('#ps').waterbubble({
							radius: 60,
							wave: false,
							txt: 'PhotoShop',
							font:'bold 18px "microsoft Yahei"',
							waterColor: '#F9FAE1',
							textColor: 'rgba(0, 0, 0, 0.8)',
							data: 0.6
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
				},
	});
	
	

});

