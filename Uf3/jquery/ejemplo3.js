$(document).ready(function(){
	$("#b1").click(function(evento){
			$("#capa").slideDown(5000, function(){
				$("#capa").css({'top': 300, 'left':200});
				$("#capa").slideToggle(5000);
			});
	});
});
