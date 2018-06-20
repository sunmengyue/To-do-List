//Check off Specific Todos by Clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})//we change it to ul because we can only add listeners to existing elements


//Click X to Delete Todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //inside the fadeOut, this refferes to the li, not the span
	});
	event.stopPropagation(); //stop event from bubbling up
})

//Create New Todos
$("input[type = 'text']").on("keypress", function(event){
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul;
		console.log($(this).val());
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
})

//Toggle the Pencil Icon
$(".fa-pencil-alt").click(function(){
	$("input[type = 'text']").fadeToggle();
})
