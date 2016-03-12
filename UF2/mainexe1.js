// 1.- DECLARACION DE VARIABLES GLOBALES
var frase = "";
var i;
var cuantas=0;
var espacios=0;
// 2.- CODIGO A EJECUTAR
frase = prompt("Dime una frase : ");
for (i=0;i<frase.length;i++){
	 if(esVocal(frase.charAt(i))==true){
		 cuantas++;
	}
	
	if(esEspacio(frase.charAt(i))==true){
		espacios++;
	}
	
}
document.write("Vocales :" +cuantas + "Espacios : " + espacios);
