function Mano() {
	this.baraja = new Baraja();
	this.id = 0;
}

Mano.prototype.resetMano = function(){
	this.id = 1;
}
Mano.prototype.turno = function(jugador,id){
	if( Object.prototype.toString.call( jugador ) === '[object Array]' ) {
    for (var i = 0; i < jugador.length; i++) {
			if (jugador[i].estaJugando()) {
				var aux = this.baraja.darCarta()
				ponerImagenes(i, this.id, (this.id == 0 && i != 3)?null:aux);
				jugador[i].pedirCarta(aux);
			}
    }
		this.id++;
  }else {
	  if (jugador.estaJugando() && !jugador.estaPlantado()){
		  while(jugador.estaJugando()){
			  var aux = this.baraja.darCarta()
			  ponerImagenes(id, this.id, (this.id == 0 && id != 1)?null:aux);
			  jugador.pedirCarta(aux);

  			if (jugador.getPuntosPrivados() === 7.5){
  				this.ganador = jugador;
  			}

  			if (jugador.getPuntosPrivados() > 7.5){
  				jugador.perder();
  			}
				this.id++;
  		}
			this.resetMano();
	  }
  }
}

Mano.prototype.cartasAuser = function(jugador,id){
		  if (jugador.estaJugando()){
			  var aux = this.baraja.darCarta()
			  ponerImagenes(id, this.id,aux);
			  jugador.pedirCarta(aux);

  			if (jugador.getPuntosPrivados() > 7.5){
  				jugador.perder();
  			}
				this.id++;
	  }
}
