
function start(){
	$("body").append("<canvas id=\"cv\" width=1920 height=1005></canvas>")
setInterval(function(){	var can = document.getElementById("cv");

can.style.width = window.innerWidth + "px";
can.style.height = window.innerHeight + "px";},10)
	$cv=$("#cv")
	
	$("body").prepend("<img style=\"transform:translate(10px,300px) scale(0.9); display:inline;\"src=\"assets/knight.gif\" id=\"kn\">")	
	$cv.css({background:"url(assets/forest.png)"})
	
		document.documentElement.requestFullscreen()
	$("#kn").transition({x:"400px",y:"300px",duration:5000})
	setTimeout(
	function(){
	$cv.drawImage({
	x:1300,y:400,name:"tekvica",source:"assets/pumpkin.png",scale:0.5
	});
	setInterval(function(){
	console.log(1);
	$cv.animateLayer('tekvica',{x:1000,y:400,scale:8900,complete:function(){console.log(2)	
	$(this).animateLayer('tekvica',{x:1300,y:400},200)
	})}
	,400)},3000)
	
	}
