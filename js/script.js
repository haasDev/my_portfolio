$("a").click(function() {
	$("html, body").animate({
	  scrollTop: $( $(this).attr("href") ).offset().top
	}, 750);
});

//# sourceMappingURL=script.js.map