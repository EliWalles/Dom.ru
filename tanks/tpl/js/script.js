$(
	function () {
		var FPS = 50;
		var CANVAS_ID = 'gameBC';
		var ctx = createCanvasContext();
		ctx.font = "16px prstart"
		var eventManager = new EventManager();
		var keyboard = new Keyboard(eventManager);
		var sceneManager = new SceneManager(eventManager);
		
		zoomGame();
		
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
		
		function gameLoop() {
			keyboard.fireEvents();
			sceneManager.update();
			sceneManager.draw(ctx);
		}
		
		function createCanvasContext() {
			$('<canvas id="' + CANVAS_ID + '" width="' + Globals.CANVAS_WIDTH + '" height="' + Globals.CANVAS_HEIGHT + '"></canvas>').prependTo('#main');
			var canvas = document.getElementById(CANVAS_ID);
			return canvas.getContext('2d');
		};
		
		function zoomGame() {
			var zGw = -(1920-$(window).width())/2;
			var zGh = -(1080-$(window).height())/4;
			var zG;
			
			$('#gameouter')
				.css('left',zGw)
				.css('top',zGh)
			;
			$('#pBoy')
				.css('left',zGw)
				.css('top',zGh)
			;
			
			$('.ya-share2')
				.css('left',zGw)
				.css('top',zGh)
			;
		}	
		
				
			var left = 0,
			top = 0,
			element = jQuery('#pBoy'),
			offset =  { left: element.offset().left};
			jQuery('body').bind('mousemove', function(e){
			    left = (e.pageX-offset.left);
			    var mouseXPercent = Math.round(left / element.width() * 100);
			    var diffX = 1500;
			    var myX = diffX * (mouseXPercent / 15000)-(1920-screen.width)/2;
			    jQuery('#pBoy').css({left   : myX+'px'});
			    var pageX=e.pageX;
			 });
	}
);
$(document).ready(function(){
	$("#fh .tanks").animate({
    	left: '760',
  	}, 5000, function() {
  		$("#sH .tanks").animate({
  	    	left: '760',
  		}, 5000);
  	});
});
