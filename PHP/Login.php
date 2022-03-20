<!DOCTYPE html>
<html lang="it">
<head>
	<meta name="author" content="Alice Orlandini">
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../CSS/JetpackJoyride.css">
	<link rel=icon href=../Icona.png type="image/png">
	<title>
		Jetpack Joyride Login
	</title>
</head>
<body>
    <div id="playgroundWrapper">
		<div id="playground">
            <div id="formLogIn">
                <h1 class="font shadow4 size4">LOGIN</h1><br>
            </div>
            <form name="form_login" method="post">
                <label class="font shadow4" for="username">USERNAME</label><br>
                <input type="text" required name="username" id="username">
                <br>
                <label class="font shadow4" for="username">PASSWORD</label><br>
                <input type="password" required name="password" id="password">
                <br>
                <input name="invia" type="submit" value="ENTRA">
            </form>
            <button id="registrati" onclick="window.location.href = './Registrazione.php';">REGISTRATI</button>
            <br>
            <a class='font shadow4 size3 textDecorationNone exit' href="../index.php">ESCI</a>
            <?php
            
                require_once "../Connection.php";
                
                if($_POST){

                    $username = $_POST['username'];
                    $password = $_POST['password'];

                    $sql = "SELECT NomeGadget
                            FROM POSSIEDE 
                            WHERE NomeUtente = '".$username."' 
                                  AND Selezionato = 1;";
                    $result = $conn->query($sql);
                    if($result->num_rows == 0){
                        $gadget = 'Non selezionato';
                    }
                    else{
                        $row = $result->fetch_assoc();
                        $gadget = $row['NomeGadget'];
                    }

                    // Prendo username password e monete
                    $sql = "SELECT Username, Password, Monete
                            FROM UTENTE 
                            WHERE BINARY Username = '".$username."';";
                    $result = $conn->query($sql);
                    $row = $result->fetch_assoc();
                    $monete = $row['Monete'];

                    // Se ho trovato quell'usermame e quella password
                    if($result->num_rows > 0){

                        if(password_verify($_POST['password'], $row['Password'])){

                            // Imposto le variabili di sessione
                            $_SESSION["username"] = $username;
                            $_SESSION["password"] = $password;
                            $_SESSION["monete"] = $monete;
                            $_SESSION["gadget"] = $gadget;
                            
                            // Vado alla pagina personale
                            header("location: ./PaginaPersonale.php");
                        }
                        else{
                            // Stampo il messaggio di errore
                            echo "<br><h1 class='font shadow4 size3'>Username o password non validi</h1>";
                        }
                    }
                    else{
                        // Stampo il messaggio di errore
                        echo "<br><h1 class='font shadow4 size3'>Username o password non validi</h1>";
                    }
                }
                $conn->close();
            ?>
        </div>
    </div>
</body>
</html>