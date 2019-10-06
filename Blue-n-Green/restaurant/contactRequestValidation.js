/* Andrew Galletti
Last Edited: 10/6
Date Created: 9/30 */

function validate(){
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	
	var validEmail = validateEmail(email);
	var validPhone = validatePhone(phone);
	
	if(validEmail&&validPhone) {
		alert("Your contact request has been validated and is being processed. We will contact you as soon as possible.");
	}
}

function validateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
		return true;
	}
    alert("You have entered an invalid email address!");
    return false;
}

function validatePhone(phone) {
	if(/^\d{10}$/.test(phone)){
		return true;
    }
    alert("You have entered an invalid phone number!");
    return false;
}