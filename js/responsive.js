var w = window;
var d = document;

responsivecss();

function responsivecss(){
	var width = w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth || 0;
	if(width < 481){
		var css = document.createElement('link');
		css.type = 'text/css';
		css.rel = 'stylesheet';
		css.media = 'screen';
		css.title = 'Responsive';
		css.id = 'responsivecss';
		css.href = '../css/responsive.css';
		  
		(document.head || document.getElementsByTagName('head')[0]).appendChild(css);
	}
}
function resize(){
	if(!document.getElementById('responsivecss')){
		responsivecss();
	}
}

if (w.addEventListener) {
  w.addEventListener('resize', resize, false);
}else if (w.attachEvent) {
  w.attachEvent('onresize', resize);
}else {
  w.onresize = resize;
}
setTimeout(scrollTo, 100, 0, 1);
