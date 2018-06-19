//Check off Specific Todos by Clicking

// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// })

$("li").click(function(){
	if($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "none"
		})
	} else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		})
	}
})
	