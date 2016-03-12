$(document).ready(function(){
	$("a").attr("href","http://facebook.com");
	$("#midiv").css("color","blue");
	$("#midiv").css("backgroundColor","green");
	$("#myBoton").click(press);
	
});
 function press(){
	
	if($("#myBoton").val()=="prueba"){
		$("#myBoton").val("pulsaste el boton");
	}else{
		$("#myBoton").val("prueba");
	}
}

$(document).ready(function(){
	$("#b1").click(function(evento){
		$('#lapa').css('display','none');
		
	});
	$("#b2").click(function(evento){
		$('#lapa').css('display','block');
		
	});
});
