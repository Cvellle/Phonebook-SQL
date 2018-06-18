<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "phonebook";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
        $statement = $conn->prepare("
            UPDATE telephone_numbers set status = 0 WHERE telephone_number_id=:telephone_number_id
        ");
        $statement->execute(array(
            "telephone_number_id" => $_GET['id']
        ));
    }
    catch(PDOException $e){
        throw new \Exception('Failed to delete telephone number', 400);
    }
    echo json_encode([response=>'success']);

?>
