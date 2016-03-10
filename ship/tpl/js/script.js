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
		
		$('#places a').click(function(e){
			var Pid = $(this).data('id');
			pc(Pid);
			e.preventDefault();
		});
		
		$('#pc a').click(function(e){
			var Pid = $(this).data('id');
			pc(Pid);
			e.preventDefault();
		});
		
		$('#pcI img').click(function(e){
			var Pid = $(this).data('id');
			pc(Pid);
			e.preventDefault();
		});

		$('#now').click(function(e){
			$('#sherebot').slideDown();
			e.preventDefault();
		});
		

	}
);

$(document).ready(function(){
	$('body').removeClass('disable');
	$('#disable').remove();
	$('#pcI img').hover(function() {
		$(this).addClass('op05');
	}, function() {
		$(this).removeClass('op05');
	});
});

function ShipCenter() {
	var sW = $(window).width();
	var sH = $(window).height();
	if (sW < 1920) {
		var dW = (1920-sW)/2;
		var dH = (1080-sH)/2;
		$('#ship').css({
			'left':'-'+dW+'px',
			'top':'-'+dH+'px',
		});
		$('.arrow').show();
	}
	onloadp();
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
		var sW = $(window).width();
		var dW = 1920-sW;

		$('#ship').animate({
			left: "-"+dW+'px',
		},1000);
	}, function() {});
	$( "#arrowDown" ).hover(function() {
		var aRight = $('#ship').css('left');
		var sH = $(window).height();
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
		$('#c1').css('right','-300px');
		$('#c1').animate({
			right: "100%",
		},30000);
	};
	function cloud2() {
		$('#c2').css('right','-300px');
		$('#c2').animate({
			right: "100%",
		},40000);
	};
	function cloud3() {
		$('#c3').css('right','-300px');
		$('#c3').animate({
			right: "100%",
		},25000);
	};
	function cloud4() {
		$('#c4').css('right','-300px');
		$('#c4').animate({
			right: "100%",
		},50000);
	};
	function cloud5() {
		$('#c5').css('right','-300px');
		$('#c5').animate({
			right: "100%",
		},35000);
	};
	function ice() {
		$('#ice').css({
			'left' : '70%',
			'bottom' : '20px'
		});
		$('#ice').animate({
			left: "-120%",
			bottom: "-400px",
		},75000);
	};
	function dron() {
		$('#dron').animate({
			top: "350px",
		},5000);
		setInterval(dronRL, 600);
		setInterval(dronRL2, 800);
	}
	function dronRL() {
		$('#dron').css('transform',"rotate(1deg)");
	}
	function dronRL2() {
		$('#dron').css('transform',"rotate(-1deg)");
	}
	function pc(idf) {
		$('#opis').removeClass('pc1');
		$('#opis').removeClass('pc2');
		$('#opis').removeClass('pc3');
		$('#opis').removeClass('pc4');
		$('#opis').removeClass('pc5');
		$('#opis').removeClass('pc6');
		$('#opis').removeClass('pc7');
		$('#places a').removeClass('active');
		$('#pc a').removeClass('active');
		$('#pcI img').removeClass('active');
		$('#pc'+idf).addClass('active');
		$('#pcI'+idf).addClass('active');
		$('#pl'+idf).addClass('active');
		$('#title').html($('#pl'+idf).html());
		$('#cont').html($('#pc'+idf).data('text'));
		$('#opis').addClass('pc'+idf)
	}

	function onloadp() {
		cloud1();
		cloud2();
		cloud3();
		cloud4();
		cloud5();
		ice();
		dron();
		setInterval(ice, 80000);
		setInterval(cloud1, 35000);
		setInterval(cloud2, 45000);
		setInterval(cloud3, 30000);
		setInterval(cloud4, 55000);
		setInterval(cloud5, 40000);
		pc(1);
	}


function addHandler(object, event, handler) {
    if (object.addEventListener) {
      object.addEventListener(event, handler, false);
    }
    else if (object.attachEvent) {
      object.attachEvent('on' + event, handler);
    }
    else alert("Обработчик не поддерживается");
  }
  // Добавляем обработчики для разных браузеров
  addHandler(window, 'DOMMouseScroll', wheel);
  addHandler(window, 'mousewheel', wheel);
  addHandler(document, 'mousewheel', wheel);
  // Функция, обрабатывающая событие
  function wheel(event) {
    var delta; // Направление колёсика мыши
    event = event || window.event;
    // Opera и IE работают со свойством wheelDelta
    if (event.wheelDelta) { // В Opera и IE
      delta = event.wheelDelta / 120;
      // В Опере значение wheelDelta такое же, но с противоположным знаком
      if (window.opera) delta = -delta; // Дополнительно для Opera
    }
    else if (event.detail) { // Для Gecko
      delta = -event.detail / 3;
    }
    // Запрещаем обработку события браузером по умолчанию
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
    if (delta>0) {
	       var pid = $('#places a.active').attr('data-id');
	       pid = Number(pid) - 1;
	       if (pid==0) pid=7;
	       pc(pid);
    } else {
	      var pid = $('#places a.active').attr('data-id');
	      pid = Number(pid) + 1;
	       if (pid==8) pid=1;
	      pc(pid);
    }
  }