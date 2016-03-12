var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var xDimensions;
var yDimensions;
crearTablero();


function crearTablero (){
	 xDimensions = 2;
  	 yDimensions = 2;
  	for (var i=0; i<xDimensions; i++) {
      for (var j=0; j<yDimensions; j++) {
			ctx.fillStyle="#C0C0C0";
			ctx.fillRect(j*0,i*0,640,640);
			ctx.strokeRect(j*0,i*0,640,640);

			ctx.fillStyle="green";
			ctx.fillRect(j*0,i*0,320,320);
			//ctx.strokeRect(j*0,i*0,320,320);

			ctx.fillStyle="yellow";
			ctx.fillRect(j*320,i*0,320,320);
			ctx.strokeRect(j*320,i*0,320,320);

			ctx.fillStyle="red";
			ctx.fillRect(j*0,i*320,320,320);
			ctx.strokeRect(j*0,i*320,320,320);

			ctx.fillStyle="blue";
			ctx.fillRect(j*320,i*320,320,320);
			ctx.strokeRect(j*320,i*320,320,320);


	  }
	}
}
