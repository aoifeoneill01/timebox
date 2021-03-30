/*jshint esversion: 6 */

function goDark() {
  document.getElementById("light-x").style.visibility = "hidden";
  document.getElementById("dark-x").style.visibility = "visible";
}

function goLight() {
  document.getElementById("light-x").style.visibility = "visible";
  document.getElementById("dark-x").style.visibility = "hidden";
}

function editFormExit() {
  document.querySelector(".edit-task-background").style.visibility = "hidden";
  document.querySelector("#editTaskForm").style.visibility = "hidden";
  document.getElementById("light-x").style.display = "none";
  document.getElementById("dark-x").style.display = "none";
}
