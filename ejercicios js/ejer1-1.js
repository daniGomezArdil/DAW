var dias = prompt("Introduce un número de dias");

var meses=0;
var any=0;
var aux;
while(dias>=365){
	dias=dias-365;
	any++;
	}
while(dias>=30){
	dias=dias-30;
	meses++;
	}
	
alert("los años son:"+any+"\n los meses son:"+meses+"\n y los dias:"+dias);


 

