var numero=Math.floor(Math.random()*100)+1 ;
var x;
var intentos=0;
var texto;
var ttotal;
var tparcial;
var jugando=true;

ttotal = setTimeout(function() {
                    alert("Time over");
                    jugando=false;
                    }, 30000);
var tparcial=setInterval(function() {
	    if(jugando===true){
          x=prompt("DIme un numero entre 1 y 100")*1;
          intentos++;
	      texto=(x<numero)?"Es mayor el numero":"";
	      texto=(x>numero)?"Es menor el numero":texto;
	      if(x==numero){
			  document.write("Felicidades. Has acertado el numero "+ numero +" en "+ intentos+" realizados ");
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


