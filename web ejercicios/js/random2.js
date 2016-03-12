var numero=Math.floor(Math.random()*100)+1 ;
var partJug;
if (localStorage.num_partida){
		partJug=parseInt(localStorage.num_partida)+1;
		localStorage.num_partida=partJug;
}else{
		localStorage.num_partida=1;
}

if (localStorage.num_intentos){
		intentos=parseInt(localStorage.num_intentos)+intentos;
		localStorage.num_intentos=intentos;
}else{
		localStorage.num_intentos=1;
}
var x;
var intentos=0;
var texto;
var ttotal;
var tparcial;
var jugando=true;
var y=prompt("Que dificultad quieres en el juego: 1.baja, 2.media, 3.alta")*1;
switch (y){
		case 1:
				ttotal = setTimeout(function() {
                    alert("Time over");
                    jugando=false;
                }, 30000);
				tparcial=setInterval(function() {
						if(jugando===true){
								x=prompt("DIme un numero entre 1 y 100")*1;
								intentos++;
								texto=(x<numero)?"Es mayor el numero":"";
								texto=(x>numero)?"Es menor el numero":texto;
							if(x==numero){
								document.write("Felicidades. Has acertado el numero: "+ numero );
								document.write("Partidas jugadas : "+ partJug);
								document.write("nuemro de intentos : "+ intentos);
								clearInterval(tparcial);
								clearTimeout(ttotal);
							}else{
								document.write(texto + "<br />");
							}
						}else{
							clearInterval(tparcial);
							clearTimeout(ttotal);
						}
				}, 3000);
				break;
		 case 2:
				ttotal = setTimeout(function() {
                    alert("Time over");
                    jugando=false;
                }, 20000);
				tparcial=setInterval(function() {
						if(jugando===true){
								x=prompt("DIme un numero entre 1 y 100")*1;
								intentos++;
								texto=(x<numero)?"Es mayor el numero":"";
								texto=(x>numero)?"Es menor el numero":texto;
							if(x==numero){
								document.write("Felicidades. Has acertado el numero "+ numero );
								document.write("Partidas jugadas : "+ partJug);
								document.write("nuemro de intentos : "+ intentos);
								clearInterval(tparcial);
								clearTimeout(ttotal);
							}else{
								document.write(texto + "<br />");
							}
						}else{
							clearInterval(tparcial);
							clearTimeout(ttotal);
						}
				}, 2000);
				break;
			case 3:
					ttotal = setTimeout(function() {
                    alert("Time over");
                    jugando=false;
                }, 10000);
				tparcial=setInterval(function() {
						if(jugando===true){
								x=prompt("DIme un numero entre 1 y 100")*1;
								intentos++;
								texto=(x<numero)?"Es mayor el numero":"";
								texto=(x>numero)?"Es menor el numero":texto;
							if(x==numero){
								document.write("Felicidades. Has acertado el numero "+ numero );
								document.write(" Partidas jugadas : "+ partJug);
								document.write(" numero de intentos : "+ intentos);
								clearInterval(tparcial);
								clearTimeout(ttotal);
							}else{
								document.write(texto + "<br />");
								
							}
						}else{
							clearInterval(tparcial);
							clearTimeout(ttotal);
						}
				}, 1000);
				break;
		
				default: alert("numero no correcto");

}




