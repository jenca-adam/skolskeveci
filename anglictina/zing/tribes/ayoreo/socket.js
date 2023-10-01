var url='https://gtsforum.xyz/sender/'
var ps=[]
function _r(){
	var h=JSON.parse($.get(url));
	if(h!=null){
		ps.push(h)
}
}
function receive(){
	return ps.pop()
}
function post(data){
	$.post(url,'d='+data)
}
