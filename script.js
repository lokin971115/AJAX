$(document).ready(function(){
	$('body').on('click','button',processForm);
	$('body').on('click','a',replyclick);
})

function processForm() {
	let $new = $("<li><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p><a href=\"#\" role=\"button\">Reply</a></li>");
	$new.addClass("media");
	$new.find("div").addClass("media-body");
	$new.find("h5").html($("#inputsubject").val());
	$new.find("h6").html($("#inputname").val());
	$new.find("p").html($("#inputcomment").val());
	$new.find("svg").attr({
		"height": 100,
		"width": 100
	});
	$new.find("circle").attr({
		"cx": 50,
		"cy": 50,
		"r": 40,
		"fill": $("input[name=inputcolor]:checked").val()
	});
	$("#comments").append($new);
	$("form")[0].reset();
	console.log(this);
}

function replyclick(){
	var htmlelement=$("form").html();
	$(this).parent("div").append(htmlelement);
	console.log(this);
}
