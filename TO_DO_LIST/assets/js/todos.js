
// cross and uncross the list item
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
 
// Deletion of item without "event Bubbling"
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();		// Stopping Event Bubbling
});
// input new item
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText+ "</>");
	}
});

var down = true;
$(".fa-plus").click(function(){
	$("input[type='text']").slideToggle();
});