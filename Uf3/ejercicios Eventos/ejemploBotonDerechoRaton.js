window.onload= function(event){
	 var div = document.getElementById("meDiv");
	 div.oncontextmenu= function(event){
		 event = event || window.event;
		 event.preventDefault();
		 var menu = document.getElementById("myMenu");
		 menu.style.left = event.clientX + "px";
		 menu.style.top = event.clientY + "px";
		 menu.style.visibility = "visible";
	 };
	 document.onclick= function(event){
		 document.getElementById("myMenu").style.visibility = "hidden";
	 };
	
};
window.onbeforeunload = function() {
		return 'No has validado la compra. ¿Estás seguro de querer salir?';
};
