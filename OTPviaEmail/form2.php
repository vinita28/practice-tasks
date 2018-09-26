<?php
session_start();
$otp= $_POST['otp'];
if($otp == $_SESSION["rand"]){
	echo "logged in";
}
?>