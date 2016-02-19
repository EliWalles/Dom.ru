$(
	function () {
		var FPS = 50;
		var CANVAS_ID = 'gameBC';
		var ctx = createCanvasContext();
		ctx.font = "16px prstart"
		var eventManager = new EventManager();
		var keyboard = new Keyboard(eventManager);
		var sceneManager = new SceneManager(eventManager);
		var fsH = $('#firstScreen').height();
		var DfsH = $(window).height()-20;
		if (DfsH < fsH ) {
			var fsZ = DfsH/fsH;
			$('#firstScreen').css('transform','scale('+fsZ+')');
		}
		
		
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
