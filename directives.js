app.directive("menuIndex", function() {
	return {
		restrict: 'E',
		templateUrl: ('templates/menu-index.html')
	};
});

app.directive("menuReviews", function() {
	return {
		restrict: 'E',
		templateUrl: ('templates/menu-reviews.html')
	};
});

app.directive("cakeMenu", function() {
	return {
		restrict: 'E',
		templateUrl: ('templates/cake-menu.html'),
		controller: function() {			
			this.products = cakeMenu;
		},
		controllerAs: 'cakes'
	};
});

app.directive("breadMenu", function() {
	return {
		restrict: 'E',
		templateUrl: ('templates/bread-menu.html'),
		controller: function() {
			this.products = breadMenu;
		},
		controllerAs: 'breads'
	};
});

app.directive("cookieMenu", function() {
	return {
		restrict: 'E',
		templateUrl: ('templates/cookie-menu.html'),
		controller: function() {
			this.products = cookieMenu;
		},
		controllerAs: 'cookies'
	};
});

app.directive("piesMenu", function() {
	return {
		restrict: 'E',
		templateUrl: ('templates/pies-menu.html'),
		controller: function() {
			this.products = piesMenu;
		},
		controllerAs: 'pies'
	};
});

