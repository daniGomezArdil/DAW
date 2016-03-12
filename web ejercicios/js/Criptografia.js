var texto_codi = prompt("Introduce texto codificado: ");
var letra=prompt("Dime la clave para descifrar :");

var i;
var aux='';
var caracter;
var z;
for (i = 0;i < texto_codi.length-1; i++){
		caracter = texto_codi.charAt(i);
		if (caracter == letra){
				aux += texto_codi.charAt(i+1);
				
		}
		else{
			//do nothing
		}
}
document.write(aux);
