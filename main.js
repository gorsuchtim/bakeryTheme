
/* Fade in "Seasonal favorites" on window scroll */

	$(window).scroll(function() {

		if ( $(window).scrollTop < 50) {
			$('.animateText').hide();
		}

		if ( $(window).scrollTop() >= 50) {
			$('.animateText').addClass('fadeInDown');
		}	

	});

function nameCheck() {
	var name = document.contactForm.userName.value;
	
	if (name === "") {		
		document.getElementById("nameError").innerHTML = "Please enter your first name";					
		return false;
	}
	else {
		document.getElementById("nameError").innerHTML = "Name";	
		return true;
	}

}

function messageCheck() {
	var message = document.contactForm.message.value;
	
	if (message === "") {		
		document.getElementById("messageError").innerHTML = "Please a brief message";					
		return false;
	}
	else {
		document.getElementById("messageError").innerHTML = "Message";	
		return true;
	}

}

function emailCheck() {
	var email = document.getElementById("email").value;
	var emailGroup = document.getElementById("emailGroup");
	var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	
	var emailError = document.getElementById("emailError");
	

	if (email !== "") {
		if(emailPattern.test(email)) {
			emailGroup.className = "has-success";
			emailError.innerHTML = "Email";
			emailError.style.color = "black";	
			return true;
		}
		else {
			emailGroup.className = "has-error";
			emailError.innerHTML = "Please check your email address";
			emailError.style.color = "red";
			return false;
		}
	}
} // end emailCheck()

function submitForm() {

	if (emailCheck()) {
		if (nameCheck()) {
			if (messageCheck()) {			
				document.getElementById("contactForm").submit();
				document.getElementById("errorMessage").innerHTML = "Thanks!  I'll be in touch";					
				document.getElementById("errorMessage").style.color = "white";
				console.log("Hi");
				document.location = "home.html";		
			}
		}
	}
	else {
		document.getElementById("errorMessage").innerHTML = "Please make sure all fields are correct";	
		document.getElementById("errorMessage").style.color = "red";
		console.log("nope");
	}	
} // end submitForm()

