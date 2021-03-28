<?php

include 'mysql-conn.php';

//POST INPUTS TO DATABASE
//check POST connection and save to variable
if(isset($_POST['submit'])) {

if(empty($_POST['name'])) {
  echo '* Required';
} else {
  $name = $_POST['name'];
 }

 if(empty($_POST['date'])) {
   echo '* required';
 } else {
   $date = $_POST['date'];
  }

if(empty($_POST['startHours'])) {
  echo '* Required';
} else {
  $startHours = $_POST['startHours'];
 }

 if(empty($_POST['startMins'])) {
   echo '* Required';
 } else {
   $startMins = $_POST['startMins'];
  }

  if(empty($_POST['endHours'])) {
    echo '* Required';
  } else {
    $endHours = $_POST['endHours'];
   }

   if(empty($_POST['endMins'])) {
     echo '* Required';
   } else {
     $endMins = $_POST['endMins'];
    }

 if(empty($_POST['project'])) {
   echo '';
 } else {
   $project = $_POST['project'];
  }

  if(empty($_POST['tag'])) {
    echo '';
  } else {
    $tag = $_POST['tag'];
   }

   if(empty($_POST['priority'])) {
     echo '';
   } else {
     $priority = $_POST['priority'];
    }
}

 $name = mysqli_real_escape_string($conn, $_POST['name']);
 $date = mysqli_real_escape_string($conn, $_POST['date']);
 $startHours = mysqli_real_escape_string($conn, $_POST['startHours']);
 $startMins = mysqli_real_escape_string($conn, $_POST['startMins']);
 $endHours = mysqli_real_escape_string($conn, $_POST['endHours']);
 $endMins = mysqli_real_escape_string($conn, $_POST['endMins']);
 $project = mysqli_real_escape_string($conn, $_POST['project']);
 $tag = mysqli_real_escape_string($conn, $_POST['tag']);
 $priority = mysqli_real_escape_string($conn, $_POST['priority']);


 $query = "INSERT INTO _____(name, date, startHours, startMins, endHours, endMins, project, tag, priority) VALUES('$name', '$date', '$startHours', '$startMins', '$endHours', '$endMins', '$project', '$tag', '$priority')";

 //check query connection
if(mysqli_query($conn, $query)) {
  header('Location: day.php');
//echo 'Added!';
} else {
  echo 'Error input not saved';
};

 ?>
