<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../../CSS/JetpackJoyride.css">
	<link rel=icon href=../../Icona.png type="image/png">
	<script src="../../JS/Impostazioni.js"></script>
	<title>
		Jetpack Joyride Impostazioni
	</title>
</head>
<body>
	<div id="playgroundWrapper">
		<div id="playground">
			<br>
			<h1 class='titolo font shadow4 size4'>IMPOSTAZIONI</h1>
			<h1 class='titolo font shadow4 size3'>Regola la sensibilita'</h1>

			<form method="post">
  				<select id="qualesensibilita" name="sensibilita">
					<?php

					require_once "../../Connection.php";

					// Cerco la sensibilita impostata dal giocatore
					$sql = "SELECT Sensibilita
					    	FROM UTENTE
					    	WHERE Username = '".$_SESSION['username']."'";

					$result = $conn->query($sql);
    				$row = $result->fetch_assoc();
    				$sensibilita = $row["Sensibilita"];

					// Stampo il valore impostato
					echo "<option value=".$sensibilita.">".$sensibilita."</option>";

					// Stampo i restanti valori
					for($i = 1; $i<6; ++$i){
						if($i != $sensibilita)
							echo "<option value=".$i.">".$i."</option>";
					}
					$conn->close();	
				?>
				</select>
  				<br>
				<input id="buttonConfirm" value="CONFERMA" onclick="aggiornaSensibilita()">
			</form>
			<br>
			<br>
			<a class='font shadow4 textDecorationNone size3 exit' href="../PaginaPersonale.php">ESCI</a>
		</div>
	</div>
</body>
</html>
