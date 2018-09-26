/*function sendemail() {
    var x = document.getElementById("initialize-payment");
	var y = document.getElementById("confirm-email");
     x.style.display = "none";
		y.style.display = "block";
    }
*/	
function _(id){ return document.getElementById(id); }
function sendemail(){
	var x = _("initialize-payment");
	var y = _("confirm-email");
     x.style.display = "none";
		y.style.display = "block";
	
	var formdata = new FormData();
	formdata.append( "email", _("email").value );
	//formdata.append( "e", _("e").value );
	//formdata.append( "m", _("m").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "sendotp.php" );
	ajax.send( formdata );
}
function verifyemail(){
	
	var formdata = new FormData();
	formdata.append( "otp", _("otp").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "form2.php" );
	ajax.send( formdata );
}