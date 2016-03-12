$(function() {
	var dragOpts = {
		cursor: "move",
		revert: true,
		revertDuration: 5000,
		//helper: "clone"
	};
	$("#myDrag").draggable(dragOpts);
}); 
