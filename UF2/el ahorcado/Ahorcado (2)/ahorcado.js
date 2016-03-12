var palabras = ['GATO','PERRO','LEON','TIGRE','COCODRILO','MONO','PANDA','LEOPARDO','CAMELLO','PAJARO','MARIPOSA','OSO','SERPIENTE','CIERVO','LOBO','ELEFANTE','CIGUEÑA','DELFIN','TIBURON','AGUILA','FOCA','ANACONDA','CABALLO','GALLINA','OVEJA','CABRA','CONEJO','TORO','BURRO','MULA','CARACOL','LAGARTO','HORMIGA','MURCIELAGO','ORNITORRINCO'];
var letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','Y','X','Z'];
var numfallo;
var letrasAcertadas;
var posLetraErronea;
var palabra;

main();

function borrar(){
	ctx.clearRect(0, 0, 372, 372);
}

function pintarBotones(){
	for(var i = 0; i < letras.length; i++){
		if(i%7 == 0) document.write("<br />");
		document.write('<input type="button" id=' + letras[i] + ' style="width:50px; margin-right:4px; margin-bottom:4px" onclick="presionar(\'' + letras[i] + '\')" value=' + letras[i] + '>');
	}
	document.write('<input type="button" style="width:50px; margin-right:4px; margin-bottom:4px" onclick="iniciar()" value="Iniciar">');
}

function bloquear(){
	for(var i = 0; i < letras.length; i++){
		document.getElementById(letras[i]).disabled = true;
	}
}

function desbloquear(){
	for(var i = 0; i < letras.length; i++){
		document.getElementById(letras[i]).disabled = false;
	}
}

function pintarFallo(){
	numfallo++;
	switch(numfallo){
		case 1: cabeza(); break;
		case 2: tronco(); break;
		case 3: brazoIz(); break;
		case 4: brazoDer(); break;
		case 5: piernaIz(); break;
		case 6: piernaDer(); break;
		case 7: muerto(); bloquear();
	}
}

function obtenerPalabra(){
	var aux = Math.floor(Math.random()*palabras.length);
	palabra = palabras[aux];
	return palabra;
}

function pintarEspacios(palabra){
	var x = 50;
	var z = 350;
	for(var i = 0; i < palabra.length; i++){
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(x,z);
		ctx.lineTo(x+20,z);
		ctx.stroke();
		x = x + 25;
	}
}

function pintarLetra(letra,posicion){
	var x = 50;
	var z = 345;
	for(var i = 0; i < posicion; i++){
		x += 25;
	}
	ctx.font = "30px Verdana";
	ctx.fillText(letra,x,z);
}

function pintarLetraErronea(letra){
	var x = 325;
	ctx.font = "30px Verdana";
	ctx.fillText(letra,x,posLetraErronea);
	posLetraErronea += 35;
}

function buscar(letra){
	var coincidencias = 0;
	for(var i = 0; i < palabra.length; i++){
		if(palabra[i] == letra){
			pintarLetra(letra,i);
			coincidencias++;
		}
	}
	if(coincidencias == 0){
		pintarFallo(); 
		pintarLetraErronea(letra);
	}else{
		letrasAcertadas += coincidencias;
		if(letrasAcertadas == palabra.length){
			ctx.clearRect(0, 0, 372, 372);
			ctx.font = "40px Verdana";
			ctx.fillStyle = 'blue';
			ctx.fillText('ENHORABUENA',20,181);
			bloquear();
		}
	}
}

function presionar(letra){
	buscar(letra);
	document.getElementById(letra).disabled = true;
}

function iniciar(){
	ctx.fillStyle = 'black';
	numfallo = 0;
	letrasAcertadas = 0;
	posLetraErronea = 50;
	borrar();
	desbloquear();
	palo();
	palabra = obtenerPalabra();
	pintarEspacios(palabra);
}

function main(){
	pintarBotones();
	iniciar();
	/*var count = 0;
	document.write('<input id="img" type="image" src="blanco.png" alt="Submit" width="40" height="40">');
	document.getElementById("img").onmousedown = function(event) {
		if (event.which == 3) {
			count++
			if(count%2 != 0) document.getElementById("img").src = "band.jpg"; else document.getElementById("img").src = "blanco.png";
		}
	}*/
}
