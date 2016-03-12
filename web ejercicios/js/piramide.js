// ejercicio 13
var base ;

base = prompt("Introduce la base de la piramide");

while (base %2==0){
		base = prompt("Introduce la base de la piramide");
}
var pinto = 1;
var dejo = base - pinto;
var i;
var j;
var filas =(base/2)+0.5;
document.write("<table>");
for (i=1;i<=filas;i++){
		document.write("<tr>");
		//casillas blancas a la izquierda
		for(j=1;j<=dejo/2;j++){
			document.write("<td></td>");
		}
		//casillas pintadas
		for(j=1;j<=pinto;j++){
			document.write("<td class='rojo'></td>");	
		}	
		//casillas blancas a la derecha
		for(j=1;j<=dejo/2;j++){
			document.write("<td></td>");	
		}
		document.write("</tr>");
		pinto=pinto+2;
		dejo=base - pinto;
	
}
document.write("</table>");
/*do{
	
	
	
}while (base %2==0)
var filas = prompt("Dime el numero de filas");

var columnas = prompt("Dime el numero de columnas");

var i , j;

document.write("<table border='1'>");

for (i=0; i<columnas ;i++){
	document.write("<tr>");
		for (j=0; j<(i+3); j++){
			if(i%2==0){
				    var	clase =(j%2==0)?"rojo":"azul";
			 }else{ 
					 var clase =(j%2!=0)?"rojo":"azul";
				  }	
					document.write('<td class=',clase,'>',i+1,'.',j+1,'</td>');
		
		}
		document.write("</tr>");
}
document.write("</table>");*/
