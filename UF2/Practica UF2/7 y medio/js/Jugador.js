function Jugador (nom,limite,monedas) {
  this.nombre = nom
  this.puntosPrivados = 0
	this.puntosPublicos = 0
  this.plantado = false
  this.monedas = (monedas) ? monedas : 100
  this.jugando = true
	this.limite = limite
}

Jugador.prototype.getNombre = function () {
  return this.nombre
}

Jugador.prototype.getPuntosPublicos = function () {
  return this.puntosPublicos
}

Jugador.prototype.getPuntosPrivados = function () {
  return this.puntosPrivados
}

Jugador.prototype.getMonedas = function () {
  return this.monedas
}

Jugador.prototype.cobrar = function (cantidad) {
  this.monedas += cantidad
}

Jugador.prototype.pagar = function (cantidad) {
  if (this.monedas < cantidad) {
    this.jugando = false
  } else {
    this.monedas -= cantidad
  }
}

Jugador.prototype.pedirCarta = function (carta) {
		this.puntosPublicos += (this.puntosPrivados === 0)?0:carta.getNumero();
		this.puntosPrivados += carta.getNumero()
		if (this.puntosPrivados >= this.limite) {
			this.plantarse()
		}
}

Jugador.prototype.plantarse = function () {
	this.plantado = true
	console.log("paso "+this.nombre)
}

Jugador.prototype.perder = function () {
	this.jugando = false
}

Jugador.prototype.volver = function () {
	this.jugando = true
	this.puntosPublicos = 0
	this.puntosPrivados = 0
	this.plantado = false
}

Jugador.prototype.estaJugando = function () {
	return this.jugando && this.plantado === false
}

Jugador.prototype.estaPlantado = function () {
	return this.jugando === true && this.plantado === true
}

Jugador.prototype.sePaso = function () {
	return this.puntosPrivados > 7.5
}

/**************************************************************************************/
function Banca () {
}
Banca.prototype = new Jugador("Banca",0,0);
Banca.prototype.construct = Banca;
Banca.prototype.setLimite = function (limite) {

	/// pillar el maximo de los otros jugadores y sumarle 7.5 y dividir entre 2
	this.limite = limite
}
