<?php 

	require_once "../../Connection.php";

	$gadget = $_POST["gadget"];

	// Cerco se l'utente ha quel gadget
	$sql = "SELECT *
			FROM POSSIEDE
			WHERE NomeUtente = '".$_SESSION['username']."' 
		  		  AND NomeGadget = '".$gadget."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
		echo "-1";
		$conn->close();
		return;
	}

	// Prendo il costo del gadget
	$sql = "SELECT Costo 
			FROM GADGET 
			WHERE Nome = '".$gadget."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $costo = $row["Costo"];
	
	// Prendo le monete possedute dall'utente
	$sql = "SELECT Monete 
			FROM UTENTE 
			WHERE Username = '".$_SESSION['username']."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $monete = $row["Monete"];

	if($monete < $costo){
		echo "-2";
		$conn->close();
		return;
	}

	echo $costo;
	
	$conn->close();
?>