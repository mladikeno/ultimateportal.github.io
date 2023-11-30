$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

$(document).ready(function() {
	$("#scroll").mPageScroll2id();
});