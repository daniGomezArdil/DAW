var codigo = prompt("Ingresa un codigo : ");

var control = codigo.codigo.substr(7)*1;
//var control = codigo.substring(7);
//var control = codigo.charAt(7);
console.log("Control :" + control);

var suma = 0;
var i;
for (i = codigo.length-2;i>=0;i--){
// suma+=((i%2)==0)? (codigo.charAt(i)*3):(codigo.charAt(i)*1);
	if (i%2==0){
		suma+=(codigo.charAt(i)*3);
	}else{
		suma+=(codigo.charAt(i)*1);
	}
}
//opcion A
/*
var siguiente = 0;
for (i=0;i<=9;i++){
		if((suma+i)%10==0){
			siguiente=suma+i;
		}
		
}
if(siguiente - suma == control){
	document.write(codigo + " es correcto");
}else{
	document.write(codigo + " NO es correcto");
}
console.log ("Suma de digitos : " + suma);
*/
//opcion B

if((suma + control)%10==0){
		document.write(codigo + " es correcto ");
}else{
		document.write(codigo + " NO es correcto ");
}
