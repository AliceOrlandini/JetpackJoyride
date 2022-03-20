<?php
    session_start();
    $_SESSION = array();
    session_destroy();
?>
<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./CSS/JetpackJoyride.css">
	<link rel=icon href=./Icona.png type="image/png">
	<title>
		Jetpack Joyride
	</title>
</head>
<body>
	<div id="playgroundWrapper">
		<div id="playground">
			<div class="alignCenter">
				<img id="immagineCopertina" src="./Images/Logo.png" alt="titolo">
			</div>
			<div>
				<h1 class="font shadow4" id="Clicca" onclick="window.location.href='./PHP/Login.php'">CLICCA QUI PER GIOCARE</h1>
			</div>
		</div>
	</div>
</body>
</html>