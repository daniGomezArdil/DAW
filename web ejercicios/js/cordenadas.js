var punto1=prompt("Dime las coordenadas del punto 1");
var punto2=prompt("Dime las coordenadas del punto 2");

var punto1x=punto1.charAt(0);
var punto1y=punto1.charAt(2);
var punto2x=punto2.charAt(0);
var punto2y=punto2.charAt(2);

var i=0;
var j=0;
document.write("<table>");
for (i=50;i>=-50;i--){
	document.write("<tr>");
	for (j=-50;j<=50;j++){
		if (((i==punto1y*10) && (j==punto1x*10))||((i==punto2y*10) && (j==punto2x*10))){
			document.write("<td bgcolor='red'></td>");	
		}
		else {
			if ((i==0) || (j==0)){
				document.write("<td bgcolor='black'></td>");	
			}
			else{
				document.write("<td></td>");
			}
		}
		
	}
	document.write("</tr>");
}
document.write("</table>");
