function Baraja(){
	this.taco =[];
	for (var i = 0; i < 4; i++){
		for (var j = 1; j <= 12; j++){
			if(j == 8 || j == 9){
				continue;
			}
			this.taco.push(new Carta(i, j));
		}
	}
}

Baraja.prototype.darCarta = function(){
	var pos = Math.floor(Math.random() * this.taco.length);
	var aux = this.taco[pos];
	this.taco.splice(pos, 1);
	return aux;
};

Baraja.prototype.cuantasCartasQuedan = function(){
	return this.taco.length;
};
