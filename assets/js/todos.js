//Check off Specific Todos by Clicking

// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// })

$("li").click(function(){
	$(this).toggleClass("completed");
})
	