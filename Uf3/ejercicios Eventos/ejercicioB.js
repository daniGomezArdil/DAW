function resalta(elEvento) {
var evento = elEvento || window.event;
	switch(evento.type) {
		case 'mouseover':
		this.style.borderColor = 'black';
		break;
		case 'mouseout':
		this.style.borderColor = 'silver';
		break;
	}
}

function muestraInformacion1(elEvento) {
var evento = elEvento || window.event;
var informa = document.getElementById("miDiv");
var coordenadaX = evento.clientX;
var coordenadaY = evento.clientY;
var pagX =evento.screenX;
var pagY =evento.screenY;
informa.innerHTML="RATON " + "<br>" +"Navegador "+"["+coordenadaX +", "+ coordenadaY+ "]"+"<br>" +"Pagina " +"["+pagX+","+pagY+"]";
}

function muestraInformacion(elEvento) {
var evento = window.event || elEvento;
var info = document.getElementById("myDiv");
var mensaje = "TECLADO " + "<br>" +
"Codigo [" + evento.keyCode +"]"+ "<br>" +
"Caracter [" + evento.charCode + "]" ;
info.innerHTML = mensaje;
}

window.onload = function() {
	document.getElementById("seccion").onmouseover = resalta;
	document.getElementById("seccion").onmouseout = resalta;
	document.onkeyup = muestraInformacion;
	document.onkeypress = muestraInformacion;
	document.onkeydown = muestraInformacion;
	document.onmousemove= muestraInformacion1;
};
