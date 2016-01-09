/**********************
Bakery Theme CSS

Includes media queries for responsive design

****************************/
body {	
	width: 100%;
	margin: 0;
	padding: 0;
}
#mainContainer {
	padding: 0;
}

/*---------------------------------
Hide Tablet and handheld Styles
----------------------------------*/
#mobileMenu, #mobileNavigationContainer, #mobileMenuButton {
	display: none;
}
#navLogo {
	font-family: 'Clicker Script', cursive;	
	color: rgb(232,143,225);
	font-size: 30px;
	margin-top: -10px;
}
#navPhone {
	font-family: 'Clicker Script', cursive;	
	color: rgb(232,143,225);
	font-size: 23px;
	margin-top: -4px;
}

/*---------------------
	Desktop/Tablet Navigation Menu
-------------------------*/
.navMenu {	
	background-color: rgba(255,255,255,1);	
	position: fixed;
	padding-top: 15px;
	padding-bottom: 10px;
	width: 100%;
	height: 60px;
	z-index: 100;
	text-align: center;	
}	
.navmenu ul {		
	font-size: 15px;	
}
.navMenu li {	
	display: inline;
	list-style: none;
	padding-right: 50px;	
}
.navMenu a {
	color: black;
	text-transform: uppercase;
	text-decoration: none;
	font-size: 17px;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	transition: all 0.2s linear;
}
.navMenu a:hover {
	color: rgba(153,204,255,1);	
}
.navMenu img {
	margin-top: -0.5%;
	height: 20px;
	width: 20px;
	margin-right: 0.4%;		
}

/*---------------------------------
Mobile menu button and menu styles
----------------------------------*/
.mobileMenuButton {		
	position: fixed;
	right: 7%;
	height: 35px;
	width: 45px;	
	margin-top: 20px;
	cursor: pointer;
	z-index: 2;
	background-color: rgba(255,255,255,0.75);
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	}
.mobileMenuButton:hover {
	background-color: white;
}
.mobileMenuBar hr {		
	margin: 15%;
	border-top: 2px double rgba(153,204,255,1);
}
#mobileNavigationContainer {
	position: fixed;
	left: 0;
	top: 0px;		
	z-index: 2;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.85);
}
#mobileNavigationContainer ul {
	list-style: none;
	text-align: center;
	margin-top: 100px;	
}	
#mobileNavigationContainer li {
	font-size: 1.8em;		
	color: rgba(153,204,255,1);				
	padding-bottom: 5%;
	cursor: pointer;
}
#mobileNavigationContainer li a {
	text-decoration: none;
	color: white;
	font-family: 'Alice', serif;
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
}
#mobileNavigationContainer li a:hover {
	color: rgba(153,204,255,1);
}
.mobileMenuClose {	
	color: white;
	font-size: 1.75em;	
	font-family: 'Alice', serif;	
	cursor: pointer;
	position: absolute;
	margin-top: 20px;
	right: 6%;
	z-index: 1;
}

/*----------------------
Global home page container styles
-------------------------*/

.homeContainer {
	font-family: 'Alice', serif;	
	border: 1px solid;
	border-top-color: rgba(153,204,255,1);
	border-bottom-color: rgba(153,204,255,1);
	padding-top: 25px;
	padding-bottom: 50px;
}	
.homeContainer h3 {
	font-size: 35px;
}
.homeContainer h4 {
	line-height: 30px;
	font-size: 20px;
}
.homeButton button {
	margin-top: 25px;
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 50px;
	padding-right: 50px;
	background-color: transparent;
	border-color: rgba(153,204,255,1);
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
}
.homeButton button:hover {
	background-color: #eeeeee;
	border-color: black;
}
.homeContainer a {
	color: black;
	text-decoration: none;
}

/*-----------------------
Home Page Styles
----------------------*/

#homeContainer {	
	margin: 0;
	padding: 0;	
	width: inherit;
	z-index: 2;
}

/*-------------------------------------
Title Image Container
--------------------------------------*/

#backgroundImageContainer {			
	background-image: url('../images/slider1.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;	
	height: 600px;		
}
#logo {		
	padding-top: 12%;		
	z-index: 1;		
}
#logo h1 {	
	font-family: 'Clicker Script', cursive;		
	color: rgba(153,204,255,1);
	text-shadow: 2px 1px 1px black;
	font-size: 50px;		
}

/*-----------------
Featured Container
-------------------*/

#featuredContainer {
	border: none;	
	background-color: ;
}
#favoritesHeader {
	color: rgba(201,127,13,0.85);
}
#favoritesSub {
	color: rgba(94,82,64,0.85);
	padding-bottom: 30px;
}
.galleryTeaseContainer {
	display: inline;
}
.galleryTease {
	position: relative;	
	height: 200px;			
	color: transparent;
	background-repeat: no-repeat;
	background-size: 100% 200px;
	background-position: center;	
}
.galleryTeaseShade {
	position: absolute;		
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 200px;	
	font-family: 'Alice', serif;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
.galleryTeaseShade h5 {		
	color: transparent;
	font-size: 25px;
	padding-top: 60px;
}
.galleryTeaseShade:hover {
	background-color: rgba(34,33,31,0.85);	
}
.galleryTeaseShade:hover h5 {
	color: white;
}
#galleryTease1 {
	background-image: url('../images/slider2.jpg');	
}
#galleryTease2 {
	background-image: url('../images/cake.jpg');
}
#galleryTease3 {
	background-image: url('../images/pie.jpg');
}
#galleryTease4 {
	background-image: url('../images/bread.jpg');
}
#featuredContainer .homeContent {
	padding-top: 30px;
	color: rgba(94,82,64,1);
}
#featuredContainer button {
	border-color: rgba(153,204,255,1);	
	margin-top: 50px;
}

/*-----------------
My Story Container
-------------------*/

#myStoryContainer {
	position: relative;
	height: 450px;
	padding: 0;
	border-top: 1px solid rgba(153,204,255,1);
	border-bottom: 1px solid rgba(153,204,255,1);
}
.galleryTile {
	position: relative;	
	height: 450px;			
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.galleryShade{
	position: absolute;	
	top: 50px;		
	left: 0;	
	width: 100%;
	height: 350px;
	background-color: rgba(255,255,255,0.6);	
	color: rgba(94,82,64,1);
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
#galleryTile1 {
	background-image: url('../images/myStory.jpg');
	background-position: bottom;
	border-right: 1px solid black;		
}
.galleryShade h3 {
	padding-top: 20px;	
	font-size: 50px;	
	font-family: 'Clicker Script', cursive;		
}
.galleryShade h4 {
	padding: 0 300px;
	line-height: 40px;
	font-family: 'Alice', serif;	
	font-size: 30px;		
}

/*-----------------
Charity Container
-------------------*/
#charityContainer {
	padding-top: 50px;
	background-color: #eeeeee;
}
#charityContainer button:hover {
	background-color: white;
}
/*-----------------
Footer Container
-------------------*/

#socialRow {
	padding-top: 30px;
	padding-bottom: 30px;
	font-family: 'Alice', serif;			
}
#socialRow img {
	width: 40px;
	height: 40px;	
	margin-right: 50px;
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
}
#socialRow img:hover {
	transform: scale(1.175,1.175);
	-webkit-transform: scale(1.175,1.175);
	-moz-transform: scale(1.175,1.175);
	-o-transform: scale(1.175,1.175);
	-ms-transform: scale(1.175,1.175);	
}
#socialRow ul {
	list-style: none;
}
#socialRow li {
	display: inline-block;
}

/*--------------------------
Global Template Styles
------------------------------*/

.templateHeader {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.templateHeader h3 {
	margin-top: 70px;
	font-family: 'Clicker Script', cursive;	
	font-size: 50px;
	color: rgba(153,204,255,1);	
	padding: 20px;
}
.overlay {
	background-color: rgba(0,0,0,0.55);
	width: inherit;
	height: 200px;
}
.templateContent {
	margin-top: 30px;
	font-family: 'Alice', serif;
}
.templateContent img {
	width: 75px;
	height: 75px;
}
.contentColumn {
	border-right: 2px solid rgba(153,204,255,1);
}
.contentColumn:last-child {
	border-right: none;
}
.contentColumn h5 {
	padding-top: 10px;
	line-height: 30px;
	font-size: 15px;
}
.contentColumn a {
	color: rgba(153,204,255,1);
	font-size: 18px;
	text-decoration: none;
}
.templateButton a {
	color: black;
	text-decoration: none;
	font-family: 'Alice', serif;
}
.templateButton button {	
	margin-top: 20px;
	padding: 10px 50px 15px 50px;	
	border-width: 2px;
	border-color: rgba(153,204,255,1);
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
}
.templateButton button:hover {
	background-color: transparent;
}
.templateSocial img {
	width: 30px;
	height: 30px;
	margin-top: 15px;
}

/*---------------
Menu Landing
--------------------*/
#menuTease {
	margin-top: 25px;
	margin-bottom: 25px;
	font-family: 'Alice', serif;
}
#textTease {
	margin-top: 10px;
}
#menuTease h4, #menuTease h5 {
	padding-left: 35px;
	padding-right: 35px;
	line-height: 30px;
}
#menuTeaseImageTitle {	
	color: rgba(153,204,255,1);	
}
#menuTeaseImages img {	
	display: inline;	
	border-radius: 16px;	
	width: 150px;
	height: 150px;
	margin-top: 10px;
}
#menuTease button {
	margin-top: 25px;
	padding: 15px;
	border-width: 2px;
	border-color: rgba(153,204,255,1);
	background-color: transparent;
	font-size: 20px;
	font-family: 'Alice', serif;
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
}
#menuTease button:hover {
	background-color: #eeeeee;
}
#menuTease a {
	color: black;
	text-decoration: none;
}		
#menuTease h4 {
	font-family: 'Alice', serif;	
}	
#menuNavigation ul {
	margin-top: 15px;
}
#menuNavigation li {		
	display: inline-block;
	margin-right: 20px;		
}
#menuNavigation a {
	color: black;
	text-decoration: none;
	font-size: 20px;
	font-family: 'Alice', serif;	
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
}
#menuNavigation a:hover {
	color: rgb(232,143,225);
}

/*-----------------------
Menu pages
------------------------*/

#itemName {
	font-family: 'Alice', serif;		
}
.menuHeader img {
	border-radius: 16px;
	width: 200px;
	height: 200px;
}
#menuTabs {	
	margin-top: 10px;
}
#menuTabs a {
	color: black;
	font-size: 12px;
}
.nav-pills > li.active > a {
	background-color: rgba(153,204,255,1);
}
.nav >li > a:focus {    
background-color: rgba(153,204,255,1);
}
.panel {
	margin-top: 20px;
	font-family: 'Alice', serif;
	font-size: 15px;
}
#price {
	font-size: 15px;
	text-align: center;
}


/*-----------------------
Review Form Styles
------------------------*/
#reviewForm {
	font-family: 'Alice', serif;	
}
#reviewForm select {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);
}
#reviewForm textarea {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);
	padding: 5px;
}
#reviewForm input[type="email"] {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);
	padding: 5px;
}
#reviewForm input[type="submit"] {
	border-color: rgba(153,204,255,1);
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
}
#reviewForm input[type="submit"]:hover {
	background-color: transparent;
}
.ng-dirty.ng-invalid {
	border-color: red;
}
.ng-dirty.ng-valid {
	border-color: green;
}	

/*-----------------------
Contact Page Styles
------------------------*/
#contactContainer {
	border: none;
}
#contactOptions {				
	font-family: 'Alice', serif;		
	color: rgba(153,204,255,1);		
}	
#emailProviders img {
	margin-top: 15px;
	width: 30px;
	height: 30px;
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
}
#emailProviders img:hover {
	transform: scale(1.175,1.175);
	-webkit-transform: scale(1.175,1.175);
	-moz-transform: scale(1.175,1.175);
	-o-transform: scale(1.175,1.175);
	-ms-transform: scale(1.175,1.175);
}
#emailProviders li {
	display: inline;
	margin-right: 35px;
}
#contactContainer .form-control {
	width: 30%;
}
#contactForm {
	font-family: 'Alice', serif;	
}
#contactForm input[type="text"] {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);	
	padding: 5px;
}
#contactForm select {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);
}
#contactForm textarea {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);
	margin-top: 20px;	
}
#contactForm input[type="email"] {
	border-radius: 5px;
	border-color: rgba(153,204,255,1);
	margin-top: 20px;
	padding: 5px;
}
#contactForm button {
	border-color: rgba(153,204,255,1);	
	transition: all 0.2s ease-in-out;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
}
#contactForm button:hover {
	background-color: transparent;
}

/*---------------------
Small Handheld Styles
-----------------------*/

@media screen and (max-width: 519px) {
	#navigationMenu {
		display: none;
	}	
	#mobileMenu, #mobileMenuButton {
		display: block;
	}	
	.item {
		height: 515px;	
	}	
	.galleryTease {
		position: relative;	
		height: 200px;			
		color: transparent;
		background-repeat: no-repeat;
		background-size: 200px 200px;
		background-position: center;	
	}
	.galleryTeaseShade {
		display: none;
	}	
	.templateHeader h3 {
		margin-top: 40px;
	}
	.homeContainer h3 {
		font-size: 35px;
	}
	.homeContent h4 {
		font-size: 17px;
	}
	#charityContainer img {
		margin-top: 50px;
	}
	#socialRow img {
		width: 40px;
		height: 40px;
		margin-right: 25px;
	}
	.contentColumn img {
		margin-top: 40px;
	}
	.contentColumn h2 {
		font-size: 25px;
	}
	.contentColumn h5 {
		font-size: 17px;
	}
	.templateButton {
		margin: 30px 0;
	}
	#contactContainer form {
		margin-bottom: 30px;
	}
	#menuNavigation li  {
		margin-right: 10px;	
	}
	#menuNavigation li a {
		font-size: 18px;
	}
	#menuTease {
		margin-top: 0;
	}
	#menuTease button {
		margin-bottom: 30px;
	}
	#seasonalMenuTease {
		display: none;
	}
	.galleryShade h4 {
		font-size: 18px;
		padding-left: 25px;
		padding-right: 25px;
		padding-bottom: 20px;
	}
}

/*---------------------------------------
Large Handheld Styles and tablet styles
-----------------------------------------*/

@media screen and (min-width: 520px) and (max-width: 1024px) {
	#navigationMenu {
		display: none;
	}	
	#mobileMenu, #mobileMenuButton {
		display: block;
	}
	.galleryShade h4 {
		padding-bottom: 20px;
	}
	.templateHeader h3 {
		margin-top: 40px;
	}
	.homeContainer h3 {
		font-size: 35px;
	}	
	#contactForm fieldset {
		margin-top: 20px;
	}	
	#contactContainer #socialRow {
		margin-top: 15px;
	}
	#contactContainer #socialRow img {
		width: 40px;
		height: 40px;
	}
	#contactContainer form {
		margin-bottom: 30px;
	}	
	#contactOptions h4 {
		margin: 20px;
		font-size: 25px;
	}
	#menuNavigation li  {
		margin-right: 20px;	
	}
	#menuNavigation li a {
		font-size: 22px;
	}
	#menuTease {
		margin-top: 0;
	}
	#menuTease button {
		margin-bottom: 30px;
	}	
	.galleryShade h4 {
		font-size: 18px;
		padding-left: 25px;
		padding-right: 25px;
		padding-bottom: 20px;
	}
	#socialRow img {
		width: 40px;
		height: 40px;
		margin-right: 25px;
	}
}

@media screen and (max-width: 991px) {
	#menuTease img {
		display: none;
	}
}

@media screen and (min-width: 1025px) and (max-width: 1195px) {
	#navigationMenu li {
		padding-right: 20px;
	}
	#navigationMenu li a {
		font-size: 15px;
	}
	#navLogo {
		font-size: 25px;
		margin-top: -6px;
	}
	#navPhone {
		font-size: 22px;
	}
}
	
