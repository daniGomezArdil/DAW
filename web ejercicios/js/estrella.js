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
var dejo = 2;
var pinto = base - dejo;
for (i=1;i<=filas-1;i++){
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
		dejo +=2;
		pinto= base - dejo;;
	
}
document.write("</table>");
