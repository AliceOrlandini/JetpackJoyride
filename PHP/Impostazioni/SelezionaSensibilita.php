<?php

    require_once "../../Connection.php";

    $sensibilita = $_POST["sensibilita"];

    // Controllo se questa sensibilità è già stata impostata
    $sql = "SELECT Sensibilita
            FROM UTENTE
            WHERE Username ='".$_SESSION['username']."';";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $sensPrec = $row['Sensibilita'];

    if($sensPrec == $sensibilita){
        echo "-2";
        return;
    }

    // Seleziono la nuova sensibilita
    $sql = "UPDATE UTENTE
            SET Sensibilita = ".$sensibilita."
            WHERE Username ='".$_SESSION['username']."';";

    // Se la query e' andata a buon fine ritorno alle impostazioni
    if ($conn->query($sql)){
        echo "1";
    }
    else{
        echo "Impossibile aggiornare sensibilità";
    }
    $conn->close();
?>