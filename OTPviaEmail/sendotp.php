<?php
session_start();
	$_SESSION["rand"] = mt_rand(10000,99999);
	
	$subject = "Code";
	$text = "OTP is".$_SESSION["rand"];
	$email = $_POST['email']; // HINT: use preg_replace() to filter the data
	$to = $email;
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	mail($to,$subject,$text)

?>