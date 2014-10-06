<?php
	// CONFIGURATION
	$host = "host"; // DAtabase address
	$username = "username"; // Databse username
	$password = "password"; // Database password
	$database = "dbname"; // Database name
	
	$connect = @mysql_connect($host, $username, $password) or die (@mysql_error());
	$selectdb = @mysql_select_db($database, $connect) or die (@mysql_error());

	
	//  DATABSE INSERT
	if(isset($_POST))
	{
		$email = $_POST['email'];
		
		if (empty($email)) {
			$status = false;
		}else{
			@mysql_query("INSERT INTO newsletter SET email='$email'");  // dont forget to change table name if you'll use another table name.
			$status = true;
		}
		
		echo $status;
	}
	
	



?>
