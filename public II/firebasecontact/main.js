// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACIYqT5IcWJ_YUwdF0Z0rBaxpkLYEJLjY",
    authDomain: "contact-31000.firebaseapp.com",
    databaseURL: "https://contact-31000.firebaseio.com",
    projectId: "contact-31000",
    storageBucket: "",
    messagingSenderId: "358165021777",
    appId: "1:358165021777:web:89d66650f14aaf67"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// refrence messages collection
var messagesRef = firebase .database().ref('messages');

// Listen for form submit
document.getElementById('Contact').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
	e.preventDefault();

	// Get values
	var name = getInputVal('name');
	var tel = getInputVal('tel');
	var email = getInputVal('email');
	var message = getInputVal('message');

	// Save message 
	saveMessage(name, tel, email, message);

	// show alert
	document.querySelector('.alert').style.display = 'block';

	// Hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	},3000);


	// clear form
	document.getElementById('contact').reset();
};


// function to get form values
function getInputVal(id){
	return document.getElementById(id).value();
}

// save message to firebase
function saveMessage(name, tel, email, message){
	var newMessageRef = messagesRef.push();
		newMessageRef.set({
		name: name,
		tel: tel,
		email: email,
		message: message
		})

}