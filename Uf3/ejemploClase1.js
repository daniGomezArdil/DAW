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
informa.innerHTML="Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY;
}

function muestraInformacion(elEvento) {
var evento = window.event || elEvento;
var info = document.getElementById("myDiv");
var mensaje = "Tipo de evento: " + evento.type + "<br>" +
"Propiedad keyCode: " + evento.keyCode + "<br>" +
"Propiedad charCode: " + evento.charCode + "<br>" +
"Carácter pulsado: " + String.fromCharCode(evento.charCode);
info.innerHTML += "<br>--------------------------------------<br>" + mensaje
}

window.onload = function() {
	document.getElementById("seccion").onmouseover = resalta;
	document.getElementById("seccion").onmouseout = resalta;
	document.onkeyup = muestraInformacion;
	document.onkeypress = muestraInformacion;
	document.onkeydown = muestraInformacion;
	document.onclick = muestraInformacion1;
};
