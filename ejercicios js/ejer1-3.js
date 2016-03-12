var hora = prompt("Introduce la hora")*1;

var min = prompt("Introduce los minutos")*1;

var seg = prompt("Introduce los segundos")*1;

if(hora < 0 || hora > 23 || isNaN(hora)){
		var resul = "Mala introduccion de las horas (0 a 23)";
}else{
		if(min < 0 || min > 59 || isNaN(min)){
			var resul = "Mala introduccion de los minutos (0 a 59)";
		}else{
				if(seg < 0 || seg > 59 || isNaN(seg)){
						var resul= "Mala introduccion de los segundos (0 a 59)";
				}else{
						seg += 1;
						if (seg >= 60){
								seg = "00";
								min += 1;
						}
						if (min >= 60){
								min = "00";
								hora += 1;
						}
	
						if (hora >= 24){
								hora = "00";
						}

						var resul =("<h1>"+hora +":" +min+ ":" + seg +"</h1>");

				}
	
	
		}

 
} document.write(resul);

/*var hora = prompt("Dime la hora")*1;
var minuto = prompt("Dime los minutos")*1;
var segundo = prompt("Dime los segundos")*1;

segundo +=1;
/*if (segundo>=60){
	segundo="00";
	minuto+=1;
}
if (minuto>=60){
	minuto=0;
	hora+=1;
}
if (hora>=24){
	hora=0;
}
*/

/*  SEGUNDA APROXIMACION   */
/*
segundo= (segundo>=60)?"00":segundo;
minuto=(segundo=="00")?minuto+1:minuto;
minuto=(minuto>=60)?"00":minuto;
hora=(minuto=="00")?hora+1:hora;
hora=(hora>=24)?"00":hora;


segundo= (segundo>=60)?"00":segundo;
minuto=(segundo=="00")?((minuto+1>=60)?"00":minuto+1):minuto;
hora=(minuto=="00")?hora+1:hora;
hora=(hora>=24)?"00":hora;
alert(hora + ":"+minuto+":"+segundo);*/

