var importe=prompt("Dime el precio") *1;
var cantidad=prompt("Dime la cantidad de dinero entregada") *1;
var cuantos;
var cambio;
cambio=cantidad - importe;
var moneda;
var aux1=500;
var aux2=200;
var aux3=100;
moneda=aux1;

do {
//  INICIO BUCLE
		cuantos=0;
		while (cambio>=moneda) {
			cuantos++;
			cambio = cambio - moneda;
			cambio = cambio.toFixed(2);
			console.log("Acumulados " + cuantos + " de " + moneda +" queda pendiente "+ cambio);
		}
		document.write (cuantos + " de " + moneda + " euro <br>");
		cuantos =0;
	if (moneda==aux1){
		moneda=aux2;
	}
	else {
		if (moneda==aux2){
			moneda=aux3;
		}
		else {
			aux1=aux1/10;
			aux2=aux2/10;
			aux3=aux3/10;
			moneda=aux1;
		}
	}
	
//  FIN BUCLE

} while (moneda>=0.01);
