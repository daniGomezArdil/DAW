
var texto=prompt("Dime una frase");

// 1. PONER TEXTO EN MAYUSCULAS
document.write("En mayusculas:" + texto.toUpperCase()+"<br />");
// 2. PONER TEXTO EN MINUSCULAS
document.write("En minusculas:" + texto.toLowerCase()+"<br />");
// 3. LONGITUD DEL TEXTO
document.write("Longitud:" + texto.length +" caracteres <br />");
// 4. CONTAR PALABRAS
var num_palabras;
if (texto.length==0){
		num_palabras=0;
} 
else {
	num_palabras=(texto.charAt(0)==' ')?0:1;
	var i;
	for (i=0;i<texto.length-1;i++){
		if (texto.charAt(i)==' ') {
			//Si en la posicion actual hay un ' ' 
			//miramos que hay en la siguiente posicion
			//Si tambien es un espacio en blanco--> ?
			//Si es un caracter cualquiera --> ?
			if (texto.charAt(i+1)!=' '){
				num_palabras++;
			}
		}
	}
}
document.write("Palabras: " + num_palabras + "<br />");
//5. CONTAR VOCALES

var num_vocales = 0;
var aux;
var texto_aux = texto.toLowerCase();
for (i = 0;i < texto.length;i++){
	aux = texto.charAt(i);
	if ((aux=='a') || (aux=='e') || (aux=='i') || (aux== 'o') || (aux=='u')){
			num_vocales++;
	}
}

document.write("Vocales: " + num_vocales + "<br />");

//6. DECREMENTAR CARACTERES
var letras = 0;
var i;
for (i = 0;i < texto.length;i++){
	document.write(texto.substr(i) + "<br />");
}
