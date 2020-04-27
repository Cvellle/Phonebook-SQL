<?php 

    $uid = $_POST['uid'];
    $con=new mysqli("localhost","root","","phonebook");
    $sql = "DELETE FROM telephone_numbers WHERE telephone_number_id = '".$uid ."'";

    if($con->query($sql)===TRUE){
        echo 'DELETED';
    }else{
        echo "FAILED";
    }

?>

