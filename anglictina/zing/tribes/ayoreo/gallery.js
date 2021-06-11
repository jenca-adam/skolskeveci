var animated=false;
var imgcount=6;
$("#bullets").append("<div class=\"bullet active\" id=\"0\"></div>")
for (var bul=1;bul<imgcount;bul++){
$("#bullets").append("<div class=\"bullet\" id=\""+bul+"\"></div>")

}
$("#gallery").append("<div id=\"image\" style=\"position:relative;left:500px;max-height:65%;max-width:50%;\"></div>");
var images=[];
var descs=[];
for (var im=0;im<imgcount;im++){
	images.push("gallery/"+im+".jpg")
	descs.push("gallery/"+im+".txt")
}
console.log(images);
var ii=0;
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
	$("#inner").fadeOut(function(){$(this).attr('src',images[ii])}).delay(100).fadeIn()
	$("#desc").fadeOut(function(){$(this).load(descs[ii])}).delay(100).fadeIn()
	$("title").load(descs[ii])
	$("title").append(' - Ayoreo Gallery');
}
$("#image").html('<img id="inner" src="'+images[ii]+'" style="margin-left:auto;max-height:65%;max-width:50%;transform:scale(2)">')
$("#image").append('<p id="desc" style="top:70%;margin:auto;text-align:center;transform:translate(-41px,189px);"></p>')
reload();
$(".bullet").click(function(){
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
$('svg').on('mousein',function(){$(this).attr('fill','#aea')})
$('svg').on('mouseout',function(){$(this).attr('fill','#fea')})


