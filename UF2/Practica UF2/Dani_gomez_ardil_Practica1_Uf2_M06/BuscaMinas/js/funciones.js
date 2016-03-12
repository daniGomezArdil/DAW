var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var xDimensions;
var yDimensions;
var boton;
var tablero;
var tablero2;
var mina;
var posMinas;
crearTablero();
tablero=inicializarTablero(8);
tablero2=inicializarTablero(8);
crearBotonesTablero();
crearPosicionMinas();
ordenarPosicionMinas();
colocarMinas();
rellenoTotalTable2();
//explota();

// tablero canvas
function crearTablero (){
	 xDimensions = 8;
  	 yDimensions = 8;
  	for (var i=0; i<xDimensions; i++) {
      for (var j=0; j<yDimensions; j++) {
			ctx.fillStyle="#C0C0C0";
			ctx.fillRect(j*80,i*80,80,80);
			ctx.strokeRect(j*80,i*80,80,80);

	  }
	}
}

function inicializarTablero(num){
	var tabler=new Array(num);
	for (var i = 0; i<tabler.length ; i++){
			tabler[i]=new Array(num);

	}
	return tabler;
}

function crearBotonesTablero(){
	var valor =0;
	document.write("<br />");
	for (var i = 0; i < tablero.length; i++){
		for (var j = 0; j < tablero.length; j++){
			tablero[i][j]= valor;
			document.write('<input id='+valor+' style="width:80px; height:80px;" type="button" onclick="button('+i+','+j+')" value="'+valor+'">');
			valor++;
		}
		document.write("<br />");
	}

}

function button(x, y){
	if (tablero2[x][y]==-1){
		rojo(x,y);
		finJuego();
		explota();
		for (var i = 0; i <64 ; i++){
			document.getElementById(i).disabled=true;
		}
	}else{
		if (tablero2[x][y] != 0) {
			descubrirUnaCasillas(x,y);
		} else {
			descubrirCasillas(x,y);
		}
	}

	if (contar() == 54){
		alert("ganaste");
	}
}

function explota(){

	for (var i = 0; i < tablero.length; i++){
		for (var j = 0; j < tablero.length; j++){
			if(tablero2[i][j]==-1){
				rojo(i,j);
			}

		}

	}

}

function rojo(x,y){
	ctx.fillStyle="red";
	ctx.fillRect((y*80)+1,(x*80)+1,78,78);
}
function crearPosicionMinas(){
		 posMinas= new Array();
		 var contMina = 0;
		 var contPos = 0;
  	 while(contMina  < 9){
			var ale=Math.floor((Math.random() * 64) );
			if(posMinas.length==0){
				 posMinas.unshift(ale);
			}else{
				 if(!existeNum(posMinas, ale)){
					posMinas.push(ale);
					contMina++;
				 }
			}

	}
}
function ordenarPosicionMinas(){
	posMinas.sort(function(a, b){return a-b});
	for (var g = 0; g < posMinas.length; g++){
		console.log(posMinas[g]+ "pmina");
	}
}

function colocarMinas(){
	var contMina=0;
	var contPos=0;
	for(var i=0;i < tablero2.length; i++){
			for(var j=0;j < tablero2.length; j++){
					if(contPos==posMinas[contMina]){
						tablero2[i][j]=-1;
						contMina++;
					}
					contPos++;
			}
	}
}

function existeNum(nums, num){
		for (var n = 0; n < nums.length; n++){
			if(nums[n]==num){
				return true;
			}
		}
		return false;
}

function finJuego(){
		alert("GAME OVER");
}

function colocarNumMinasCercanas(x,y){
		tx = x;
		ty = y;
		tablero2[tx][ty] = 0;
		x--;
		y--;
		for (var i = 0; i < 3; i++){
			for (var j = 0; j < 3; j++){
				if (x>=0 && y >=0 && x<=7 && y<=7){
					if (tablero2[x][y]==-1){
						tablero2[tx][ty]++;
					}
				}
				y++;
			}
			y-=3;
			x++;
		}
}

function rellenoTotalTable2(){
		for (var i = 0; i < tablero2.length; i++){
			for (var j = 0; j < tablero2.length; j++){
				if (tablero2[i][j]!=-1){
					colocarNumMinasCercanas(i,j);
				}
			}
		}
}

function pintarNumeros(x,y){
	ctx.font="60px cursive";
	ctx.fillStyle="blue";
	ctx.strokeStyle="red";
	ctx.strokeText(tablero2[x][y] == 0 ? ' ': tablero2[x][y],y*80,(x+1)*80);
	ctx.fillText(tablero2[x][y] == 0 ? ' ': tablero2[x][y],y*80,(x+1)*80);
}

function descubrirUnaCasillas(x,y){
		if (x>=0 && y >=0 && x<=7 && y<=7){
					console.log("pasa2");
					if ((tablero2[x][y]!=-1)||(tablero2[x][y]!=0)){
									pintarNumeros(x,y);
									console.log(x+" x  y "+y+" pos "+tablero[x][y]);
									tablero2[x][y] = "x";
							document.getElementById(tablero[x][y]).disabled=true;
					}
		}

}
function descubrirCasillas(x,y){
			x--;
			y--;
			for (var i = 0; i < 3; i++){
				for (var j = 0; j < 3; j++){
					if (x>=0 && y >=0 && x<=7 && y<=7){
						if (tablero2[x][y]!=-1 && tablero2[x][y]!= "x"){
							if(tablero2[x][y] != 0){
								descubrirUnaCasillas(x,y);
							}else {
								console.log("pasa");
								pintarNumeros(x,y);
								tablero2[x][y] = "x";
								descubrirCasillas(x,y);
								document.getElementById(tablero[x][y]).disabled=true;
							}
						}
					}
					y++;
				}
				y-=3;
				x++;
			}
}

function contar(){
	var cont=0;
	for (var i = 0; i < tablero2.length; i++) {
			for (var j = 0; j < tablero2.length; j++) {
				if (tablero2[i][j] === "x"){
					cont++;
				}
			}
	}

	return cont;
}
