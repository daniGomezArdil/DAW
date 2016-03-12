// ejercicio 11

var fila = prompt("Dime el numero de filas");

var columna = prompt("Dime el numero de columnas");

var i , j;

document.write("<table border=1>");

for (i=1;i<=fila;i++){
	document.write("<tr>");
		for (j=1;j<=columna;j++){
			/*if(i%2==0){
				document.write('<td class="rojo">'+i+'.'+j+'</td>');
			}else{
				document.write('<td class="azul">'+i+'.'+j+'</td>');	
			}*/
		var	clase =(i%2==0)? "rojo":"azul";
		document.write('<td class=',clase,'>'+i+'.'+j+'</td>');
		
		}
		document.write("</tr>");
}
document.write("</table>");
