var jazdaSimul
window.onzoom=function(){alert("nezoomuj debil!")}
function scene4(){
	$("body").css({"background-image":"url(\"assets/bg3.jpg\")","background-repeat":"no-repeat"})	
	$("#knight").show(0)
	$("#knight").attr("src","assets/stop.gif")
	$("#knight").transition({x:0,y:0,duration:0})
	
	$("body").append("<img src=\"assets/king.png\" id=\"king\">")
	$("#king").transition({x:300,y:0,duration:0})
	$("#king").transition({x:200,y:0,duration:1000})
	$("#textik").css({"background-color":"black","color":"white","position":"absolute","top":"0px"})
	$("#textik").transition({x:0,y:0,duration:0})
	$("#textik").fadeIn(300)
	
	}
function scene3(){
	$("#tabula").hide(0);
	$("#flag").hide(0);
	$("body").css({"background-image":"url(\"assets/bg2.jpg\")","background-repeat":"no-repeat"})	
	$("#knight").show(0);
	$("#knight").css({"top":0,bottom:0,left:0,right:0})
	document.getElementById("knight").removeAttribute('style')

	$("#knight").transition({x:0,y:400,duration:0})
	$("#knight").transition({x:12000,y:400,duration:12000})
	setTimeout(scene4,5000)
}

function scene2(){
	
	$("body").append("<img src=\"assets/tabularasa.png\" id=\"tabula\" >")
	$("body").append("<img src=\"assets/flag.png\" id=\"flag\" >")

	$("body").css({"background-image":"url(\"assets/hd2.jpg\")","background-repeat":"no-repeat","background-size":"1920px 1080px"})
	//$("body").animate({"background-size":"500%"},10000)
	$("#tabula").css({"opacity":"90%","transform":"translate(1300px,300px) scale(0.1)"})
	$("#flag").css({"position":"absolute",display:"block","left":"700px","top":"0px","transform":"scale(0.2) translate(700px,-900px)",opacity:"70%"})
	$("#tabula").transition({opacity:100,y:2000,x:2300,scale:5,duration:49974})
	$("#flag").transition({opacity:100,x:-5000,y:1500,duration:50000,scale:1})
	setTimeout(scene3,20000)
	setTimeout(function(){var arranat = new Audio("music/arranat.mp3");arranat.play()},5500)
}	
function scene1(){
	$("#knight").hide(0);
	$("#poz").hide(0);
	$('body').css('background-color','black');
	
	$("body").append("<div class=\"center\"><img src=\"assets/head.jpg\" id=\"hlava\" style=\"margin:50%;display:block;transform:scale(1.5);\"></div>");
	$("body").append('<div style="color:white;font-weight:900;text-align:center;font-size:30pt;" id="textik">Ja som veľký rytier Separré</div>');
	
	 	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("Zabil som toľko príšer, že ma to už nebaví počítať!").fadeIn(300)})},3000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("A teraz smerujem ...").fadeIn(300)})},6000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("Ku kráľovstvu Arranat.").fadeIn(300)})},9000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").text("Počul som, že tam majú").fadeIn(300)})},12000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").html("<span  style=\"font-size:40pt\">Obrovského</span> draka").fadeIn(300)})},15000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").html("Veď viete ako to chodí...").fadeIn(300)})},18000)
	setTimeout(function(){$("#textik").fadeOut(300,function(){
	$("#textik").html("Princeznú za ženu a pol kráľovstva k tomu!").fadeIn(300,function (){var evil = new Audio('music/evil.mp3');evil.play()})})},21000)
	setTimeout(function(){$("body").css('background-color','white');$("#hlava").hide(100,function(){console.log("eisdjieajdmsx")});$("#textik").hide(100,scene2)},25000)
	}




function init(){
$('body').append($('<img src="assets/knight.gif" id="knight" style="bottom:100px;left:0px;transform:scale(0.6);position:absolute;">'))

}
function start(){

var timer;
var datTimer;

$('body').append($('<img src="assets/forest.png" id="poz" style="min-width:100%;bottom:0px;position:fixed;">'))
$('body').append($('<img src="assets/datel.ico" id="datel-im" style="top:0px;left:0px;position:absolute;">'))

datTimer=setInterval(function(){try{audio.stop()} catch {} ;var audio = new Audio('music/knock.mp3');
	audio.volume=0.5;
	//audio.play();
$("#datel-im").rotate({animateTo:36,callback:function(){try{audio.stop()} catch {} ;var audio = new Audio('music/knock.mp3');
	audio.volume=1
	//audio.play();
$("#datel-im").rotate({animateTo:0})}})},3000);
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
	audio.play();$("#knight").attr("src","assets/knight.gif");$('#knight').animate({left:"2000px"},2000,scene1).hide(0);$("#datel-im").fadeOut(300)},5000);
})}
