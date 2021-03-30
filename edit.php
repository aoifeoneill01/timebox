<?php

include 'mysql-conn.php';


// DELETE TASK

if(isset($_POST['delete'])) {

    $id = mysqli_real_escape_string($conn, $_POST['id']);

    $queryDelete = "DELETE FROM users WHERE id = $id";

    //check query connection
   if(mysqli_query($conn, $queryDelete)) {
     header('Location: day.php');
   //echo 'Done';
   } else {
     echo 'Delete request error';
   }
 }

// EDIT TASK INPUT

 if(isset($_POST['submit-edit'])) {

     $id = mysqli_real_escape_string($conn, $_POST['id']);
     $name = mysqli_real_escape_string($conn, $_POST['name']);
     $date = mysqli_real_escape_string($conn, $_POST['date']);
     $startHours = mysqli_real_escape_string($conn, $_POST['startHours']);
     $startMins = mysqli_real_escape_string($conn, $_POST['startMins']);
     $endHours = mysqli_real_escape_string($conn, $_POST['endHours']);
     $endMins = mysqli_real_escape_string($conn, $_POST['endMins']);
     $project = mysqli_real_escape_string($conn, $_POST['project']);
     $tag = mysqli_real_escape_string($conn, $_POST['tag']);
     $priority = mysqli_real_escape_string($conn, $_POST['priority']);

     $queryUpdate = "UPDATE users SET name ='$name', date = '$date', startHours='$startHours', startMins='$startMins',
     endHours='$endHours', endMins='$endMins', project='$project', tag='$tag', priority='$priority' WHERE id = $id";

     //check query connection
    if(mysqli_query($conn, $queryUpdate)) {
      header('Location: day.php');
    //echo 'Done';
    } else {
      echo 'Update request error';
    }
  }

 ?>
