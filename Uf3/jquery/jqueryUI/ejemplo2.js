$(function(){
	var pickerOpts = {
		dateFormat:"dd MM yy",
		minDate: new Date(),
		maxDate:"+10y",
		changeMonth:true,
		changeYear:true,
		showOn:"button",
		buttonText:"Open Picker",
		showButtonPanel:true,
		onSelect: function(dateText, inst) {
			var fechaComoTexto=dateText;
			var fechaComoObjeto=$( "myDate" ).datepicker('getDate');
			alert(fechaComoTexto);
		}
		};
	$("#myDate").datepicker(pickerOpts);
});
