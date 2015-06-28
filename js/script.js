$('a[href^="#"]').on('click', function(event){
	var id = $(this).attr('href');
	var target = $(id);

	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 750);
	}
});
//# sourceMappingURL=script.js.map