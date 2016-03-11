$(
	function () {
		ShipCenter();
		$('.fScont a').click(function(e){
			$('#firstScreen').removeClass('active').slideUp();
			$('#overlay').hide();
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
			$('#opis').hide();
			var Pid = $(this).data('id');
			pc(Pid);
			e.preventDefault();
		});
		
		$('#pc a').click(function(e){

		$('#opis').hide();
			var Pid = $(this).data('id');
			pc(Pid);
			e.preventDefault();
		});
		
		$('#pcI img').click(function(e){

			$('#opis').hide();
			var Pid = $(this).data('id');
			pc(Pid);
			e.preventDefault();
		});
/*
		$('#places a').hover(function() {
			var Pid = $(this).data('id');
			setTimeout(function(){
				$('#opis').hide();
				pc(Pid);
			},500);
		}, function() {});
		$('#pc a').hover(function() {
			var Pid = $(this).data('id');
			setTimeout(function(){
				$('#opis').hide();
				pc(Pid);
			},500);
		}, function() {});
		$('#pcI img').hover(function() {
			var Pid = $(this).data('id');
			setTimeout(function(){
				$('#opis').hide();
				pc(Pid);
			},500);
		}, function() {});
*/
		$('#now').click(function(e){
			$('#sherebot').slideDown();
			e.preventDefault();
		});


		var $doc = $(document),
		ratio = 0.1,
        mousepos, to;
        $doc.on('mousedown', 'body', dragstart);
        function dragstart(e) {
            e.preventDefault();
            mouseposX = e.screenX;
            mouseposY = e.screenY;
            $doc.on('mousemove.drag', drag); //в неймспейсе drag, чтобы потом отключить безболезненно для остальных листенеров
            $doc.one('mouseup', dragstop);
    	}
    	function drag(e) {
    	    clearTimeout(to);
    	    	var deltaX = (e.screenX - mouseposX)*ratio;
    	    	var deltaY = (e.screenY - mouseposY)*ratio;
    	    	to = setTimeout(function () {
    	    	var dW = -1920+$(window).width();
    	    	var dH = 1095-$(window).width();
    	    	var wsleft = parseInt($('#ship').css('left'))+deltaX;
    	    	var wstop = parseInt($('#ship').css('top'))+deltaY;
    	    	if (wsleft<0 && wsleft>dW) {
    	    		$('#ship').css({'left' : wsleft+'px'})
    	    	}
    	    	if (wstop<0 && wstop>dH) {
    	    		$('#ship').css({'top' : wstop+'px'})
    	    	}
            	mousepos = e.screenX;
        	}, 1);
    	}

    	function dragstop() {
        	$doc.off('mousemove.drag'); //отключаем свой mousemove.
    	}

	}
);
$(window).load(function(){
	
	$('body').removeClass('disable');
	$('#disable').remove();
})
$(document).ready(function(){
	
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
	}
	if (sW==1920) {
		var dH = (1080-sH)/2;
		$('#ship').css({
			'top':'-'+dH+'px',
		});
	}
	onloadp();
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
			'bottom' : '70px'
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
	function ship() {
		setInterval(shipT, 1200);
		setInterval(shipD, 1300);
	}
	function shipT() {
		$('#myship').animate({'top':"171"},1);
		$('#pcI1').animate({'top':"386"},1);
		$('#pcI2').animate({'top':"544"},1);
		$('#pcI3').animate({'top':"543"},1);
		$('#pcI4').animate({'top':"748"},1);
		$('#pcI5').animate({'top':"719"},1);
		$('#pcI6').animate({'top':"649"},1);
		$('#pcI7').animate({'top':"620"},1);
		
	}
	function shipD() {
		$('#myship').animate({'top':"169"},1);
		$('#pcI1').animate({'top':"383"},1);
		$('#pcI2').animate({'top':"542"},1);
		$('#pcI3').animate({'top':"541"},1);
		$('#pcI4').animate({'top':"746"},1);
		$('#pcI5').animate({'top':"717"},1);
		$('#pcI6').animate({'top':"647"},1);
		$('#pcI7').animate({'top':"618"},1);
	}
	function pc(idf) {
		if (idf==4 || idf==5) {
			var dH = 1080-$(window).height();
			$('#ship').animate({
			left: "0",
			top: -dH,
		},1000);
		} else {
		var dW = (1920-$(window).width())/2;
		var dH = (1080-$(window).height())/2;
			$('#ship').animate({
			left: -dW,
			top: -dH,
		},1000);

		}
		$('#opis').removeClass('pc1');
		$('#opis').removeClass('pc2');
		$('#opis').removeClass('pc3');
		$('#opis').removeClass('pc4');
		$('#opis').removeClass('pc5');
		$('#opis').removeClass('pc6');
		$('#opis').removeClass('pc7');
		$('#places a').removeClass('active');
		$('#pc a').removeClass('active');
		$('#pcI img').each(function(){
			$(this).css('opacity',0);});
		$('#pc'+idf).addClass('active');
		$('#pcI'+idf).animate({
			'opacity' : 1
		},500);
		$('#pl'+idf).addClass('active');
		$('#title').html($('#pl'+idf).html());
		$('#cont').html($('#pc'+idf).data('text'));
		$('#opis').addClass('pc'+idf);

		$('#opis').fadeIn();

	}

	function onloadp() {
		cloud1();
		cloud2();
		cloud3();
		cloud4();
		cloud5();
		ice();
		dron();
		ship();
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