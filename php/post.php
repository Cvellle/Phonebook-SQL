<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "phonebook";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
        $statement = $conn->prepare("
            INSERT INTO telephone_numbers(first_name, last_name, telephone_number, status)
            VALUES(:first_name, :last_name, :telephone_number, :status)
        ");
        $statement->execute(array(
            "first_name"       => $_POST['first_name'],
            "last_name"        => $_POST['last_name'],
            "telephone_number" => $_POST['telephone_number'],
            "status"           => 1
        ));
    }
    catch(PDOException $e){
        throw new \Exception('Failed to insert telephone number', 400);
    }
    echo json_encode([response=>'success']);

?>
