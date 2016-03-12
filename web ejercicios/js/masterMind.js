/* javascript ejercicio MASTERMIND 
	Daniel Gómez Ardil
*/
var palabra="JUGAR";

var aux;
var i=10;
var fin=false;
var texto_fin="";
var aux1;
var aux2;
var aux3;
var resultado="";	
	
while (fin==false){
	resultado="";
	aux=prompt("Dime una palabra de 5 letras");
	//cancelar juego.
	if (aux==null){
			fin=true;
			texto_fin="GAME OVER hasta otra";
	}
	//Tienes un intento menos.
	i--;
	if(i==0){
			fin=true;
			texto_fin="GAME OVER hasta otra";
	}
	//control si acierta palabra.
	if (aux==palabra){
			fin=true;
			texto_fin="FELICIDADES ACERTASTE";
	}
	//control tirada normal.
	if(fin==false){
			for(var j=0;j< palabra.length;j++){
				aux1=palabra.charAt(j);
				aux2=aux.charAt(j);
				if(aux1==aux2){
						resultado=resultado+"X";
				}
				else{
						aux3=palabra.indexOf(aux2);
						if(aux3==-1){
								resultado=resultado+"-";
						}
						else{
								resultado=resultado+"O";
						}
				}
			}
			var ventana;
			ventana=window.open("","_blank","height=300");
			
			ventana.document.write(resultado);
			ventana.document.write("<script>");
			ventana.document.write("setTimeout(function(){windows.close();},1500);");
			ventana.document.write("</script>");
	}
	
}
//Resultado final
alert(texto_fin);
