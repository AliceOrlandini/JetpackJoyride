<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<script src="../JS/ValidazioneForm.js"></script>
	<link rel="stylesheet" type="text/css" href="../CSS/JetpackJoyride.css">
	<link rel=icon href=../Icona.png type="image/png">
	<title>
		Jetpack Joyride Registrazione
	</title>
</head>
<body>
	<div id="playgroundWrapper">
		<div id="playground">
			<h1 class="font shadow4 size4">REGISTRAZIONE</h1>
			<br>
			<form name='MyForm' onsubmit="return validateForm()" method="post">
				<label class="font shadow4" for='username'>USERNAME</label>
				<input type='text' name='username' required id='username'>
				<br>
				<label class="font shadow4" for='email'>INDIRIZZO EMAIL</label>
				<input type='text' name='email' required id='email'>
				<br>
				<label class="font shadow4" for='password'>PASSWORD</label>
				<input type='password' name='password' required id='password'>
				<br>
				<label class="font shadow4" for='confermapassword'>CONFERMA PASSWORD</label>
				<input type='password' name='confermapassword' required id='confermapassword'>
				<br>
				<br>
				<input type='submit' value='INVIA'>
			</form>
			<a class='font shadow4 size3 textDecorationNone exit' href="../index.php">ESCI</a>
			<?php

				require_once "../Connection.php";
				
				if($_POST){

					// Prendo l'username, l'email, la password e la conferma
					$username = $_POST["username"]; 
					$email = $_POST["email"];
					$password = $_POST["password"]; 
					$confermapassword = $_POST["confermapassword"];

					// Tolgo gli eventuali tag html dall'username
					$username = strip_tags($username);

					// Crittografo la password
					$hash = password_hash($password, PASSWORD_DEFAULT);
					// Eseguo l'inserimento
					$sql = "INSERT INTO UTENTE (Username,Email,Password,Record,Monete)
							VALUES ('".$username."','".$email."','".$hash."',0,0)";

					// Vado alla pagina personale
					if($conn->query($sql) === TRUE){

						// Imposto le variabili di sessione
						$_SESSION["username"] = $username;
						$_SESSION["password"] = $password;
						$_SESSION["monete"] = 0;
						$_SESSION["gadget"] = "Non selezionato";
						header("location: ./PaginaPersonale.php");
					}
					else{
						echo "<br><h1 class='font shadow4 size3'>USERNAME GIA' IN USO<h1>";
					}
				}
			?>
		</div>
	</div>
</body>
</html>