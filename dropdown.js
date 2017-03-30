	/*******************************************
		Folding faqs
	*******************************************/
	var intervalID4 = setInterval(function() {
		$('.faqs h4').each(function() {
			$(this).prepend('<span class="arrow"></span>');
			$(this).nextUntil('h4, h3').hide();
		});
		$('.faqs h4').click(function() {
			$(this).nextUntil('h4, h3').slideToggle();
			$(this).children('.arrow').toggleClass('open');
		});
		window.clearInterval(intervalID4);
	}, 500);
