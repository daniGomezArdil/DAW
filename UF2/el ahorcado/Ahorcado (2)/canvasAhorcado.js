var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function palo(){
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(50,300);
	ctx.lineTo(50,30);
	ctx.lineTo(150,30);
	ctx.lineTo(150,70);
	ctx.stroke();
}

function cabeza(){
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.arc(150,100,30,0,2*Math.PI);
	ctx.stroke();
}

function tronco(){
	ctx.lineWidth = 3;				
	ctx.beginPath();	
	ctx.moveTo(150,130);
	ctx.lineTo(150,210);
	ctx.stroke();	
}

function brazoIz(){
	ctx.lineWidth = 3;				
	ctx.beginPath();	
	ctx.moveTo(150,160);
	ctx.lineTo(110,110);
	ctx.stroke();	
}

function brazoDer(){
	ctx.lineWidth = 3;				
	ctx.beginPath();	
	ctx.moveTo(150,160);
	ctx.lineTo(190,110);
	ctx.stroke();	
}

function piernaIz(){
	ctx.lineWidth = 3;				
	ctx.beginPath();	
	ctx.moveTo(150,210);
	ctx.lineTo(110,260);
	ctx.stroke();	
}

function piernaDer(){
	ctx.lineWidth = 3;				
	ctx.beginPath();	
	ctx.moveTo(150,210);
	ctx.lineTo(190,260);
	ctx.stroke();	
}

function muerto(){
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(140,90);
	ctx.lineTo(135,85);
	ctx.lineTo(145,95);
	ctx.lineTo(140,90);
	ctx.lineTo(135,95);
	ctx.lineTo(145,85);
	ctx.moveTo(160,90);
	ctx.lineTo(155,85);
	ctx.lineTo(165,95);
	ctx.lineTo(160,90);
	ctx.lineTo(155,95);
	ctx.lineTo(165,85);
	ctx.moveTo(140,110);
	ctx.lineTo(160,110);
	ctx.stroke();		
}
