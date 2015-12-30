var app = angular.module("BakeryThemeApp", ['ngRoute']);


/*-------------------
Menu products
---------------------*/

var cakeMenu = [

		{
			name: 'Seasonal cakes',
			price: 25,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Spice, pumpkin spice, nutmeg, chocolate basil',
			images: 'images/cake.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Apple pie tootsie roll chupa chups carrot cake.",
				author: "captainObvious@aol.com"
			},

			]	
		},
		{
			name: 'Traditional cakes',
			price: 50 + " - " + 75,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Vanilla, red velvet, chocolate, white-chocolate, caramel, lemon',
			images: 'http://www.bridebox.com/blog/wp-content/uploads/2014/07/vanilla-wedding-cake.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Apple pie tootsie roll chupa chups carrot cake.",
				author: "captainObvious@aol.com"
			},

		]	
		},

		{
			name: 'Birthday & event cakes',
			price: 75 + '-' + 100,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Sheet cakes up to 18x24, tall cakes, fondant cakes, obscene cakes for bachelor parties',
			images: 'http://www.pepperl-fuchs.com/global/images_inet_lowres_GLOBAL/EC_SS_20140630_01_birhtday_cake_rdax_80.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Apple pie tootsie roll chupa chups carrot cake.",
				author: "captainObvious@aol.com"
			},

		]		
		},

		{
			name: 'Cheesecakes',
			price: 50,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Classic, cherry, strawberry, white chocolate', 
			images: 'http://blogs.rj.org/wp-content/uploads/2012/05/Cheesecake-200x200.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Apple pie tootsie roll chupa chups carrot cake.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cupcake ipsum dolor sit amet jujubes",
				author: "captainObvious@aol.com"
			},

		]		
		},

		{
			name: 'Twisted & custom cakes',
			price: 50,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Lemon-twist, pineapple-not-updside-down, blue suede, salted caramel, and more', 
			images: 'http://www.bridebox.com/blog/wp-content/uploads/2014/07/lemon-flavored-wedding-cake.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Apple pie tootsie roll chupa chups carrot cake.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cupcake ipsum dolor sit amet jujubes",
				author: "captainObvious@aol.com"
			},

		]		
		},
		
		{
			name: 'Fondant',
			price: 100,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://cdn.cakecentral.com/gallery/2015/03/831893pdaT_fondant-crown-cake-with-butter-cream-icing-and-fondant-designs_200x200.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cupcake ipsum dolor sit amet jujubes",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cupcake ipsum dolor sit amet jujubes",
				author: "captainObvious@aol.com"
			},

		]		
		},		
	];


var breadMenu = [
		
		{
			name: 'Seasonal breads',
			price: 17,
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Spice, pumpkin spice, nutmeg, chocolate basil',
			images: 'images/pumpkinBread.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Apple pie tootsie roll chupa chups carrot cake.",
				author: "captainObvious@aol.com"
			},

			]	
		},
		{
			name: 'Classic',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://www.sweetlyserendipity.com/wp-content/uploads/2011/10/DSC07792-200x200.jpg',
					
			reviews: [
			{
				stars: 5,
				body: "Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes. Apple pie tootsie roll chupa chups carrot cake.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "bonbon marzipan candy canes. Apple pie",
				author: "captainObvious@aol.com"
			},

		]	
		},

		{
			name: 'Twisted',
			price: 4.50 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'https://s-media-cache-ak0.pinimg.com/236x/e1/94/80/e19480907f9f0d03c6d282f4185a58ab.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "sit amet jujubes bonbon marzipan candy canes.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "sit amet jujubes bonbon marzipan candy canes..",
				author: "captainObvious@aol.com"
			},

		]		
		},
		
		{
			name: 'Custom',
			price: 6 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images:'https://s-media-cache-ak0.pinimg.com/236x/12/f2/e1/12f2e12dd93d67357434b17ee5ef574b.jpg',
			reviews: [
			{
				stars: 5,
				body: "Cookie chocolate apple pie. Donut candy croissant chocolate pastry. ",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cake wafer gummies tiramisu carrot cake gingerbread.",
				author: "captainObvious@aol.com"
			},

		]		
		},
		{
			name: 'Custom',
			price: 6 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images:'http://latechef.com/userphoto/ChelseaHayAustralian844461059/mini/Cinnamon-Raisin-Bread-.jpeg',
			reviews: [
			{
				stars: 5,
				body: "Cookie chocolate apple pie. Donut candy croissant chocolate pastry. ",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cake wafer gummies tiramisu carrot cake gingerbread.",
				author: "captainObvious@aol.com"
			},

		]		
		},
		{
			name: 'Custom',
			price: 6 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images:'http://specificpacificfoodsllc.com/zencart/images/bread%20puddin%20pie.jpg',
			reviews: [
			{
				stars: 5,
				body: "Cookie chocolate apple pie. Donut candy croissant chocolate pastry. ",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cake wafer gummies tiramisu carrot cake gingerbread.",
				author: "captainObvious@aol.com"
			},

		]		
		},
		
	];

var cookieMenu = [

		{
			name: 'Fall themed cookies',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'images/slider2.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cake wafer gummies tiramisu carrot cake gingerbread.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "wafer gummies tiramisu carrot cake gingerbread.",
				author: "captainObvious@aol.com"
			},

		]		
		},

		{
			name: 'Chocolate Chip',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://static.caloriecount.about.com/images/medium/cookies-chocolate-chip-refrigerated-159243.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cake wafer gummies tiramisu carrot cake gingerbread.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "wafer gummies tiramisu carrot cake gingerbread.",
				author: "captainObvious@aol.com"
			},

		]		
		},

		{
			name: 'Oatmeal',
			price: 4.50 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://img2.timeinc.net/health/img/web/2012/10/blogs/pumpkin-chocolate-chip-cookies-200x200.jpg',
				
			reviews: [
			{
				stars: 5,
				body: " Cake wafer gummies tiramisu carrot cake gingerbread.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Cookie chocolate apple pie. ",
				author: "captainObvious@aol.com"
			},

		]		
		},
		
		{
			name: 'PB&J',
			price: 6 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images:	'http://static.caloriecount.about.com/images/medium/cookies-peanut-butter-refrigerated-160154.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Cookie chocolate apple pie. Donut candy croissant chocolate pastry.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Donut candy croissant chocolate pastry.",
				author: "captainObvious@aol.com"
			},

		]		
		},
		{
			name: 'Sugar',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://www.recipe.com/images/tender-sugar-cookies-R106813-l.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Jelly-o croissant donut marzipan. Donut gingerbread wafer  ",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "lollipop dragée sweet roll dragée. Marshmallow pie bonbon.",
				author: "captainObvious@aol.com"
			},

		]	
		},		
		{
			name: 'Stuffed',
			price: 6 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://s1.grouprecipes.com/images/recipes/200/2680469499.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "lollipop dragée sweet roll dragée. Marshmallow pie bonbon.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Jelly-o croissant donut marzipan. Donut gingerbread wafer lollipop dragée sweet roll dragée.  ",
				author: "captainObvious@aol.com"
			},

		]		
		},
		{
			name: 'Iced',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://www.crazyforcrust.com/wp-content/uploads/2014/11/Cutout-Sugar-Cookies-2-of-10w-200x200.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Marshmallow pie bonbon.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Marshmallow pie bonbon.",
				author: "captainObvious@aol.com"
			},

		]		
		},
	];

var piesMenu = [
		
		{
			name: 'Seasonal desserts',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Turtle crunch, caramel apples, spiced rum mini cakes,',
			images: 'images/pie.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Gummi bears ice cream dragée powder wafer marzipan cheesecake. Tiramisu bear claw gummi bears chocolate bar. ",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Muffin wafer croissant muffin.",
				author: "captainObvious@aol.com"
			},

		]		
		},
		{
			name: 'Pumpkin pie',
			price: 3 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://latechef.com/userphoto/KatarinaGutirrezCanadian915817260/mini/Pumpkin-Pie.jpeg',
				
			reviews: [
			{
				stars: 5,
				body: "Gummi bears ice cream dragée powder wafer marzipan cheesecake. Tiramisu bear claw gummi bears chocolate bar. ",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Muffin wafer croissant muffin.",
				author: "captainObvious@aol.com"
			},

		]		
		},

		{
			name: 'Apple pie',
			price: 4.50 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images:	'http://s2.grouprecipes.com/images/recipes/200/843780532.jpg',
					
			reviews: [
			{
				stars: 5,
				body: "Gummi bears ice cream dragée powder wafer marzipan cheesecake. Tiramisu bear claw gummi bears chocolate bar. ",
				author: "bob@gmail.com"
			},
			{
				stars:  3,
				body: "Muffin wafer croissant muffin.",
				author: "captainObvious@aol.com"
			},

		]	
		},
		
		{
			name: 'Cherry pie',
			price: 15 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://www.serbiancookbook.com/images/food-recipes/thumbnails/200x200/Lazy-sour-cherry-pie.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Muffin wafer croissant muffin.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Chocolate bar tart cookie cake jelly beans candy canes.",
				author: "captainObvious@aol.com"
			},

		]		
		},	
		{
			name: 'Peanut Butter pie',
			price: 15 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://www.crazyforcrust.com/wp-content/uploads/2014/03/Peanut-Butter-Cookie-Dough-Cheesecake-Pie-5-of-5w-200x200.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Muffin wafer croissant muffin.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Chocolate bar tart cookie cake jelly beans candy canes.",
				author: "captainObvious@aol.com"
			},

		]		
		},		
		{
			name: 'Pecan pie',
			price: 15 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://images.meredith.com/rrmag/images/recipe/l_R179827.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Muffin wafer croissant muffin.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Chocolate bar tart cookie cake jelly beans candy canes.",
				author: "captainObvious@aol.com"
			},

		]		
		},	
			{
			name: 'Strawberry Shortcake',
			price: 15 + '/each',
			description: 'Soufflé jelly beans macaroon fruitcake chocolate chupa chups',
			variety: 'Cupcake ipsum dolor sit amet jujubes bonbon marzipan candy canes',
			images: 'http://clv.h-cdn.co/assets/cm/15/09/54ee496c166e2_-_strawberry-shortcake-200.jpg',
				
			reviews: [
			{
				stars: 5,
				body: "Muffin wafer croissant muffin.",
				author: "bob@gmail.com"
			},
			{
				stars: 3,
				body: "Chocolate bar tart cookie cake jelly beans candy canes.",
				author: "captainObvious@aol.com"
			},

		]		
		},
	];
