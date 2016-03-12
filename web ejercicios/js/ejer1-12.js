// ejercicio 12

var filas = prompt("Dime el numero de filas");

var columnas = prompt("Dime el numero de columnas");

var i , j;

document.write("<table border='1'>");

for (i=0; i<columnas ;i++){
	document.write("<tr>");
		for (j=0; j<filas; j++){
			/*if(i%2==0){
				    var	clase =(j%2==0)?"rojo":"azul";
			 }else{ 
					 var clase =(j%2!=0)?"rojo":"azul";
				  }	*/
			var clase = (i%2==0) ? ((j%2==0)?"rojo":"azul"):((j%2==0)?"azul":"rojo");
					document.write('<td class=',clase,'>',i+1,'.',j+1,'</td>');
		
		}
		document.write("</tr>");
}
document.write("</table>");
