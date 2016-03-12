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
			var aux = this.baraja.darCarta()
			ponerImagenes(i, this.id, (this.id == 0 && i != 3)?null:aux);
			jugador[i].pedirCarta(aux);
			console.log(jugador[i].getNombre()+" "+jugador[i].getPuntosPrivados());
    }
		this.id++;
  }else {
	  if (jugador.estaJugando() && !jugador.estaPlantado()){
		  while(jugador.estaJugando()){
			  var aux = this.baraja.darCarta()
			  ponerImagenes(id, this.id, (this.id == 0 && id != 1)?null:aux);
			  jugador.pedirCarta(aux);
			  console.log(jugador.getNombre()+" "+jugador.getPuntosPrivados());

  			if (jugador.getPuntosPrivados() === 7.5){
  				this.ganador = jugador;
  			}
				/*if (id != 0) {
					if (jugador.getPuntosPrivados() <= 7.5 && jugador.getPuntosPrivados() >= 6){
						jugador.plantarse();
					}
				}else {
					if (jugador.getPuntosPrivados() <= 7.5 && jugador.getPuntosPrivados() >= 9){
						jugador.plantarse();
					}
				}*/

  			if (jugador.getPuntosPrivados() > 7.5){
  				this.fueraDeRonda ++;
  				console.log("Saco de juego a "+jugador.getNombre());
  				jugador.perder();
  			}
				this.id++;
  		}
			this.resetMano();
		//console.log("M "+this.mano+" r = "+this.ronda);
	  }
  }
}

Mano.prototype.ds = function(jugador,id){
		  if (jugador.estaJugando()){
			  var aux = this.baraja.darCarta()
			  ponerImagenes(id, this.id, (this.id == 0 && id != 1)?null:aux);
			  jugador.pedirCarta(aux);
			  console.log(jugador.getNombre()+" "+jugador.getPuntosPrivados());

  			if (jugador.getPuntosPrivados() === 7.5){
					alert("gane");
  			}

  			if (jugador.getPuntosPrivados() > 7.5){
  				console.log("Saco de juego a "+jugador.getNombre());
  				jugador.perder();
  			}
				this.id++;
		//console.log("M "+this.mano+" r = "+this.ronda);
	  }
}
