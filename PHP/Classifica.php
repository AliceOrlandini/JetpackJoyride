<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../CSS/JetpackJoyride.css">
	<link rel=icon href=./../Icona.png type="image/png">
	<title>
		Jetpack Joyride Classifica
	</title>
</head>
<body>
	<div id="playgroundWrapper">
		<div id="playground">
			<h1 class='font shadow4 size4 margin0'>CLASSIFICA</h1>
			<?php 
				require_once "../Connection.php";

				// Cerco i migliori 10 giocatori
				$sql = "SELECT Username,Record 
						FROM UTENTE
						ORDER BY Record DESC 
						LIMIT 10";
				$result = $conn->query($sql);
				if($result->num_rows > 0){
  					
  					$posizione = 1;
    				while($row = $result->fetch_assoc()) {
						// Se è l'utente lo stampo di un altro colore
    					if($row['Username'] == $_SESSION['username']){
							echo "<h1 style='color:#2FAAE8;' class='font shadow4 size3 margin0'>".$posizione.') '.$row["Username"].' >>> '.$row['Record'].' metri'."</h1>";
						}
						else
        					echo "<h1 class='font shadow4 size3 margin0'>".$posizione.') '.$row["Username"].' >>> '.$row['Record'].' metri'."</h1>";
        				$posizione++;
    				}
				} 
				else{
    				echo "<h1 class='font shadow4 size3 margin0'>La classifica è vuota</h1>";
    			}
    			$conn->close();
			?>
			<br>
			<br>
			<a class='menu font shadow4 size3 textDecorationNone exit' href="./PaginaPersonale.php">ESCI</a>	
		</div>
	</div>
</body>
</html>