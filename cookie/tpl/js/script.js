/* Фразы!!!! */
var fraz = [
	'Шеф вы сегодня в ударе!',
	'Чуть помедленнее, чуть помедленнее!',
	'Воу-воу, шеф, полегче!',
	'Рубли потекли в кассу!',
	'Деньги рекут текой!',
	'Босс, вас уже не остановить!',
	'Бизнес крутится, деньги мутятся! ',
	'Не так быстро, начальник! ',
	'Билл Гейтс уже отдыхает!',
	'Шеф, мы не успеваем тратить!',
]
/* конец */

jQuery(document).ready(function(e){
	jQuery('.vk').click(function(e){
		jQuery(this).attr('href','http://vk.com/share.php?url='+window.location.href+'&title=Дом.ру кликер&description=Моя компания '+jQuery('#nameComp span').html()+' заработала '+jQuery('#cookies span').html()+'!&image=http://'+window.location.host+'/game2016/tpl/img/tel.png');
	});
	jQuery('.tw').click(function(e){
		jQuery(this).attr('href','https://twitter.com/intent/tweet?status=Моя компания '+jQuery('#nameComp span').html()+' заработала '+jQuery('#cookies span').html()+'! '+window.location.href);
	});
	jQuery('.fb').click(function(e){
		jQuery(this).attr('href','https://www.facebook.com/sharer/sharer.php?&p[title]=Дом.ру кликер&p[summary]=Моя компания '+jQuery('#nameComp span').html()+' заработала '+jQuery('#cookies span').html()+'!&p[url]='+window.location.href+'&p[images][0]=http://'+window.location.host+'/game2016/tpl/img/tel.png');
	});
	jQuery('.ok').click(function(e){
		jQuery(this).attr('href','https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl='+window.location.href+'&st.comments=Моя компания '+jQuery('#nameComp span').html()+' заработала '+jQuery('#cookies span').html()+'!');
	});
	if (screen.height<700) {
		var mZoomW = screen.height/700;
		jQuery('#domru').css('transform','scale('+mZoomW+', '+mZoomW+')');
	}
	var compName = getCookie('compName');
	if (!compName) compName='Ваша компания';
	jQuery('#nameComp span').html(compName);
	jQuery('input[name="name"]').val(compName);
	if (!getCookie('CookieClickerGame')) {
		
		jQuery('#overlay').fadeIn();
		jQuery('#domru').fadeIn();
	}
   var left = 0,
   top = 0,
   element = jQuery('body'),
   offset =  { left: element.offset().left};
   element.bind('mousemove', function(e){
      left = (e.pageX-offset.left);
      var mouseXPercent = Math.round(left / element.width() * 100);
      var diffX = 1500;
      var myX = diffX * (mouseXPercent / 500)-150;
      var myX2 = diffX * (mouseXPercent / 2500)-630;
      var myX3 = diffX * (mouseXPercent / 1000)+100;
      jQuery(this).css({backgroundPosition   : myX+'px 0px'});
      jQuery('.lefFon').css({backgroundPosition   : myX2+'px center'});
      jQuery('.rightFon').animate({backgroundPosition   : myX3},0);
      var pageX=e.pageX;
	});
	var sH;
	sH = jQuery(document).height()-158-120-45;
	jQuery('.office').height(sH);
	jQuery('.lefFon').height(jQuery(document).height());
	jQuery('.rightFon').height(jQuery(document).height());
	$(".gameRes").mCustomScrollbar({
	axis:"y",
	setHeight: 435,
	setWidth: 368,
		scrollButtons:{ 
			enable: true,
			scrollAmount: 12
		},	
});
	jQuery('#edit').click(function(e){
		jQuery('#nameComp').slideUp();
		jQuery('#editComp').slideDown();
		e.preventDefault();
	})
	jQuery('#save').click(function(e){
		jQuery('#nameComp').slideDown();
		jQuery('#editComp').slideUp();
		document.cookie = "compName="+jQuery('input[name="name"]').val();
		jQuery('#nameComp span').html(jQuery('input[name="name"]').val());
		e.preventDefault();
	})
	jQuery('#bigCookie').click(function(){
		soundClick2('klik',0.05);
	});
	jQuery('#tree').click(function(){
		soundClick('r2d2');
	});
	jQuery('#overlay').click(function(){
		jQuery('#overlay').fadeOut();
		jQuery('#domru').fadeOut();
	});
	jQuery('#closeD').click(function(){
		jQuery('#overlay').fadeOut();
		jQuery('#domru').fadeOut();
	});
});


function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return(setStr);
}
function soundClick(sC) {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '/game2016/tpl/sound/'+sC+'.mp3'; // Указываем путь к звуку "клика"
  audio.volume=0.5;
  audio.autoplay = true; // Автоматически запускаем
}
function soundClick2(sC,vl) {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '/game2016/tpl/sound/'+sC+'.mp3'; // Указываем путь к звуку "клика"
  audio.volume=vl;
  audio.autoplay = true; // Автоматически запускаем
}
function getRandomArbitary(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}
