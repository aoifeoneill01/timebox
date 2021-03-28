<?php

include 'mysql-conn.php';

//RETRIEVE DATA FROM DATABASE
//create variable to retrieve data from database
$data = 'SELECT * FROM _____';

// create query to save the data from the connection
$result = mysqli_query($conn, $data);

//save results as an array
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

// put the array into json format
echo json_encode($users);

 ?>
