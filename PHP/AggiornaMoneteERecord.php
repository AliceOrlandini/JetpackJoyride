<?php 
	require_once "../Connection.php";

	$monete = $_POST["monete"];
	$metri  = $_POST["metri"];

	// Cerco il record attuale e le monete attuali
	$sql = "SELECT Record,Monete 
			FROM UTENTE 
			WHERE Username = '".$_SESSION['username']."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
	$record = $row["Record"];
	$monetePrec = $row["Monete"];

    // Aggiorno il record solo se quello nuovo e' superiore
    if($metri > $record){
    	$sql = "UPDATE UTENTE 
    		    SET Record=".$metri." 
    		    WHERE Username='".$_SESSION['username']."'";
    	$conn->query($sql);
    }

    // Inserisco le monete
	$sql = "UPDATE UTENTE 
		    SET Monete = Monete + ".$monete." 
		    WHERE Username='".$_SESSION['username']."'";

	if ($conn->query($sql) === TRUE){
		$_SESSION['monete'] = $monetePrec + $monete;
    	echo "Aggiornamento avvenuto con successo";
	} 
	else{
    	echo "Error: " . $sql . "<br>" . $conn->error;
	}

    $conn->close();
?>