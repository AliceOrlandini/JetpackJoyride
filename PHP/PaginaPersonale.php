<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<script src="../JS/JetpackJoyride.js"></script>
	<script src="../JS/Audio.js"></script>
	<script src="../JS/Informazioni.js"></script>
	<script src="../JS/FunzioniGioco/GameStatus.js"></script>
	<script src="../JS/FunzioniGioco/Risultati.js"></script>
	<script src="../JS/FunzioniGioco/Esplosione.js"></script>
	<script src="../JS/FunzioniGioco/FunzioniExtra.js"></script>
	<script src="../JS/FunzioniGioco/Personaggio.js"></script>
	<script src="../JS/FunzioniGioco/Elettrodo.js"></script>
	<script src="../JS/FunzioniGioco/Razzo.js"></script>
	<script src="../JS/FunzioniGioco/Monete.js"></script>
	<script src="../JS/FunzioniGioco/Gadget.js"></script>
	<script src="../JS/FunzioniGioco/Sensibilita.js"></script>
	<link rel="stylesheet" type="text/css" href="../CSS/JetpackJoyride.css">
	<link rel=icon href=../Icona.png type="image/png">
	<title>
		Jetpack Joyride Pagina Personale
	</title>
</head>
<body>
	<div id="playgroundWrapper">
		<div id="playground">

			<?php 
				require_once "../Connection.php";
				// Stampo l'username del giocatore
				echo "<h1 class='font shadow4 inline size4'>".$_SESSION['username']."</h1>";
				echo "<img alt='Monete' id='immagineMoneta' src='../Images/Moneta.png'>";
				echo "<h1 class='font shadow4 inline size4'>".$_SESSION["monete"]."</h1>";

				// Cerco il record del giocatore
				$sql = "SELECT Record 
						FROM UTENTE
						WHERE Username = '".$_SESSION['username']."'";
				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				echo "<h1 style='margin-left:8%;' class='font shadow4 inline size4'>Record: ".$row["Record"]." metri</h1>";

    			$conn->close();
			?>
			<br>

			<div>
				<h1 class='font shadow4 size3 cursorPointer exit' onclick="begin()">GIOCA</h1>
				<a class='font shadow4 size3 textDecorationNone exit' href="./Shop/Shop.php">SHOP</a>
				<br>
				<a class='font shadow4 size3 textDecorationNone exit' href="./Classifica.php">CLASSIFICA</a>
				<br>
				<a class='font shadow4 size3 textDecorationNone exit' href="../HTML/Istruzioni.html">ISTRUZIONI</a>
				<br>
				<a class='font shadow4 size3 textDecorationNone exit' href="./Impostazioni/Impostazioni.php">IMPOSTAZIONI</a>
				<br>
				<br>
				<a class='font shadow4 size3 textDecorationNone exit' href="../index.php">ESCI</a>
			</div>
		</div>
	</div>
</body>
</html>