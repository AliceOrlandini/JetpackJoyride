<?php 
	require_once "../../Connection.php";

	$gadget = $_POST["gadget"];

	// Controllo che il gadget da selezionare non sia già stato selezionato
	$sql = "SELECT NomeGadget
		    FROM POSSIEDE
			WHERE Selezionato = 1
				  AND NomeUtente='".$_SESSION['username']."'
				  AND NomeGadget = '".$gadget."';";
	$result = $conn->query($sql);
	if($result->num_rows > 0){
		echo "-2";
		return;
	}


	// Deseleziono il gadget che prima era selezionato
	$sql = "UPDATE POSSIEDE
		    SET Selezionato = 0 
		    WHERE NomeUtente='".$_SESSION['username']."'";
	$conn->query($sql);

	// Seleziono il nuovo gadget
	$sql = "UPDATE POSSIEDE 
		    SET Selezionato = 1 
		    WHERE NomeUtente='".$_SESSION['username']."'
		    	  AND NomeGadget='".$gadget."'";

	// Se la query e' andata a buon fine ritorno allo shop
	if ($conn->query($sql) === TRUE){
		$_SESSION['gadget'] = $gadget;
		echo "1";
	} 
	else{
    	echo "-1";
	}

    $conn->close();
?>