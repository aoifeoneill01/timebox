/*jshint esversion: 6 */

var hourN = new Date().getHours();

function scrollHour(){

  switch (hourN){
    case 3:
    document.getElementById("row01").scrollIntoView();
    break;
    case 5:
    document.getElementById("row03").scrollIntoView();
    break;
    case 7:
    document.getElementById("row05").scrollIntoView();
    break;
    case 8:
    document.getElementById("row06").scrollIntoView();
    break;
    case 9:
    document.getElementById("row07").scrollIntoView();
    break;
    case 10:
    document.getElementById("row08").scrollIntoView();
    break;
    case 11:
    document.getElementById("row09").scrollIntoView();
    break;
    case 12:
    document.getElementById("row10").scrollIntoView();
    break;
    case 13:
    document.getElementById("row11").scrollIntoView();
    break;
    case 14:
    document.getElementById("row12").scrollIntoView();
    break;
    case 15:
    document.getElementById("row13").scrollIntoView();
    break;
    case 16:
    document.getElementById("row14").scrollIntoView();
    break;
    case 17:
    document.getElementById("row15").scrollIntoView();
    break;
    case 18:
    document.getElementById("row16").scrollIntoView();
    break;
    case 19:
    document.getElementById("row17").scrollIntoView();
    break;
    case 20:
    document.getElementById("row18").scrollIntoView();
    break;
    case 21:
    document.getElementById("row19").scrollIntoView();
    break;
    case 22:
    document.getElementById("row20").scrollIntoView();
    break;
    default:
      text = "No value found";
 }
}
