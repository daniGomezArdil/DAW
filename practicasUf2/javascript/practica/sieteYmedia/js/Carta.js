/*
	Clase Carta
*/
function Carta(t,n) {
	var tipos = ["Copas","Bastos","Oros","Espadas"];
	this.tipo = tipos[t];
	this.numero = n;
}

Carta.prototype.getNumero = function() {
	return (this.numero > 7)?0.5:this.numero;
};

Carta.prototype.getRuta = function() {
	return "img/"+this.tipo+"/"+this.numero+".png";
};
