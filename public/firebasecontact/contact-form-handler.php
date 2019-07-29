<?php
	$name = $_Post['name'];
	$visitor_email = $_Post['email'];
	$_message = $_POST['message']

	$email_from = 'lesliehorne420lh@gmail.com'

	$email_subject = 'New Form Submission'

	$email_body = "User Name: $name.\n".
					"user_Email: $visitor_email.\n".
						"User_message: $message.\n";




	$to = "lesliehorne99@outlook.com";

	$headers = "from: $email_from \r\n";

	$headers .= "Reply-to: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("location: Contact.html");
?>