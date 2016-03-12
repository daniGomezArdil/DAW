// Variables globales
var array_palabras=['gato','perro','tigre'];
var palabra;
var canvas;
var ctx;
var numero_fallos=0;

//Llamada a la funcion principal;


//Funciones
function main(){
canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
	obtenerPalabra();
	pintarEspacios(palabra);
	pintarBotones();
}

function pintarBotones(){
	var i;
	//var abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var letra="";
	document.write("<br />");
	for (i=0;i<26;i++){
		if (i%7==0) {
			document.write("<br />");
		}
		letra=String.fromCharCode(65+i);
		//document.write("<input type=BUTTON VALUE="+letra+" onclick='buscar("+(65+i)+")'>");
		document.write("<input type=BUTTON VALUE="+letra +" onclick='buscar(\""+letra+"\")'>");
	}
}

function pintarFallo(){
	//1-> Cabeza, 2-->Tronco, 3-->Pierna...
	var x=50;
	var y=100;
	ctx.fillStyle="white";
	ctx.fillRect(x,y-30, 100,32);
	ctx.strokeText("Llevas: " + numero_fallos +" errores",x,y);
	if (numero_fallos==7){
		alert("Game Over");
	}
}

function pintarLetra(posicion, queletra){
	var x=50;
	var y=200;
	x=x+(posicion*20);
	y=y-1;
	ctx.strokeText(queletra,x,y);
}

function pintarAcierto(queletra){
	var i;
	for (i=0;i<palabra.length;i++){
		if (palabra.charAt(i)==queletra){
			pintarLetra(i,queletra);
		}
	}
}

function buscar(queletra){
	if (numero_fallos>=7){
		alert("El juego ya ha acabado! Pulsa F5 o actualizar");
	}
	else{
		if (palabra.indexOf(queletra)==-1){
			//La letra no está --> FALLO
			numero_fallos++;
			pintarFallo();
		}
		else {
			//La letra si está --> ACIERTO
			pintarAcierto(queletra);
		}
	}
}
function obtenerPalabra(){
	var aux;
	aux=Math.floor(Math.random()*array_palabras.length);
	palabra=array_palabras[aux];
	palabra=palabra.toUpperCase();
}

function pintarEspacios(palabro){
	var x=50;
	var y=200;
	for (var i=0; i<palabro.length;i++) {
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+10,y);
		ctx.stroke();
		x=x+20;
	}
}
