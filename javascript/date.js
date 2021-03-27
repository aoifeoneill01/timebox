/*jshint esversion: 6 */
var dayViewDate;
var theDate = Date.now();

if (!Date.now) {
  Date.now = function() {
    return new Date().getTime();
  };
}

function changeDateBack(){
  theDate -= 86400000;
  document.querySelector(".todays-date").innerText = getTheDate(theDate);
  document.querySelector(".todays-day-view").innerText = getDDate(theDate);
  document.querySelector(".todays-date-view").innerText = getTDate(theDate);
}

function changeDateForward(){
  theDate += 86400000;
  document.querySelector(".todays-date").innerText = getTheDate(theDate);
  document.querySelector(".todays-day-view").innerText = getDDate(theDate);
  document.querySelector(".todays-date-view").innerText = getTDate(theDate);
}


   function getTheDate(getDate) {
     var days = ['0', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
     var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
     var changeDate = new Date(getDate);

    return changeDate.getFullYear() + '-' + months[changeDate.getMonth()] + '-' + days[changeDate.getDate()];
    }

    function getDDate(getDate) {
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
      var changeDDate = new Date(getDate);

     return days[changeDDate.getDay()];
     }

   function getTDate(getDate) {
     var monthsT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
     var cDate = new Date(getDate);

    return cDate.getDate() + ' ' + monthsT[cDate.getMonth()] + ' ' + cDate.getFullYear();
    }


document.querySelector(".todays-date").innerHTML =  getTheDate(theDate);
document.querySelector(".todays-day-view").innerHTML = getDDate(theDate);
document.querySelector(".todays-date-view").innerHTML = getTDate(theDate);
