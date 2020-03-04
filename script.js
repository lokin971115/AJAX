$(document).ready(function(){
	$('#firstbutton').on('click',processForm);
	$('body').on('click',"#secondbutton",processForm2);
	$('body').on('click','a',replyclick);
})

function processForm2(){
	let $new = $("<li><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p><a href=\"#\" role=\"button\">Reply</a></li>");
	var h5 = $(this).parent("form").find("#inputsubject").val();
	var h6 = $(this).parent("form").find("#inputname").val();
	var p = $(this).parent("form").find("#inputcomment").val();
	var color = $(this).parent("form").find("input[name=inputcolor]:checked").val();
	$new.addClass("media");
	$new.find("div").addClass("media-body");
	$new.find("h5").html(h5);
	$new.find("h6").html(h6);
	$new.find("p").html(p);
	$new.find("svg").attr({
		"height": 100,
		"width": 100
	});
	$new.find("circle").attr({
		"cx": 50,
		"cy": 50,
		"r": 40,
		"fill": color
	});
	$(this).parent("form").parent("div").append($new);
	$(this).parent("form").remove();
}

function processForm() {
	var h5 = $("#firstform").find("#inputsubject").val();
	var h6 = $("#firstform").find("#inputname").val();
	var p = $("#firstform").find("#inputcomment").val();
	var color = $("#firstform").find("input[name=inputcolor]:checked").val();
	let $new = $("<li><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p><a href=\"#\" role=\"button\">Reply</a></li>");
	$new.addClass("media");
	$new.find("div").addClass("media-body");
	$new.find("h5").html(h5);
	$new.find("h6").html(h6);
	$new.find("p").html(p);
	$new.find("svg").attr({
		"height": 100,
		"width": 100
	});
	$new.find("circle").attr({
		"cx": 50,
		"cy": 50,
		"r": 40,
		"fill": color
	});
	$("#comments").append($new);
	$("#firstform")[0].reset();
}

function replyclick(){
	if($(this).parent("div").children("form").length){

	}
	else{
		var $htmlelement=$("#firstform").clone();
		$htmlelement.attr("id","secondform");
		$htmlelement.find("button").attr("id","secondbutton");
		$(this).parent("div").append($htmlelement);
	}
}
