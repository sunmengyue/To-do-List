//Check off Specific Todos by Clicking

$("li").click(function(){
	$(this).toggleClass("completed");
})

//Click X to Delete Todos
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //inside the fadeOut, this refferes to the li, not the span
	});
	event.stopPropagation(); //stop event from bubbling up
})
	