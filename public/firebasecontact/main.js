main.js

console.log("it works")

$(Document).ready(function() {
	$('Submit').Click(function (event){
		event.preventDefault()
		console.log('Clicked Button')

		var name = $('name').val()
		var tel = $('tel').val()
		var email = $('email').val()
		var message = $('message').val()
		var statusElm = $('status')
		statusElm.empty()

		if(name.length >= 3) {
			statusElm.append('<div>name is valid</div>')
		} else {
			statusElm.append('<div>name Is not valid</div>')
		}

		if(tel.length >= 10) {
			statusElm.append('<div>tel is valid</div>')
		} else {
			statusElm.append('<div>tel Is not valid</div>')
		}

		if(email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>')
		} else {
			statusElm.append('<div>Email Is not valid</div>')
		}


		if(message.length > 10) {
			statusElm.append('<div>message is valid</div>')
		} else {
			statusElm.append('<div>message Is not valid</div>')
		}
	})
})

name, tel, email , message