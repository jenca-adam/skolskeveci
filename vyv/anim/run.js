

$('body').append($('<button>Prehrať</button>'))
$('button').click(function(){
$("body").css('cursor','none')
//document.documentElement.requestFullscreen();
$('#npcs').hide(0);
var theme = new Audio('music/theme.wav');
theme.volume=0.3;
theme.play();
$('button').hide(0)
scene2();
})


