$(function(){
    $("#myTabs").tabs();
    $("#toke").dialog();
});

$(function(){
	$("#myDialog").dialog({autoOpen:false, modal: false ,buttons:{"dale":aceptar,"anular":cancelar}});
});

function muestra(){
  if(!$("#myDialog").dialog("isOpen")) {
     $("#myDialog").dialog("open");
  }
}

function aceptar(){
	var answer = $("#respuesta").val();
	 alert(answer);
	 $("#myDialog").dialog("close");

}

function cancelar(){
	alert("ko");
	 $("#myDialog").dialog("close");
}

var dialogOpts = {
		buttons: {
		"dale": aceptar,
		"anular": cancelar
		}
};
	$("#myDialog").dialog(dialogOpts);

$(function(){
	sliderOpts = {
		value: 5,
		min: 0,
		max: 25,
		change: function(event, ui) {
			var x = $(this).slider("value");
			$("#valor").html(x);
		}
	};
	$("#mySlider").slider(sliderOpts);
});
