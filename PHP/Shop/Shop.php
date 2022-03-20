<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<script src="../../JS/Shop.js"></script>
	<link rel="stylesheet" type="text/css" href="../../CSS/JetpackJoyride.css">
	<link rel=icon href=../../Icona.png type="image/png">
	<title>
		Jetpack Joyride Shop
	</title>
</head>
<body>
	<div id="playgroundWrapper">
		<div id="playground">

			<h1 class='titolo font shadow4 size4 inline'>SHOP</h1>

			<img alt='Monete' id='immagineMoneta' src="../../Images/Moneta.png">
			<?php
				require_once "../../Connection.php";
				echo "<h1 class='font shadow4 size4 inline' id='moneta'>".$_SESSION["monete"]."</h1>";
			?>
			<br>
			<br>
			<h1 class="titolo font size3 shadow4">Clicca sull'immagine per comprare il gadget</h1>
			<div>
				<img alt class='immagineShop' onclick="richiestaAcquisto('Ninja')" src='../../Images/Shop/Ninja.png'>
				<img alt class='immagineShop' onclick="richiestaAcquisto('Goku')" src='../../Images//Shop/Goku.png'>
				<img alt class='immagineShop' onclick="richiestaAcquisto('GokuSS')" id="diversa" src='../../Images/Shop/GokuSS.png'>
				<img alt class='immagineShop' onclick="richiestaAcquisto('CascoNero')" src='../../Images/Shop/CascoNero.png'>
				<img alt class='immagineShop' onclick="richiestaAcquisto('CascoRosso')" src='../../Images/Shop/CascoRosso.png'>
				<img alt class='immagineShop' onclick="richiestaAcquisto('Mario')" src='../../Images/Shop/Mario.png'>
			</div>

			<h1 class='titolo font shadow4 size3'>Seleziona il gadget da far indossare al personaggio</h1>

			<form>
  				<select id="qualegadget" name="qualegadget">
    				<?php
						
						// Stampo il gadget selezionato
    					echo "<option selected value=".$_SESSION["gadget"].">".$_SESSION["gadget"]."</option>";
						
						// Stampo le restanti opzioni
						$sql = "SELECT NomeGadget
								FROM POSSIEDE
								WHERE NomeUtente = '".$_SESSION['username']."'
									  AND Selezionato = 0";
						$result = $conn->query($sql);
						if($result->num_rows > 0){

							while($row = $result->fetch_assoc()) {
								echo "<option value=".$row["NomeGadget"].">".$row["NomeGadget"]."</option>";
							}
						}
						// Stampo il non selezionato
						if($_SESSION['gadget'] != 'Non selezionato'){
							echo "<option value='Non selezionato'>Non selezionato</option>";
						}
    					$conn->close();
					?>
  				</select>
  				<br>
				<input id="buttonConfirm" value="CONFERMA" onclick="cambiaGadget()">
			</form>
			<a class='menu font shadow4 size3 textDecorationNone exit' href="../PaginaPersonale.php">ESCI</a>
		</div>
	</div>
</body>
</html>
