var canvas=document.getElementById("pantalla");
var ctx = canvas.getContext("2d");
var tabla = document.getElementById("monedas");
var partida1;
var btnPlantar = document.getElementById("plantar")
btnPlantar.disabled = true;
var btnPedir = document.getElementById("pedir")
btnPedir.disabled = true;
var btnNueva = document.getElementById("nueva")
var btnContinuar = document.getElementById("continuar")
btnContinuar.disabled = true;

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
	var ap = parseInt(prompt("La apuesta es de? \n - por defecto es 25 \n - no puede ser mas de 100"));
	partida1 = new Partida((isNaN(ap) || ap > 100) ? 25 : ap);
	ponerNombres(partida1.getNombreJugadores(),partida1.getMonedasJugadores());
	partida1.repartirPrimerasCartas();
	btnNueva.disabled = true;
	btnPedir.disabled = false;
	btnPlantar.disabled = false;
}

function pedirCarta(){
	partida1.repartirUser();
}

function plantarse(){
	partida1.plantarJugador(3);
	partida1.finTurnoUser();
	btnNueva.disabled = false;
	btnContinuar.disabled = false;
	btnPedir.disabled = true;
	btnPlantar.disabled = true;
}

function continuar(){
	canvas.width = canvas.width
	ponerNombres(partida1.getNombreJugadores(),partida1.getMonedasJugadores());
	partida1.continuar();
	btnNueva.disabled = true;
	btnContinuar.disabled = true;
	btnPedir.disabled = false;
	btnPlantar.disabled = false;
}

function finDeJuego(){
	btnPedir.disabled = true;
	btnPlantar.disabled = true;
	btnContinuar.disabled = true;
	btnNueva.disabled = false;
	ctx.font="80px Arial";
	ctx.textAlign="center";
	ctx.fillStyle="red";
	ctx.fillText("GAME OVER",canvas.width/2,canvas.height/2+25);
}
