/*jshint esversion: 6 */

// Create new task visibility
function formPopup() {
  document.querySelector(".new-task").style.visibility = "visible";
  document.querySelector(".task-background").style.visibility = "visible";
  document.getElementById("new-light-x").style.display = "block";
  document.getElementById("new-dark-x").style.display = "block";
}

function formExit() {
  document.querySelector(".new-task").style.visibility = "hidden";
  document.querySelector(".task-background").style.visibility = "hidden";
  document.querySelector(".exit-1").value = "";
  document.querySelector(".exit-2").value = "";
  document.querySelector(".exit-5").value = "";
  document.querySelector(".exit-6").value = "";
  document.getElementById("new-light-x").style.display = "none";
  document.getElementById("new-dark-x").style.display = "none";
}

// Create task form exit icon
function newGoDark() {
  document.getElementById("new-light-x").style.visibility = "hidden";
  document.getElementById("new-dark-x").style.visibility = "visible";
}

function newGoLight() {
  document.getElementById("new-light-x").style.visibility = "visible";
  document.getElementById("new-dark-x").style.visibility = "hidden";
}


// Today calendar view
function weekOn() {
  document.getElementById("today-view-date").style.color = "#3D3D3D";
  document.getElementById("today-view-date").style.backgroundColor = "rgba(255,255,255,0)";
}
function weekOff() {
  document.getElementById("today-view-date").style.color = "#5677FF";
  document.getElementById("today-view-date").style.backgroundColor = "white";
}

// Sort elements hover states
function prBlue() {
  document.getElementById("priority-blue").style.visibility = "visible";
  document.getElementById("priority-black").style.visibility = "hidden";
  document.getElementById("priority-sort").style.color = "#5677FF";
}

function prBlack() {
  document.getElementById("priority-blue").style.visibility = "hidden";
  document.getElementById("priority-black").style.visibility = "visible";
  document.getElementById("priority-sort").style.color = "#3D3D3D";
}

function pBlue() {
  document.getElementById("projects-blue").style.visibility = "visible";
  document.getElementById("projects-black").style.visibility = "hidden";
  document.getElementById("projects-sort").style.color = "#5677FF";
}

function pBlack() {
  document.getElementById("projects-blue").style.visibility = "hidden";
  document.getElementById("projects-black").style.visibility = "visible";
  document.getElementById("projects-sort").style.color = "#3D3D3D";
}

function tBlue() {
  document.getElementById("tag-blue").style.visibility = "visible";
  document.getElementById("tag-black").style.visibility = "hidden";
  document.getElementById("tag-sort").style.color = "#5677FF";
}

function tBlack() {
  document.getElementById("tag-blue").style.visibility = "hidden";
  document.getElementById("tag-black").style.visibility = "visible";
  document.getElementById("tag-sort").style.color = "#3D3D3D";
}

document.querySelector(".mobile-menu").addEventListener('click', showSort);
function showSort() {
document.querySelector(".tasks-left-column").classList.toggle('toggleDisplay');
}
