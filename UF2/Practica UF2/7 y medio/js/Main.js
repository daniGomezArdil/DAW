var canvas=document.getElementById("pantalla");
var ctx = canvas.getContext("2d");
var tabla = document.getElementById("monedas");
var partida1;

function ponerNombres(jugadores, monedas){
	ctx.font="20px Arial";
	//ctx.fillStyle="#FF0000";
	ctx.textAlign="center";
	ctx.fillText(jugadores[0],canvas.width/2,20);
	ctx.textAlign="start";
	ctx.fillText(jugadores[1],0,canvas.height/2);
	ctx.fillText("( " + monedas[0] + " )",0,canvas.height/2+25);
	ctx.fillText(jugadores[2],canvas.width/2,canvas.height);
	ctx.textAlign="center";
	ctx.fillText("( " + monedas[1] + " )",canvas.width/2,canvas.height-25);
	ctx.textAlign="end";
	ctx.fillText(jugadores[3],canvas.width,canvas.height/2);
	ctx.fillText("( " + monedas[2] + " )",canvas.width,canvas.height/2+25);
}

function ponerImagenes(jugador, numCarta, img){
	if (jugador == 0 || jugador == 2){
		numCarta *= 40;
		var imagen = new Image();
		imagen.src=(!img)?"img/hide.png":img.getRuta();
		imagen.onload = function(){
			if (jugador == 0){
				ctx.drawImage(imagen,canvas.width/2.6 + numCarta,30);
			}else{
				ctx.drawImage(imagen,canvas.width/2.6 + numCarta,canvas.height-130);
			}
		}
	}else{
		var imagen = new Image();
		imagen.src=(!img)?"img/hide.png":img.getRuta();
		imagen.onload = function(){
			if (jugador == 3){
				ctx.drawImage(imagen,canvas.width/1.2,25+numCarta*60);
			}else{
				ctx.drawImage(imagen,canvas.width/10,25+numCarta*60);
			}
		}
	}
}

function nuevaPartida(){
	canvas.width = canvas.width;
	partida1 = new Partida(50);
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


/*
	carta{
		- palo
		-num
		int getValor()
		string toString()
	}

	baraja{
		- cartas = []
		void barajar()
		carta getCarta()
		int cuantasQuedan();
		ponerCarta(Carta);
	}

	jugador{
		- monedas
		- cartas
		int getPuntos()
		int getMoneas()
		setMonedas(int);
		quieroCarta();
		seHaPasado();
		getPublicVisiblePoints();
	}

	turno{
		turno coge jugador 1 y le da cartas hasta que se pase o se plante
		turno coge otro jugador y hace lo mismo con el jugador asi hasta acabar
	}
	*
	Partida hasta que el jugador no de a nueva partida no se va a poder hacer nada

	partida{
		apuesta
		jugadores
	}

	preguntar jugador quieres carta, coger carta º
	mano{
		turno
		partida
	}
 */
