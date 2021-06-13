var animated=false;
var imgcount=6;
var tout=3000;
var pod=tout/150;
var curt=0;
var sw=true;
var ii=0;

const queryString = window.location.search;
const up = new URLSearchParams(queryString);
if(up.has('s')){
	uy=parseInt(up.get('s'))
	if(uy<imgcount&&uy>-1){
		ii=uy-1;
}
}
$("#bullets").append("<div class=\"bullet active\" id=\"0\"></div>")
for (var bul=1;bul<imgcount;bul++){
$("#bullets").append("<div class=\"bullet\" id=\""+bul+"\"></div>")

}
$("#gallery").append("<div id=\"image\" style=\"position:relative;top:120px;left:500px;max-height:65%;max-width:50%;\"></div>");
var images=[];
var descs=[];
var simples=[]
for (var im=0;im<imgcount;im++){
	images.push("gallery/"+im+".jpg")
	descs.push("gallery/"+im+".txt")
	simples.push("gallery/"+im+".simple.txt")

}
console.log(images);
function delay(ms){
	var myd=new Date()
	var curt=myd.getTime();
	var afr=curt+ms;
	while (true){
		myd=new Date()
		curt=myd.getTime()
		if (curt>=afr){
		break
}
		}
}
function reload(){
	$(".inner").fadeOut(function(){$(this).attr('src',images[ii])}).delay(100).fadeIn()
	$("#desc").fadeOut(function(){$(this).load(descs[ii])}).delay(100).fadeIn()
	$.get(simples[ii],function(d){$("title").text(d+" - Ayoreo Gallery")})
}
$("#image").html('<img class="inner" src="'+images[ii]+'" style="margin-left:auto;max-height:65%;max-width:50%;transform:scale(2)">')
$("#image").append('<p id="desc" style="top:65%;margin:auto;text-align:center;transform:translate(-41px,189px);"></p>')
$('#desc').load(descs[ii])
$.get(simples[ii],function(d){$("title").text(d+" - Ayoreo Gallery")})
$(".bullet").click(function(){
	curt=0;
		if (animated){return;}
	animated=true;

	delay(200)
	var b=$(this)
	if (b.is(".active")){
		return }
	$("#"+ii).removeClass("active")


	ii=parseInt(b.attr("id"));
		$("#"+ii).addClass("active");

	reload();
	animated=false;

})
$(".sipk").click(function(){
	if (animated){return;}
	animated=true;
	curt=0;
	delay(200)
	var $t=$(this)
		$("#"+ii).removeClass("active")

	if ($t.is("#prev")){
		ii--;
		if (ii<0){
	ii=imgcount-1
}
}
	else if ($t.is("#next")){
		ii++;
		if (ii===imgcount){
		ii=0;}
	}
	$("#"+ii).addClass("active");
	reload();
	animated=false
	
	})
function oneStep(){
	pod=tout/150;

	curt++;
	if (curt>=tout){
	if (sw){
	$("#"+ii).removeClass("active")
ii++;if(ii==imgcount){ii=0};reload();};curt=0;$("#"+ii).addClass("active")
};
	$("#timer").css('width',curt/pod+'px')
	
}
$('svg').hover(function(){$(this).attr('fill','#aea').css('border','1px solid #aea')},function(){$(this).attr('fill','#fea').css('border','0px solid #000')})
setInterval(oneStep,1)
$("#max").css('width',tout/pod+'px')
setInterval(function(){tout=parseInt($("#range").val());$("#to").text(tout)},3)
$("#show").click(function(){sw=!sw;curt=0;
	if(!sw){
	$("#timer").fadeOut()
	$("#max").fadeOut()
	$("#tc").fadeOut()
	}
	else{$("#timer").fadeIn();$("#max").fadeIn();$("#tc").fadeIn()}})
