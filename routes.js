angular.module("BakeryThemeApp")

	.config(function($routeProvider) {

		$routeProvider.when('/home', {
			templateUrl: 'templates/home.html',
			
		})

		.when('/menu', {
			templateUrl: 'templates/menu.html',
			controller: 'MenuNavigation',
			controllerAs: 'menu'
		})

		.when('/services', {
			templateUrl: 'templates/services.html',
			
		})

		.when('/about', {
			templateUrl: 'templates/about.html',
			
		})

		.when('/contact', {
			templateUrl: 'templates/contact.html',
			
		})

		.otherwise({ redirectTo: '/home'});
		
});
