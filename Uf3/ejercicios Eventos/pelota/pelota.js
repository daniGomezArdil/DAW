var x = 0;
var y = 0;
var movx=2;
var movy=2;
var orientacion= window.orientation;
var maxx=screen.width;
var maxy=screen.height;
function muestra(){
	orientacion = window.orientation;
}
window.addEventListener("deviceorientation", function(event){
var ball = document.getElementById("ball");
var gamma=Math.round(event.gamma);
var beta=Math.round(event.beta);
if (orientacion==0){
if (gamma>2) {
if (x<maxx-25) { x = x+movx; }
}
if (gamma<-2) {
if (x>25) { x = x-movx; }
}
if (beta>2) {
if (y<maxy-25) { y = y+movy; }
}
if (beta<-2) {
if (y>25) { y = y-movy; }
}
}
ball.style.top = y + "px";
ball.style.left = x + "px";
}, false);
