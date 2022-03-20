<?php

    require_once "../../Connection.php";

    $gadget = $_POST["gadget"];

    // Creo la query di inserimento in POSSIEDE
	$sql = "INSERT INTO POSSIEDE(NomeUtente,NomeGadget,Selezionato)
            VALUES('".$_SESSION['username']."','".$gadget."',0)";
    
    if($conn->query($sql) === TRUE){

        // Imposto tutti i gadget a non selezionati
        $sql = "UPDATE POSSIEDE
                SET Selezionato = 0
                WHERE NomeUtente = '".$_SESSION['username']."';";
        $result = $conn->query($sql);

        // Imposto quel gadget a selezionato
        $sql = "UPDATE POSSIEDE
                SET Selezionato = 1
                WHERE NomeUtente = '".$_SESSION['username']."'
                      AND NomeGadget = '".$gadget."';";
        $result = $conn->query($sql);
        $_SESSION['gadget'] = $gadget;

        $sql = "SELECT Costo 
                FROM GADGET 
                WHERE Nome = '".$gadget."'";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $costo = $row["Costo"];

        $sql = "SELECT Monete
                FROM UTENTE
                WHERE Username = '".$_SESSION['username']."';";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $differenza = $row['Monete'] - $costo;

        // Tolgo la differenza di monete
        $sql = "UPDATE UTENTE 
                SET Monete = ".$differenza." 
                WHERE Username='".$_SESSION['username']."'";

        if($conn->query($sql) === TRUE){
            $_SESSION['monete'] = $differenza;
            echo $differenza;
            $conn->close();
            return;
        } 
        else{
            echo '-1';
            $conn->close();
            return;
        }
    }
?>