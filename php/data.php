<?php 

    $arr = array();
    $con=new mysqli("localhost","root","","phonebook");

    $sql = "SELECT * FROM telephone_numbers";
    if($result = $con->query($sql) ){
        while($row = $result->fetch_assoc()){
            $arr[] = $row;
        }
        echo json_encode($arr);
    }

?>