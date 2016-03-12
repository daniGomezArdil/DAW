function Partida(a) {
	var nombres = [ "Banca","Kevin", "Dani","Edison"];
	this.baraja = new Baraja();
	this.apuesta = a;
	this.mano = new Mano();
	this.jugadores = [];
	this.jugadores[0] = new Jugador(nombres[0], 10000000000000000);
	for (var i = 1; i < nombres.length; i++){
		this.jugadores.push(new Jugador(nombres[i]));
		//this.jugadores[i].pagar(a);
	}
}

Partida.prototype.getNombreJugadores = function( ) {
	var ar = [];
	for (var i = 0; i < this.jugadores.length; i++){
		if(this.jugadores[i].estaJugando()){
			ar.push(this.jugadores[i].getNombre());
		}
	}
	return ar;
};

Partida.prototype.getMonedasJugadores = function( ){
	var ar = [];
	for (var i = 1; i < this.jugadores.length; i++){
		if(this.jugadores[i].estaJugando()){
			ar.push(this.jugadores[i].getMonedas());
		}
	}
	return ar;
};

Partida.prototype.repartirPrimerasCartas = function () {
		this.mano.turno(this.jugadores)

		setTimeout(function(jugador,mano){
			if(jugador.estaJugando()){
				mano.turno(jugador,1);
			}
		}, 500, this.jugadores[1],this.mano);

		setTimeout(function(jugador,mano){
			if(jugador.estaJugando()){
				mano.turno(jugador,2);
			}
		}, 1000, this.jugadores[2],this.mano);
}

Partida.prototype.repartir = function(fin ){
	if(fin){
			this.mano.turno(this.jugadores[0],0);
	}else{
		for (var i = 0; i < this.jugadores.length; i++) {
			if(this.jugadores[i].estaJugando()&& i > 1){
				this.mano.turno(this.jugadores[i],i);
			}
		}
	}
}

Partida.prototype.repartirUser = function( ){
	if(this.jugadores[3].estaJugando()){
		this.mano.ds(this.jugadores[3],3);
	}

	if(!this.jugadores[3].estaJugando()){
		this.mano.resetMano();
		this.finTurnoUser();
	}
}

Partida.prototype.finTurnoUser = function( ){
		this.mano.resetMano();
		setTimeout(function(jugador,mano){
			if(jugador.estaJugando()){
				mano.turno(jugador,0);
			}
		}, 500, this.jugadores[0],this.mano);

		setTimeout(function(partida){
				partida.conteo();
		}, 600, this);
}

Partida.prototype.plantarJugador = function(id){
	this.jugadores[id].plantarse()
	this.mano.resetMano();
}

Partida.prototype.conteo = function(id){
	alert("to-do quien/es gana/n");
}
