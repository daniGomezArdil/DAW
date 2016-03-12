/* Demanar a l’usuari un número i mostrar per pantalla la taula de multiplicar
d’aquest número en format (1 x Numero = Resultat...). No cal utilitzar taules
HTML per a la presentació de la solució. */


var i=0;
var num = prompt("Introduce un numero entero");
var result = 0;
for (i=1;i<=10;i++){
		result = i * num;
		document.write(i + "x" + num + "=" + result + "<br>");
}
