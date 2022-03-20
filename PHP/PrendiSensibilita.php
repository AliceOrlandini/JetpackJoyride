<?php
    require_once "../Connection.php";
    
    // Cerco il record attuale e le monete attuali
	$sql = "SELECT Sensibilita
            FROM UTENTE 
            WHERE Username = '".$_SESSION['username']."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    echo $row['Sensibilita'];

    $conn->close();
    return;
?>