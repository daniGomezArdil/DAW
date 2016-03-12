var canvas=document.getElementById("pantalla");
var ctx = canvas.getContext("2d");
var tabla = document.getElementById("monedas");
var partida1;

function ponerNombres(jugadores, monedas){
	//mostrar nombres
		//Banca
		ctx.font="50px Arial";
		ctx.fillStyle="#FFF";
		ctx.textAlign="center";
		ctx.fillText(jugadores[0],canvas.width/2,75);
		//PC1
		ctx.font="20px Arial";
		ctx.textAlign="start";
		ctx.fillText(jugadores[1],0,canvas.height/2);
		//PC2
		ctx.textAlign="center";
		ctx.fillStyle="#FFF";
		ctx.fillText(jugadores[2],canvas.width/2,canvas.height-50);
		//Usuario
		ctx.textAlign="end";
		ctx.fillStyle="#FFF";
		ctx.fillText(jugadores[3],canvas.width,canvas.height/2);

	//mostrar monedas
		//PC1
		ctx.textAlign="start";
		ctx.fillStyle="#F4FA58";
		ctx.fillText("( " + monedas[0] + " )",0,canvas.height/2+25);
		//PC2
		ctx.textAlign="center";
		ctx.fillStyle="#F4FA58";
		ctx.fillText("( " + monedas[1] + " )",canvas.width/2,canvas.height-25);
		//Usuario
		ctx.textAlign="end";
		ctx.fillStyle="#F4FA58";
		ctx.fillText("( " + monedas[2] + " )",canvas.width,canvas.height/2+25);
}

function ponerImagenes(jugador, numCarta, img){
	//cartas horizontales
	if (jugador == 0 || jugador == 2){
		numCarta *= 40;
		var imagen = new Image();
		imagen.src=(!img)?"img/hide.png":img.getRuta();
		imagen.onload = function(){
			if (jugador == 0){
				ctx.drawImage(imagen,canvas.width/2.9 + numCarta,140);
			}else{
				ctx.drawImage(imagen,canvas.width/2.9 + numCarta,canvas.height-200);
			}
		}
	}else{
		//cartas verticales
		var imagen = new Image();
		imagen.src=(!img)?"img/hide.png":img.getRuta();
		imagen.onload = function(){
			if (jugador == 3){
				ctx.drawImage(imagen,canvas.width/1.3,100+numCarta*60);
			}else{
				ctx.drawImage(imagen,canvas.width/5.5,100+numCarta*60);
			}
		}
	}
}

function nuevaPartida(){
	canvas.width = canvas.width;
	var ap = parseInt(prompt("La apuesta es de? \n - por defecto es 10 \n - no puede ser mas de 100"));
	partida1 = new Partida((isNaN(ap) || ap > 100) ? 10 : ap);
	ponerNombres(partida1.getNombreJugadores(),partida1.getMonedasJugadores());
	partida1.repartirPrimerasCartas();
}

function pedirCarta(){
	partida1.repartirUser();
}

function plantarse(){
	partida1.plantarJugador(3);
	partida1.finTurnoUser();
}

function limpiar(){
	ctx.clearRect(0,500,canvas.width,100);
	ctx.clearRect(0,0,canvas.width, 20);
	ctx.clearRect(canvas.width-100,0,100,canvas.height);
	ctx.clearRect(0,0,80,canvas.height);
}
