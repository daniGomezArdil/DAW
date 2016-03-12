var codigo = prompt("Ingresa un codigo : ");

document.write(codigo + " <br />");
if (codigo.length < 8) {
	do{
		codigo = '0' + codigo;
	}while(codigo.length != 8);
	document.write(codigo + " Es un numero EAN-8  " + "<br />");
	var codigo8 = codigo.substr(0,7);
	var exten = codigo.substr(7);
	// codigo.charAt(7);
	// codigo.substring(7);
	document.write(codigo8 + "<br />");
	document.write(exten);
}else {
    if ((codigo.length > 8)&&(codigo.length < 13)) {
		while(codigo.length != 13){
			codigo = '0' + codigo;
		}
		document.write(codigo + " Es un numero EAN-13  " + "<br />");
        var codigo13 = codigo.substr(0,12);
        var exten1 = codigo.substr(12);
        document.write(codigo13 + "<br />");
        document.write(exten1);
    }
}
var cont = 1;
var sum = 0;
for (i=codigo8.length;i>=0;i--){
		if(cont%2==0){
			sum += codigo8.charAt(i)*1;
		}
}
