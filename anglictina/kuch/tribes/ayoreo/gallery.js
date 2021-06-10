
var imgcount=6;
$("#bullets").append("<div class=\"bullet active\" id=\"0\"></div>")
for (var bul=1;bul<imgcount;bul++){
$("#bullets").append("<div class=\"bullet\" id=\""+bul+"\"></div>")

}
$("#gallery").append("<div id=\"image\" style=\"position:relative;left:500px;max-height:65%;max-width:50%;\"></div>");
var images=[];
for (var im=0;im<imgcount;im++){
	images.push("gallery/"+im+".jpg")
}
console.log(images);
var ii=0;
function reload(){
	$("#inner").fadeOut(function(){$(this).attr('src',images[ii])}).fadeIn()
}
$("#image").html('<img id="inner" src="'+images[ii]+'" style="margin-left:auto;max-height:65%;max-width:50%;transform:scale(1.5)">')
$(".bullet").click(function(){
	var b=$(this)
	if (b.is(".active")){
		return }
	$("#"+ii).removeClass("active")


	ii=parseInt(b.attr("id"));
		$("#"+ii).addClass("active");

	reload();

})
$(".sipk").click(function(){
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
	
	})
