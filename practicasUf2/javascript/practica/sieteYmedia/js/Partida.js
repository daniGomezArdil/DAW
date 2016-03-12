function Partida(a) {
	var nombres = [ "Banca","Kevin", "Dani","Edison"];
	this.baraja = new Baraja();
	this.apuesta = a;
	this.mano = new Mano();
	this.ganador;
	this.jugadores = [new Jugador(nombres[0],6)];
	for (var i = 1; i < nombres.length; i++){
		this.jugadores.push(new Jugador(nombres[i],6));
		this.jugadores[i].pagar(this.apuesta);
	}
	this.jugadores[3].setLimite(7.5);
}

Partida.prototype.getNombreJugadores = function( ) {
	var nombres = [];
	for (var i = 0; i < this.jugadores.length; i++){
			nombres.push((this.jugadores[i].estaJugando()) ? this.jugadores[i].getNombre() : "Nadie");
	}
	return nombres;
};

Partida.prototype.getMonedasJugadores = function( ){
	var monedas = [];
	for (var i = 1; i < this.jugadores.length; i++){
		monedas.push((this.jugadores[i].estaJugando()) ? this.jugadores[i].getMonedas() : 0);
	}
	return monedas;
};

Partida.prototype.repartirPrimerasCartas = function () {
		this.mano.turno(this.jugadores)

		setTimeout(function(jugador,mano){
			if(jugador.estaJugando()){
				mano.turno(jugador,1);
			}
		}, 300, this.jugadores[1],this.mano);

		setTimeout(function(jugador,mano){
			if(jugador.estaJugando()){
				mano.turno(jugador,2);
			}
		}, 400, this.jugadores[2],this.mano);
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
		this.mano.cartasAuser(this.jugadores[3],3);
	}

	if(!this.jugadores[3].estaJugando()){
		this.mano.resetMano();
		this.finTurnoUser();
	}
}

Partida.prototype.finTurnoUser = function( ){
		this.mano.resetMano();
		btnPedir.disabled = true;
		btnPlantar.disabled = true;
		btnNueva.disabled = false;
		btnContinuar.disabled = false;
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

Partida.prototype.conteo = function(){
	var noGanador = 0;
	this.mostrarCartasJugadores();
	for (var i = this.jugadores.length-1; i > 0 ; i--) {
		if (this.jugadores[i].estaPlantado()) {
			if (this.jugadores[0].sePaso() ) {
				this.ganador = new Jugador("aux");
			}else {
				this.ganador = this.jugadores[0];
			}
			if (this.jugadores[i].getPuntosPrivados() > this.ganador.getPuntosPrivados()) {
				this.ganador = this.jugadores[i];
				alert(this.ganador.getNombre()+" Ha ganado!!");
				if(this.ganador.getPuntosPrivados() === 7.5){
					this.ganador.cobrar(this.apuesta*3);
				}else{
					this.ganador.cobrar(this.apuesta*2);
				}
			}else{
				noGanador ++;
			}
		}else{
			noGanador ++;
		}

		if (noGanador == 3) {
			alert("Gana la Banca");
		}
		this.jugadores[i].volver();
	}
	this.jugadores[0].volver();
	canvas.width = canvas.width;
	ponerNombres(this.getNombreJugadores(),this.getMonedasJugadores());
	if (this.jugadores[3].getMonedas() - this.apuesta < 0) {
		finDeJuego();
	}
}

Partida.prototype.continuar = function(){
	for (var i = 1; i < this.jugadores.length; i++) {
		this.jugadores[i].pagar(this.apuesta);
	}
	canvas.width = canvas.width;
	ponerNombres(this.getNombreJugadores(),this.getMonedasJugadores());
	this.mano = new Mano();
	this.repartirPrimerasCartas();
}

Partida.prototype.mostrarCartasJugadores = function(id){
	for (var i = 0; i < this.jugadores.length; i++) {
		var cartasJugador = this.jugadores[i].getCartas();
		for (var j = 0; j < cartasJugador.length; j++) {
			ponerImagenes(i,j,cartasJugador[j])
		}
	}
}
