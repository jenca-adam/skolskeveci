var jazdaSimul;
function scene1(){
	$("#knight").hide(0);
	$("#poz").hide(0);
	$('body').css('background-color','black');
	
	$("body").append("<div class=\"center\"><img src=\"assets/head.jpg\" id=\"hlava\" style=\"margin:50%;display:block;transform:scale(1.5);\"></div>");
	$("body").append('<div style="color:white;font-weight:900;text-align:center;font-size:30pt;" id="textik">Ja som veľký rytier Separré</div>');
	
	 	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("Zabil som toľko príšer, že ma to už nebaví počítať!").fadeIn(300)})},3000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("A práve smerujem...").fadeIn(300)})},3000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("Ku kráľovstvu Arranat.").fadeIn(300)})},3000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("Počul som, že tam majú").fadeIn(300)})},3000)

	}
function start(){
var timer;
var datTimer;
datTimer=setInterval(function(){try{audio.stop()} catch {} ;var audio = new Audio('music/knock.mp3');
	audio.volume=1;
	audio.play();
$("#datel-im").rotate({animateTo:36,callback:function(){try{audio.stop()} catch {} ;var audio = new Audio('music/knock.mp3');
	audio.volume=1
	audio.play();
$("#datel-im").rotate({animateTo:0})}})},2100);
$('#knight').animate(
{left:"500px"},
5000,
function(){
	$("body").append($("<img src=\"assets/pumpkin.png\" id=\"pumpky\" style=\"position:absolute;bottom:0px;left:1000px;transform:scale(0.5);\">").animate(
	{left:"700px"},500));
	timer=setInterval(function(){$("#knight").animate({left:"800px"},
300,
function(){
	
	$("#knight").animate(
	{left:"500px"},300)
	var audio = new Audio('music/sword.wav');
	audio.volume=0.3
	audio.play();
	
	});

$("#pumpky").animate({left:"850px"},
300,
function(){
	
	$("#pumpky").animate(
	{left:"800px"},300)
	
	});
}
,650)

		

setTimeout(function(){clearInterval(timer),$("#pumpky").fadeOut(500);	var audio = new Audio('music/dead.wav');audio.volume=0.3
	audio.play();$("#knight").attr("src","assets/knight.gif");$('#knight').animate({left:"2000px"},2000,scene1).hide(0);$("#datel-im").hide(0)},5000);
})}
