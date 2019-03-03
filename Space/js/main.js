(function($)
{
	var menuBtn = $('.menu-btn'),
		closeMenuBtn = $('.menu-close-btn'),
		navList = $('.nav-list');

	$('.menu-link, .arrow-up-link').click(function() 
	{
		var $page = $('html, body');
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 700);

   		return false;
	});

	menuBtn.click(function(evt)
	{
		evt.preventDefault();

		var htmlWidth = $('body').css('width'),
			htmlHeight = $('body').css('height');
		
		navList.slideDown(350);

		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');
	});

	closeMenuBtn.click(function(evt)
	{
		evt.preventDefault();

		navList.slideUp(350);
		
		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');
	});

	/*layout.click(function(evt)
	{
		evt.preventDefault();

		navList.slideUp(350);
		
		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');
		layout.css('display', 'none');
	});*/
})($);