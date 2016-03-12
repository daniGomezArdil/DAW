var palabras=['PERRO','VACAS','MONOS','GATOS','PATOS','GALLO','CALLO','RATON','MATON'];
var ctx;
var canvas;
var oculto;
var intento = 0;
var texto = new Array();
var names=[];
var datos=new Array(2);
local();
mostrar();
function puntos(){
	datos[0]=prompt("Nombre?");
	datos[1]=1;
	if (localStorage.puntuacion){
		var pts = JSON.parse(localStorage.puntuacion);
		pts.push(datos);
		localStorage.puntuacion=JSON.stringify(pts);
	}else{
		names.unshift(datos);
		localStorage.puntuacion=JSON.stringify(names);
	}
}

function mostrarPuntos(){
	document.write("<ul>");
	var storedNames=JSON.parse(localStorage.puntuacion);
	for (i = 0; i < storedNames.length; i++){
		document.write("<li>"+storedNames[i]+"</li>");
	}
	document.write("</ul>");
}
function bc(){
	localStorage.removeItem("puntuacion");
}
function iniciar(){
	canvas=document.getElementById("gambas");
	ctx=canvas.getContext("2d");
	palo();
	oculto = obtenerPalabra();
	cifrar();
	cuadroBlanco();
	pintarTexto(sinComa());
	document.getElementById("inicio").disabled = true;
}

function palo(){
	ctx.beginPath();
	ctx.moveTo(150,80);
	ctx.lineTo(150,50);
	ctx.lineTo(50,50);
	ctx.lineTo(50,250);
	ctx.lineWidth=5;
	ctx.stroke();
	ctx.fillStyle="#FFF";
}
function cabeza(){
	ctx.beginPath();
	ctx.arc(150,100,20,0,2*Math.PI);
	ctx.stroke();

}
function cuerpo(){
	ctx.beginPath();
	ctx.moveTo(150,119);
	ctx.lineTo(150,185);
	ctx.stroke();

}
function piernaDer(){
	ctx.beginPath();
	ctx.moveTo(150,185);
	ctx.lineTo(120,240);
	ctx.stroke();

}
function piernaIz(){
	ctx.beginPath();
	ctx.moveTo(150,185);
	ctx.lineTo(180,240);
	ctx.stroke();

}
function brazoDer(){
	ctx.beginPath();
	ctx.moveTo(150,140);
	ctx.lineTo(100,155);
	ctx.stroke();

}
function brazoIz(){
	ctx.beginPath();
	ctx.moveTo(150,140);
	ctx.lineTo(200,155);
	ctx.stroke();

}

function obtenerPalabra(){
	var rand = Math.floor(Math.random()*palabras.length);
	return palabras[rand];
}

function enviar(caracter){
	var letra = caracter;
	var esta = true;
	for (i = 0; i < oculto.length; i++){
		if(letra == oculto.charAt(i)){
			texto[i]=caracter;
			esta = false;
		}
	}
	var comparar = sinComa();
	if(esta){
		pintarFallo(intento);
		intento++;
	}else{
		cuadroBlanco();
		pintarTexto(sinComa());
		document.getElementById(caracter).disabled = true;
	}
	if (comparar == oculto){
		alert("Ganaste !!");
		for (i = 0; i < 26; i++){
			var letra =String.fromCharCode(65+i);
			document.getElementById(letra).disabled = true;
		}
	}

}

function pintarTexto(texto){
	ctx.font="20px arial";
	ctx.fillStyle="black";
	ctx.fillText(texto,50,280);
	ctx.fillStyle="#FFF";
}

function cifrar(){
	for (i = 0; i < oculto.length; i++){
		texto[i]='_';
	}
}
function cuadroBlanco(){
	ctx.fillRect(40,265,100,20);
	ctx.fillStyle="#FFF";
}
function sinComa(){
	var txt="";
	for (i = 0; i < oculto.length; i++){
		txt+=texto[i];
	}
	return txt;
}

function pintarFallo(intento){
	switch(intento){
		case 0:cabeza();break
		case 1:cuerpo();break
		case 2:piernaDer();break
		case 3:piernaIz();break
		case 4:brazoDer();break
		case 6:brazoIz(); alert("Game Over");
	}
}
