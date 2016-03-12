//muestra todas las letras en botones 
//recorremos todas las letras por su codigo
//cuando el usuario seleccione una letra llamamos a un funcion para empezar a jugar
function mostrarOpciones(){
    for (var i=65;i<91;i++){
        opcion=String.fromCharCode(i);
        document.write('<input id='+i+' type="button" onclick="probButton('+i+')" value="'+opcion+'">');
    }
}

// funcion que se llama cuando el usuario apreta el boton de una letra
// recive el codigo de la letra i la funcion la trandorma en latra minuscula 
//llama a las funciones para comprovar si la letra ha sido seleccionada
// llama a la funcion jugar que hace las comprovaciones
function probButton(num){
    opcionLetra=String.fromCharCode(num);  
    if(! letraAnterior(opcionLetra)){

        nuevaLetra(opcionLetra);
        jugar(opcionLetra);

    } else {
        alert("Ya has seleccionado esa letra");
    }
}


// comprueba si la letra ha sido seleccionada
function letraAnterior(nuevaLetra){
    for(i=0;i<letrasSeleccionadas.length;i++){
        if(nuevaLetra==letrasSeleccionadas[i])
            return true;
    }   
    return false;
}

//guarda las letras seleccionadas en la ultima procicion de un array
function nuevaLetra(nuevaLetra){
    letrasSeleccionadas.push(nuevaLetra);
    console.log(letrasSeleccionadas); 
}

// comprueba si podemos seguir jugando
//llama a las funciones para comprovar si la letra es correcta
//si es correcta  la pinta
//si es incorrecta suma los fallos y pinta una parte dl ahorcado
function jugar(opcionLetra){
    if( seguirJugando ) { 

        letra=opcionLetra;


        if ( probarLetra() ){
            palabraOculta= insertarLetra();
            pintarLetra();

        } else {
            fallos++;
            pintarAhorcado();
        }
        comprovarSiAcaba();

    } 


}
//comprorbamos si el usuario ha acertado la palabra 
// o ha superado el numero de fallos
function comprovarSiAcaba(){

    if(palabraOculta==palabra){
        alert("FELICIDADES!! ");
        seguirJugando=false;
    }

    if(fallos>10){
        alert("GAME OVER");
        seguirJugando=false;
    }
}


//seleccionamos una palabra
function palabraRandom(){
    var num =( Math.floor(Math.random() * 5) );
    return arrayNombre[num];

}
//comprobamos si la letra esta en la palabra
function probarLetra(){
    var aux= palabra.indexOf(letra);
    if (aux != -1){
        return true;
    }
}

//creamos una palabra con la misma contidad de * segun letras tenga la palabra
function ocultarPalabra(palabra){
    var txt="";
    for(var i=0;i<palabra.length;i++){
        txt=txt+"*";
    }
    return txt;

}


//modificamos la palabra oculta
function insertarLetra(){
    for(var i=0;i<palabra.length;i++){
        if(letra==palabra.charAt(i)){
            palabraOculta=palabraOculta.substring(0,i)+letra+palabraOculta.substring(i+1);
        }
    }
    return palabraOculta;		
}


//pinta los espacios donde colocaremos la palabra
function pintarEspacios(){
    x=200;
    y=600;
    for(var i=0;i<palabra.length;i++){
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+10,y);
        ctx.stroke();
        x+=20;
    }

}


//pinta las letras corretas
function pintarLetra(posLetra){
    x=200;//+(20*posLetra);
    y=600;
    ctx.fillStyle="red";
    ctx.font="20px Verdana";

    for(var i=0;i<palabra.length;i++){
        if(palabra.charAt(i)==letra){
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.fillText(letra,x,y);
            ctx.stroke();
        }
        x+=20;
    }
}

//pinta el ahorcado segun la cantidad de fallos que tanga
function pintarAhorcado(){

    if(fallos==1) {
        //colgador 1
        ctx.beginPath();
        ctx.moveTo(100,50) ;
        ctx.lineTo(100,550) ;
        ctx.stroke();
        ctx.fill();
    }
    if (fallos==2){   
        //colgador 2
        ctx.moveTo(100,50) ;
        ctx.lineTo(400,50) ;
        ctx.stroke();
        ctx.fill();
    }
    if (fallos==3){   
        //colgador 3
        ctx.beginPath();
        ctx.moveTo(400,50) ;
        ctx.lineTo(400,200) ;
        ctx.stroke();
        ctx.fill();
    }   

    if (fallos==4){   

        //cara
        ctx.beginPath();
        ctx.arc(400,250,30,0,2*Math.PI);
        ctx.fillStyle="#FFE4B5";
        ctx.fill();
    }

    if (fallos==11){   
        //sonrisa
        ctx.beginPath();
        ctx.strokeStyle="#C00";
        ctx.lineWidth=3;
        ctx.arc(400,270,15,Math.PI*1, 0);
        ctx.stroke();
    }

    if (fallos==10){   
        //ojo
        ctx.beginPath();
        ctx.arc(390,240,5,0,2*Math.PI);
        ctx.fillStyle="red";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(410,240,5,0,2*Math.PI);
        ctx.fillStyle="red";
        ctx.fill();
    }

    if (fallos==5){   
        //cuerpo
        ctx.beginPath();
        ctx.moveTo(400,300) ;
        ctx.lineTo(400,450) ;
        ctx.stroke();
        ctx.fill();

    }

    if (fallos==6){   
        //brazo izquierdo 
        ctx.beginPath();
        ctx.moveTo(400,350) ;
        ctx.lineTo(450,250) ;
        ctx.stroke();
        ctx.fill();
    }

    if (fallos==7){        //brazo derecho
        ctx.beginPath();
        ctx.moveTo(400,350) ;
        ctx.lineTo(350,250) ;
        ctx.stroke();
        ctx.fill();
    }

    if (fallos==8){   
        //pierna izquierda
        ctx.beginPath();
        ctx.moveTo(400,450) ;
        ctx.lineTo(350,550) ;
        ctx.stroke();
        ctx.fill();
    }
    if (fallos==9){     //pierna derecha 
        ctx.beginPath();
        ctx.moveTo(400,450) ;
        ctx.lineTo(450,550) ;
        ctx.stroke();
        ctx.fill();
    }
}

