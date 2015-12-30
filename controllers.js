// Controller for main navigation/site navigation

app.controller("SiteNav", function($scope, $location) {
	
	$scope.toServices = function() {
		$location.path('/services');
	};	

	$scope.toMenu = function() {
		$location.path('/menu');
	};

	$scope.toHome = function() {
		$location.path('/home');
	};

	$scope.toAbout = function() {
		$location.path('/about');
	};

	$scope.toContact = function() {
		$location.path('/contact');
	};

});


app.controller("MenuNavigation", function() {
	//this.menu = 1;

	this.setMenu = function(menuNum) {
		this.menu = menuNum;
	};

	this.isMenu = function(checkMenu) {
		return this.menu === checkMenu;
	};
});


/*---------------------------------------------
Controller to navigate between menu item tabs
------------------------------------------------*/

app.controller("MenuTabs", function() {
	this.tab = 1;

	this.setTab = function(menuTab) {
		this.tab = menuTab;
	};

	this.isTab = function(checkTab) {
		return this.tab === checkTab;
	};
});

/*----------------------------------------
Controller to navigate & create reviews
-----------------------------------------*/

app.controller("ReviewController", function() {
	this.review = {};

	this.addReview = function(items) {
		items.reviews.push(this.review);
		this.review = {};
	};
});

app.controller("ContactOptions", function() {
	this.option = 1;
});

