/* jshint esversion:6 */

class Task{
  constructor(id, name, date, startHours, startMins, endHours, endMins, project, tag, priority){
    this.id = id;
    this.name = name;
    this.date = date;
    this.startHours = startHours;
    this.startMins = startMins;
    this.endHours = endHours;
    this.endMins = endMins;
    this.project = project;
    this.tag = tag;
    this.priority = priority;
  }
  viewTasks(){
    let dayView = document.querySelector(".todays-date").textContent;


    document.querySelectorAll(".hours").forEach(value => {
      if(this.startHours === value.innerHTML && this.date === dayView){

         value.parentNode.parentNode.parentNode.innerHTML =

    `<td><div class="table-time-container"><span class="hours">${value.innerHTML}</span>:00</div></td>
    <td><div class="row-container" id="row-first-container"><div class="time-bg">${this.startHours}:<span class="time-mins">${this.startMins}</span></div></div></td>
    <td><div class="row-container rows"><div class="task-name-container mins"><div id="task">${this.name}</div></div></div></td>
    <td><div class="row-container"><div class="project-icon mins project-bg">${this.project}</div></div></td>
    <td><div class="row-container"><div class="mins project-bg">#${this.tag}</div></div></td>
    <td><div class="row-container"><div class="task-priority mins project-bg">${this.priority}</div></div></td>
    <div class="hide">${this.startHours}</div>
    <div class="hide">${this.startMins}</div>
    <div class="hide">${this.endHours}</div>
    <div class="hide">${this.endMins}</div>
    <div class="hide">${this.id}</div>
    <td id="status">
      <div class="row-container">
    <div class="st mins status-bg">
      <button type="button" name="button-status-edit" class="btn-tasks" id="edit">
        <img src="images/pencil-black.svg" alt="edit task icon" id="pencil-img"></button>
   </div>
   </div>
   </td>`;
 } else if(this.startHours === value.innerHTML && this.date !== dayView){

   value.parentNode.parentNode.parentNode.innerHTML =
   `<td><div class="table-time-container"><span class="hours">${value.innerHTML}</span>:00</div></td><td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>`;
 }
   });
}
  getPriority(){
    document.querySelectorAll(".task-priority").forEach(value => {
      if(value.innerHTML == 'pinkStar'){
      const taskBg = value.parentNode.parentNode.previousElementSibling.previousElementSibling
      .previousElementSibling.firstElementChild.firstElementChild.firstElementChild;
      return value.classList.add("pink"), taskBg.style.backgroundColor = "rgba(255,0,77,0.15)", taskBg.style.color = "#FF004D";

    } else if(value.innerHTML == 'purpleStar'){
      const taskBg1 = value.parentNode.parentNode.previousElementSibling.previousElementSibling
      .previousElementSibling.firstElementChild.firstElementChild.firstElementChild;
      return value.classList.add("purple"), taskBg1.style.backgroundColor = "rgba(86,0,255,0.15)", taskBg1.style.color = "#5600FF";

    } else if(value.innerHTML == 'greenStar'){
      const taskBg2 = value.parentNode.parentNode.previousElementSibling.previousElementSibling
      .previousElementSibling.firstElementChild.firstElementChild.firstElementChild;
      return value.classList.add("green"), taskBg2.style.backgroundColor = "rgba(32,152,112,0.15)", taskBg2.style.color = "#209870";
    }
    });
  }
    timeSlot(){
    let finalST;
    let finalET;

    if(this.startMins == '00'){
       finalST = (this.startHours + (this.startMins / 0.60)) * 10;
    } else {
       finalST = this.startHours + (this.startMins / 0.60);
    }

    if(this.endMins == '00'){
       finalET = (this.endHours + (this.endMins / 0.60)) * 10;
    } else {
       finalET = this.endHours + (this.endMins / 0.60);
    }

    const timeSpent = (finalET - finalST) / 25;
    const durationTotal = (timeSpent * 37.5).toString() + 'px';

    document.querySelectorAll(".row-container").forEach(container => {
       container.style.height = durationTotal;
    });
  }
 startBlock(){
   document.querySelectorAll(".time-mins").forEach(time => {
     var myArr = time.parentNode.parentNode.parentNode.parentNode.childNodes;

     if(time.innerHTML == '00'){
       time.parentNode.style.color = 'white';
    }
    else if(time.innerHTML == '15'){
   return myArr[2].style.top = '37.5px',
    myArr[4].style.top = '37.5px',
    myArr[6].style.top = '37.5px',
    myArr[8].style.top = '37.5px',
    myArr[10].style.top = '37.5px',
    myArr[22].style.top = '37.5px';
    }
      else if(time.innerHTML == '30'){
    return myArr[2].style.top = '75px',
    myArr[4].style.top = '75px',
    myArr[6].style.top = '75px',
    myArr[8].style.top = '75px',
    myArr[10].style.top = '75px',
    myArr[22].style.top = '75px';
    }
      else if(time.innerHTML == '45'){
    return myArr[2].style.top = '112.5px',
    myArr[4].style.top = '112.5px',
    myArr[6].style.top = '112.5px',
    myArr[8].style.top = '112.5px',
    myArr[10].style.top = '112.5px',
    myArr[22].style.top = '112.5px';
    }
  });
}
editTask(){
  document.querySelectorAll('.btn-tasks').forEach(item => {
    item.addEventListener('click', editTask => {

    document.querySelector(".edit-task-background").style.visibility = "visible";
    document.querySelector("#editTaskForm").style.visibility = "visible";
    document.getElementById("light-x").style.display = "block";
    document.getElementById("dark-x").style.display = "block";

    let todaysdate = document.querySelector(".todays-date").textContent;

    const myInputs = item.parentNode.parentNode.parentNode.parentNode.childNodes;

    document.getElementById("name-edit").value = myInputs[4].innerText;
    document.getElementById("date-edit").value = todaysdate;
    document.getElementById("edit-hours").value = myInputs[12].innerText;
    document.getElementById("edit-mins").value = myInputs[14].innerText;
    document.getElementById("edit-hours2").value = myInputs[16].innerText;
    document.getElementById("edit-mins2").value = myInputs[18].innerText;
    document.getElementById("edit-tag").value = myInputs[8].innerText;
    document.getElementById("project-edit").value = myInputs[6].innerText;
    document.getElementById("id-edit").value = myInputs[20].innerText;

    if(myInputs[10].innerText == 'pinkStar'){
       document.getElementById("p-star-edit").checked = "true";
    } else if(myInputs[10].innerText == 'purpleStar'){
      document.getElementById("pu-star-edit").checked = "true";
    } else if (myInputs[10].innerText == 'greenStar'){
       document.getElementById("g-star-edit").checked = "true";
    }

  });
  });

 }
}

function getTasks(){

    fetch('retrieve.php').then(response => {
    return response.json();
  }).then(data => {

    // CREATE INDIVIDUAL CLASSES
    data.forEach(item => {

      let taskItem = new Task(item.id, item.name, item.date, item.startHours, item.startMins, item.endHours, item.endMins,
         item.project, item.tag, item.priority);

     taskItem.viewTasks();
     taskItem.getPriority();
     taskItem.timeSlot();
     taskItem.startBlock();
     taskItem.editTask();

      });
  }).catch(err => {
    console.log('Error in fetch request');
  });
}
