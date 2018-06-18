<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "phonebook";


    try {
        $search = filter_var($_GET['search'], FILTER_SANITIZE_STRING);
        $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
        $stmt = $conn->query("
            SELECT * FROM telephone_numbers where status=1
            AND last_name LIKE '%$search%'
        ");
        echo json_encode($stmt->fetchAll(\PDO::FETCH_ASSOC));
    }
    catch(PDOException $e){
        throw new \Exception('Missing telephone_numbers', 400);
    }
?>
