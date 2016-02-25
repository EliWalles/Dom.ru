$(document).ready(
	function() {
		var allH = 102+117+$('.allContent > div.container').height();
		if (allH < $(window).height()) {
		var rtyhj = $(window).height()-102-117;
		$('.allContent > div.container').height(rtyhj);
		}
    	var angle = 0;
    	setInterval(
    		function(){
	      		angle+=0.3;
	     		$(".snow img").rotate(angle);
			}
		,50);
		$('.calendar .col-md-3').hover(
			function() {
		    	$(this).find('.month').stop().animate({rotate: "3deg", boxShadow : "0 0 18px 0  rgba(0,0,0,0.35)"}, 500); 
		    	$(this).find('.logo').stop().animate({rotate: "-3deg"}, 500); 
		    }, function() {
		    	$(this).find('.month').stop().animate({rotate: "0deg", boxShadow : "0 0 0 0  rgba(0,0,0,0.35)"}, 500);
		    	$(this).find('.logo').stop().animate({rotate: "0deg"}, 500); 
			}
		);
		$('.calendar a').click(
			function(e) {
				$('body').addClass('no-overflow');
				var myMes = $(this).data('m');
				$('.co-month').hide();
				$('.co-cont').hide();
				$('.co-big').hide();
				$('.co-big').attr('src',$(this).find('.big').attr('src'));
				$('.co-month').html($(this).find('p.title').html());
				$('.post-content').attr('id','m'+myMes);
				$('.co-big').attr('id','mi'+myMes);
				var imagefg = 'http://landau-inc.ru'+$('.co-big').attr('src');
				var descf = $(this).find('p.phrase').html()+'<br/><br/><strong> - '+$(this).find('p.author').html()+'</strong>';
				$('.post-content span#clst').html('<p>'+descf+'</p><script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script><script type="text/javascript" src="//yastatic.net/share2/share.js"></script><div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,twitter" data-description="'+$(this).find('p.phrase').html()+'"	data-image="'+imagefg+'" data-title="'+$(this).find('p.author').html()+'"></div>');
				$('.co-cont').html($(this).find('p.desc').html());
				$('.overlay').show().stop().animate({opacity: "0.5"}, 100, 
					function() {
						$('.contentOverlay').stop().removeClass('zoomOutDown').show().addClass('zoomInUp').addClass('animated');
						$('.co-month').stop().removeClass('zoomOutRight').show().addClass('zoomInRight').addClass('animated');
						$('.co-cont').stop().removeClass('zoomOutRight').show().addClass('zoomInRight').addClass('animated');
						$('.co-big').stop().removeClass('zoomOutRight').show().addClass('zoomInRight').addClass('animated');
						
						var cOleft = $('.co-big').css('left');	
						var cOwidth = 680+$('.co-big').width()+parseInt(cOleft);
						var mHeight = $(window).height();
						var mWidth = $(window).width();
						var mZoomH = mHeight/740;
						var mZoomW = mWidth/cOwidth;
						var myZoom =1;
						if (mZoomH> 1) mZoomH=1;
						if (mZoomW> 1) mZoomW=1;
						if (mZoomH<mZoomW) myZoom=mZoomH;
						else  myZoom=mZoomW;
						var mRazW = cOwidth-cOwidth*myZoom;
						var mRazH = 740-740*myZoom;
						bWidth = cOwidth*myZoom/2;
						bHeight = 370*myZoom;
						bWidth = 0-bWidth;
						bHeight =0-bHeight;
						if (myZoom != 1) {
							$('.contentOverlay').css('transform','scale('+myZoom+', '+myZoom+')');
							$('.contentOverlay').css('margin-left',bWidth+'px');
							$('.contentOverlay').css('margin-top',bHeight+'px');
						}
						if (mWidth<700) {
							bWidth = cOwidth*myZoom/2;
							bHeight = 370*myZoom;
							bWidth = 0-bWidth-mRazW*myZoom/2.4;
							bHeight =0-bHeight-mRazH*myZoom/2.4;
							$('.contentOverlay').css('margin-left',bWidth+'px');
							$('.contentOverlay').css('margin-top',bHeight+'px');
						} 
						if (mWidth<400) {
							bWidth = cOwidth*myZoom/2;
							bHeight = 370*myZoom;
							bWidth = 0-bWidth-mRazW*myZoom/1.3;
							bHeight =0-bHeight-mRazH*myZoom/1.3;
							$('.contentOverlay').css('transform','scale(0.35, 0.35)');
							$('.contentOverlay').css('margin-left',bWidth+'px');
							$('.contentOverlay').css('margin-top',bHeight+'px');
						} 
					}
				); 
				e.preventDefault();
			}
		)
		$('.ya-share2__link').click(
			function() {
				social();
			}
		)
		$('.overlay').click(
			function() {
				click();
			}
		)
		$('.close').click(
			function() {
				click();
			}
		)
	}
);

function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}

function click() {
	$('.co-month').removeClass('zoomInRight');
	$('.co-cont').removeClass('zoomInRight');
	$('.co-big').removeClass('zoomInRight');
	$('.contentOverlay').removeClass('zoomInUp').addClass('zoomOutDown').addClass('animated');
	$('.overlay').stop().animate({opacity: "0"}, 1400, function() {$('.overlay').hide();}); 
	$('body').removeClass('no-overflow');
}

