$(
	function () {
		ShipCenter();
		arrowHover();
		$('.fScont a').click(function(e){
			$('#firstScreen').removeClass('active').slideUp();
			$('#overlay').hide();
			sceneManager.toLoadingScene();
			setInterval(gameLoop, 1000 / FPS);
			e.preventDefault();
		});
		
		$("body").keyup(function(e){
		  	   if(e.keyCode==13 && $('#firstScreen').hasClass('active')===true){
					$('#firstScreen').removeClass('active').slideUp();
					$('#overlay').hide();
					sceneManager.toLoadingScene();
					setInterval(gameLoop, 1000 / FPS);
		  	   }
	    });
		
		

	}
);
$(document).ready(function(){

});

function ShipCenter() {
	var sW = screen.width;
	var sH = screen.height;
	if (sW < 1920) {
		var dW = (1920-sW)/2;
		var dH = (1080-sH)/2;
		$('#ship').css({
			'left':'-'+dW+'px',
			'top':'-'+dH+'px',
		});
		$('.arrow').show();
	}
	cloud1();
	cloud2();
	cloud3();
	cloud4();
	cloud5();
	setInterval(cloud1, 25000);
	setInterval(cloud2, 35000);
	setInterval(cloud3, 20000);
	setInterval(cloud4, 45000);
	setInterval(cloud5, 30000);
}

function arrowHover() {
	$( "#arrowUP" ).hover(function() {
		var aTop = $('#ship').css('top');
		$('#ship').animate({
			top: "0",
		},1000);
	}, function() {});
	$( "#arrowRight" ).hover(function() {
		var aRight = $('#ship').css('left');
		var sW = screen.width;
		var dW = 1920-sW;

		$('#ship').animate({
			left: "-"+dW+'px',
		},1000);
	}, function() {});
	$( "#arrowDown" ).hover(function() {
		var aRight = $('#ship').css('left');
		var sH = screen.height;
		var dH = 1080-sH;
		$('#ship').animate({
			top: "-"+dH+'px',
		},1000);
	}, function() {});
	$( "#arrowLeft" ).hover(function() {
		var aRight = $('#ship').css('left');
		$('#ship').animate({
			left: "0",
		},1000);
	}, function() {});
}
	function cloud1() {
		$('#c1').css('left','-200px');
		$('#c1').animate({
			left: "100%",
		},20000);
	};
	function cloud2() {
		$('#c2').css('left','-200px');
		$('#c2').animate({
			left: "100%",
		},30000);
	};
	function cloud3() {
		$('#c3').css('left','-200px');
		$('#c3').animate({
			left: "100%",
		},15000);
	};
	function cloud4() {
		$('#c4').css('left','-200px');
		$('#c4').animate({
			left: "100%",
		},40000);
	};
	function cloud5() {
		$('#c5').css('left','-300px');
		$('#c5').animate({
			left: "100%",
		},25000);
	};
