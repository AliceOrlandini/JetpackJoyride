<?php

    $user = 'root';
    $pass = '';
    $db = 'jetpack_joyride';
    $host = 'localhost';

    $conn = new mysqli($host, $user, $pass, $db);

    session_start();

?>
