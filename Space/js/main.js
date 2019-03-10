(function($)
{
	var menuBtn = $('.menu-btn'),
		closeMenuBtn = $('.menu-close-btn'),
		navList = $('.nav-list'),
		lang = $('.lang');

	var grid = $('.grid').isotope({
		itemSelector: '.grid__item',
		layoutMode: 'masonry',
		masonry: {
			horizontalOrder: true,
			gutter: 15
		}
	});

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

	lang.click(function(evt)
	{
		evt.preventDefault();

		if ($(this).text() == 'ENG')
		{
			$(this).text('UK');
			$(this).siblings('.text-eng').toggleClass('visually-hidden');
			$(this).siblings('.text-uk').toggleClass('visually-hidden');
		}
		else
		{
			$(this).text('ENG');
			$(this).siblings('.text-eng').toggleClass('visually-hidden');
			$(this).siblings('.text-uk').toggleClass('visually-hidden');
		}
	});
})($);

(function($)
{
	'use strict';

	$(document).ready(function()
	{
		var grid = $('#grid').isotope({
			itemSelector: '.grid__item',
			layoutMode: 'masonry',
			masonry: {
				horizontalOrder: true
			}
		});

		$('.portfolio__list-item').click(function () {
			var filterValue = $(this).attr('data-category');
			grid.isotope({ filter: filterValue });

			$(this)
				.addClass("portfolio__list-item--active")
				.siblings().removeClass("portfolio__list-item--active");
		});

		var $page = $('html, body');
		$('.header__arrow').click(function() {
		    $page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 800);
	   		return false;
		});

		$('.contact__link').click(function() {
		    $page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 800);
	   		return false;
		});

		var navItems = $('.nav__list-item');
		navItems.on('click', function(evt)
		{
			evt.preventDefault();

			navItems.each(function(index)
			{
				$(this).removeClass('nav__list-item--active');
			});

			$(this).addClass('nav__list-item--active');	
		});
	});
})($);