var numero=Math.floor(Math.random()*100)+1 ;
var x;
var intentos=0;
var texto;

while ((x != numero)||(x == 0)){

	x=prompt("DIme un numero entre 1 y 100")*1;
	intentos++;
	texto=(x<numero)?"Es mayor el numero":"";
	texto=(x>numero)?"Es menor el numero":"";
	alert(texto);
}
alert("Felicidades. Has acertado el numero "+ numero +" en "+ intentos+" realizados ");


