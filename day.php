 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <link rel="stylesheet" href="css/styles.css">
     <link rel="stylesheet" href="css/add-task.css">
     <link rel="stylesheet" href="css/media-queries.css">
     <link rel="stylesheet" href="https://use.typekit.net/uwy0wtj.css">
     <title>Timebox</title>
         <script src="javascript/today.js"></script>
   </head>

   <?php include 'add-task.html' ?>
   <?php include 'edit-task.html' ?>

   <body onload="getTasks(); scrollHour();">

     <div class="container today" id="today">
       <div class="mobile-menu">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
       </div>
           <div class="tasks-left-column">
            <div class="text-container-left-column">
              <div class="button-container">
                <button type="button" class="create-task button-blue" name="button" onclick="formPopup()">Create Task</button>
              </div>
            <div class="elements-container">
              <div class="sort-container">
                <p class="semibold">Sort by</p>
                <br>
                <div class="sort-element" id="priority" onmouseover="prBlue()" onmouseout="prBlack()">
                  <img id="priority-black" src="images/star.svg" alt="priority icon">
                  <img id="priority-blue" src="images/star-blue.svg" alt="priority icon">
                  <p id="priority-sort">Priority</p>
                </div>
                <div class="list-day" id="list-priorities">
                  <ul id="pink-one"></ul>
                  <ul id="purple-two"></ul>
                  <ul id="green-three"></ul>
                </div>
                <hr>
                <div class="sort-element" id="projects" onmouseover="pBlue()" onmouseout="pBlack()">
                  <img id="projects-black" src="images/project-black.svg" alt="projects icon">
                  <img id="projects-blue" src="images/project-blue.svg" alt="projects icon">
                  <p id="projects-sort">Projects</p>
                </div>
                <ul class="list-day" id="list-projects">
                </ul>
                <hr>
                <div class="sort-element" id="tag" onmouseover="tBlue()" onmouseout="tBlack()">
                  <img id="tag-black" src="images/tag-black.svg" alt="Tag icon">
                  <img id="tag-blue" src="images/tag-blue.svg" alt="Tag icon">
                  <p id="tag-sort">Tag</p>
                </div>
                <ul class="list-day" id="list-tag">
                </ul>
              </div>
            </div>

            </div>
           </div>

           <div class="calendar-right-column">

             <header id="header-day">
               <div class="day-times-contain">
                 <p class="todays-day-view"></p>
                 <p class="todays-date-view"></p>
                 <p class="todays-date"></p>
               </div>
               <div class="calendar-arrows">
                 <button type="button" name="button-back-date" onclick="changeDateBack(); getTasks()" id="back-date"><img src="images/left-arrow.svg" alt="Back arrow"></button>
                 <button type="button" name="button-forward-date" onclick="changeDateForward(); getTasks()" id="for-date"><img src="images/right-arrow.svg" alt="Forward arrow"></button>
               </div>
             </header>

             <table>
               <tr>
                   <th id="column1"></th>
                   <th id="column7"></th>
                   <th class="grey" id="column2">Task</th>
                   <th class="grey" id="column4">Project</th>
                   <th class="grey" id="column5">Tag</th>
                   <th class="grey" id="column3">Priority</th>
                   <th class="grey" id="column6">Status</th>
               </tr>
            <tr id="row00">
               <td><div class="table-time-container" id="time00"><span class="hours">00</span>:00</div></td>
            </tr>
            <tr id="row01">
              <td><div class="table-time-container" id="time01"><span class="hours">01</span>:00</div></td>
            </tr>
            <tr id="row02">
              <td><div class="table-time-container" id="time02"><span class="hours">02</span>:00</div></td>
            </tr>
            <tr id="row03">
               <td><div class="table-time-container" id="time04"><span class="hours">03</span>:00</div></td>
            </tr>
            <tr id="row04">
               <td><div class="table-time-container" id="time04"><span class="hours">04</span>:00</div></td>
            </tr>
            <tr id="row05">
              <td><div class="table-time-container" id="time05"><span class="hours">05</span>:00</div></td>
            </tr>
            <tr id="row06">
               <td><div class="table-time-container" id="time06"><span class="hours">06</span>:00</div></td>
            </tr>
            <tr id="row07">
              <td><div class="table-time-container" id="time07"><span class="hours">07</span>:00</div></td>
            </tr>
            <tr id="row08">
               <td><div class="table-time-container" id="time08"><span class="hours">08</span>:00</div></td>
            </tr>
            <tr id="row09">
              <td><div class="table-time-container" id="time09"><span class="hours">09</span>:00</div></td>
            </tr>
            <tr id="row10">
               <td><div class="table-time-container" id="time10"><span class="hours">10</span>:00</div></td>
            </tr>
            <tr id="row11">
             <td><div class="table-time-container" id="time11"><span class="hours">11</span>:00</div></td>
            </tr>
            <tr id="row12">
              <td><div class="table-time-container" id="time12"><span class="hours">12</span>:00</div></td>
            </tr>
            <tr id="row13">
              <td><div class="table-time-container" id="time13"><span class="hours">13</span>:00</div></td>
            </tr>
            <tr id="row14">
               <td><div class="table-time-container" id="time14"><span class="hours">14</span>:00</div></td>
            </tr>
            <tr id="row15">
              <td><div class="table-time-container" id="time15"><span class="hours">15</span>:00</div></td>
           </tr>
           <tr id="row16">
             <td><div class="table-time-container" id="time16"><span class="hours">16</span>:00</div></td>
           </tr>
           <tr id="row17">
             <td><div class="table-time-container" id="time17"><span class="hours">17</span>:00</div></td>
           </tr>
           <tr id="row18">
             <td><div class="table-time-container" id="time18"><span class="hours">18</span>:00</div></td>
           </tr>
           <tr id="row19">
             <td><div class="table-time-container" id="time19"><span class="hours">19</span>:00</div></td>
           </tr>
           <tr id="row20">
             <td><div class="table-time-container" id="time20"><span class="hours">20</span>:00</div></td>
           </tr>
           <tr id="row21">
             <td><div class="table-time-container" id="time21"><span class="hours">21</span>:00</div></td>
           </tr>
           <tr id="row22">
             <td><div class="table-time-container" id="time22"><span class="hours">22</span>:00</div></td>
           </tr>
           <tr id="row23">
             <td><div class="table-time-container" id="time23"><span class="hours">23</span>:00</div></td>
           </tr>
             </table>
             <div class="button-container-mobile">
               <button type="button" class="create-task" id="mobile-btn" name="button" onclick="formPopup()"><img src="images/plus.svg" alt="create task"></button>
             </div>
          </div>
        </div>

</div>

    <script src="javascript/date.js"></script>
    <script src="javascript/time-pick.js"></script>
    <script src="javascript/day-scripts.js"></script>
  <!--    <script src="javascript/scripts-new.js"></script>
    <script src="javascript/status.js"></script>
    <script src="javascript/time-pick-edit.js"></script>
    <script src="javascript/task-complete.js"></script>
    <script src="javascript/sort-elements-day.js"></script>
-->


   </body>
 </html>
