document.ontouchstart= handleTouchEvent;
document.ontouchend= handleTouchEvent;
document.ontouchmove= handleTouchEvent;
function handleTouchEvent(event){
	if (event.touches.length == 1) {
	var output = document.getElementById("myDiv");
		switch(event.type){
		case "touchstart":
		output.innerHTML = "Touch started (" + event.touches[0].clientX + "," +
		event.touches[0].clientY + ")";
		break;
		case "touchend":
		output.innerHTML += "<br>Touch ended (" + event.changedTouches[0].clientX +
		"," + event.changedTouches[0].clientY + ")";
		break;
		case "touchmove":
		event.preventDefault(); //prevent scrolling
		output.innerHTML += "<br>Touch moved (" + event.changedTouches[0].clientX +
		"," + event.changedTouches[0].clientY + ")";
		break;
		}
	}
}
