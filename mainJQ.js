$(document).ready(function() {

// Hide seasonal favorites and featured images

/* Fade mobile menu on navigation */

	$('#mobileMenu').on('click', function() {
		$('#mobileNavigationContainer').fadeIn('fast');
	});

	$('.mobileMenuClose').on('click', function() {
		$('#mobileNavigationContainer').fadeOut('fast');
	});

	$('.mobileNavLink').on('click', function() {
		$('#mobileNavigationContainer').fadeOut('fast');
	});

});
