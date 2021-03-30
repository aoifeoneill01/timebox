/*jshint esversion: 6 */

// TAG SORT ELEMENT
document.getElementById("tag-sort").addEventListener('click', showTags => {

var dayView = document.querySelector(".todays-date").textContent;

var xhrSort = new XMLHttpRequest();
xhrSort.open('POST', 'retrieve.php', true);

xhrSort.onload = function(){
  if(xhrSort.status == 200){
  var responseSort = JSON.parse(xhrSort.responseText);

  const todaysTags = responseSort.filter((values) => {
    return values.date === dayView; });

       var nameFinal = '';
       for(var b in todaysTags){
       nameFinal += '<li><span class="firstBlue">#'+todaysTags[b].tag+'</span><br>'+todaysTags[b].name+'</li>'
     ;}

document.getElementById("list-tag").innerHTML = nameFinal;
document.getElementById("list-tag").classList.toggle("visible");

}};
xhrSort.send();
});


// PROJECT SORT ELEMENT
document.getElementById("projects-sort").addEventListener('click', showProjects => {

var dayView = document.querySelector(".todays-date").textContent;

var xhr = new XMLHttpRequest();
xhr.open('POST', 'retrieve.php', true);

xhr.onload = function(){
  if(xhr.status == 200){
  var response = JSON.parse(xhr.responseText);

  const todaysProjects = response.filter((values) => {
    return values.date === dayView; });

let uniqueProjects = todaysProjects .reduce((total, amount) => {
  todaysProjects .forEach( val => {
    if (total.indexOf(val.project) === -1){
     total.push(val.project);
    }
  });
  return total;
}, []);

var projectFinal = '';
for(var d in uniqueProjects){
projectFinal += '<li><span class="firstBlue">'+uniqueProjects[d]+'</span></li>'
;}

document.getElementById("list-projects").innerHTML = projectFinal;
document.getElementById("list-projects").classList.toggle("visible");

}};
xhr.send();
});

// PRIORITY SORT ELEMENTS
document.getElementById("priority-sort").addEventListener('click', showPriorities => {

var dayView = document.querySelector(".todays-date").textContent;

var xhrPrior = new XMLHttpRequest();
xhrPrior.open('POST', 'retrieve.php', true);

xhrPrior.onload = function(){
  if(xhrPrior.status == 200){
  var responsePrior = JSON.parse(xhrPrior.responseText);

//PINK STAR PRIORITY
var pink = responsePrior.filter(values => {
  return values.priority == 'pinkStar' && values.date == dayView;
});

  var priorName = '';
  for(var d in pink){
  priorName +=
  '<li>'+ pink[d].name+'</li>'
  ;}

  //PURPLE STAR PRIORITY
  var purple = responsePrior.filter(values => {
    return values.priority == 'purpleStar' && values.date == dayView;
  });

    var priorName2 = '';
    for(var e in purple){
    priorName2 +=
    '<li>'+ purple[e].name+'</li>'
    ;}

  //GREEN STAR PRIORITY
  var green = responsePrior.filter(values => {
    return values.priority == 'greenStar' && values.date == dayView;
    });

      var priorName3 = '';
      for(var f in green){
      priorName3 +=
      '<li>'+ green[f].name+'</li>'
      ;}

if(priorName !== ''){
  document.getElementById("pink-one").innerHTML = '<span class="imgP"><img src="images/pinkStar.svg" alt="Priority one"></span><span class="textP">'+ priorName +'</span';
}

if(priorName2 !== '') {
  document.getElementById("purple-two").innerHTML = '<span class="imgP"><img src="images/purpleStar.svg" alt="Priority two"></span><span class="textP">'+ priorName2 +'</span';
}

if(priorName3 !== '') {
  document.getElementById("green-three").innerHTML = '<span class="imgP"><img src="images/greenStar.svg" alt="Priority three"></span><span class="textP">'+ priorName3 +'</span';
}

document.getElementById("list-priorities").classList.toggle("visible");

}};
xhrPrior.send();
});
