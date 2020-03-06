var iplocdata=""

$(document).ready(function(){
	$.getJSON('http://ip-api.com/json?callback=?', function(data) {
	iplocdata=data
	});
	$.ajax({
		url: "file.txt",
		type: "GET"
		})
		.done(function(txt) {
		$('body').html(txt);
		});	
	$('body').on('click',"#firstbutton",processForm);
	$('body').on('click',"#secondbutton",processForm2);
	$('body').on('click','a',replyclick);
})



function processForm2(){
	var browser =""
	if (navigator.userAgent.search("MSIE") >= 0) {
		browser = "Browser: MSIE "
	}
	else if (navigator.userAgent.search("Chrome") >= 0) {
		browser = "Browser: Chrome "
	}
	else if (navigator.userAgent.search("Firefox") >= 0) {
		browser = "Browser: Firefox "
	}
	else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
		browser = "Browser: Safari "
	}
	else if (navigator.userAgent.search("Opera") >= 0) {
		browser = "Browser: Opera "
	}
	else if (navigator.userAgent.search("WebKit") >= 0) {
		browser = "Browser: WebKit "
	}
	else{browser = "Browser: Unknown "}
	var day = new Date();
	var iploc="My ip: "+iplocdata.query+" My location: "+iplocdata.country
	var isp="My ISP: "+iplocdata.isp
	wirte = browser+iploc+"<br>Time: "+day+"<br>"+isp

	$new=""
	if($(this).parent("form").parent("div").children("ul").length){
		$new = $("<li class=\"media\"><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p><a href=\"#\" role=\"button\">Reply</a><p></p></li>");
	}
	else{
		$new = $("<ul class=\"list-unstyled\"><li class=\"media\"><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p><a href=\"#\" role=\"button\">Reply</a><p></p></li></ul>");
	}
	var h5 = $(this).parent("form").find("#inputsubject").val();
	var h6 = $(this).parent("form").find("#inputname").val();
	var p = $(this).parent("form").find("#inputcomment").val();
	var color = $(this).parent("form").find("input[name=inputcolor]:checked").val();
	$new.find("div").addClass("media-body");
	$new.find("h5").html(h5);
	$new.find("h6").html(h6);
	$new.find("p").eq(0).html(p)
	$new.find("p").eq(1).html(wirte)
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
	if($(this).parent("form").parent("div").children("ul").length){
		$(this).parent("form").parent("div").children("ul").append($new);
	}
	else{
		$(this).parent("form").parent("div").append($new);
	}
	$(this).parent("form").remove();
	var h = $('body').html();
	$.ajax({
		url: "file.txt",
		type: "PUT",
		data:h
		})
}

function processForm(value) {
	var browser =""
	if (navigator.userAgent.search("MSIE") >= 0) {
		browser = "Browser: MSIE "
	}
	else if (navigator.userAgent.search("Chrome") >= 0) {
		browser = "Browser: Chrome "
	}
	else if (navigator.userAgent.search("Firefox") >= 0) {
		browser = "Browser: Firefox "
	}
	else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
		browser = "Browser: Safari "
	}
	else if (navigator.userAgent.search("Opera") >= 0) {
		browser = "Browser: Opera "
	}
	else if (navigator.userAgent.search("WebKit") >= 0) {
		browser = "Browser: WebKit "
	}
	else{browser = "Browser: Unknown "}
	var day = new Date();
	var iploc="My ip: "+iplocdata.query+" My location: "+iplocdata.country
	var isp="My ISP: "+iplocdata.isp
	wirte = browser+iploc+"<br>Time: "+day+"<br>"+isp

	var h5 = $("#firstform").find("#inputsubject").val();
	var h6 = $("#firstform").find("#inputname").val();
	var p = $("#firstform").find("#inputcomment").val();
	var color = $("#firstform").find("input[name=inputcolor]:checked").val();
	let $new = $("<li><svg><circle></circle></svg><div><h5></h5><h6></h6><p></p><a href=\"#\" role=\"button\">Reply</a><p></p></li>");
	$new.addClass("media");
	$new.find("div").addClass("media-body");
	$new.find("h5").html(h5);
	$new.find("h6").html(h6);
	$new.find("p").eq(0).html(p)
	$new.find("p").eq(1).html(wirte)
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
	var h = $('body').html();
	$.ajax({
		url: "file.txt",
		type: "PUT",
		data:h
		})
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

