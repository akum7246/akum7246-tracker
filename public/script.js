const form=document.getElementById('taskform')
const tasklistElem=document.querySelector('#tasklist')


form.addEventListener('submit', function(event){
    // blocks default submission behavior
    event.preventDefault();
   
    addTask(
        form.elements.runName.value, 
        form.elements.runDate.value,
        form.elements.timeOfDay.value,
        form.elements.runDescription.value,
        form.elements.runType.value,
        form.elements.terrainType.value,
        form.elements.percExertion.value,
        form.elements.runDistance.value,
        form.elements.runHours.value,
        form.elements.runMinutes.value,
        )
        

})
// added task object as input parameter for function as it has all the
//  associated values entered in the form
function displayRun(task){

    // created new element and CHANGE HTML CONTENT
  let item=document.createElement('li');
  item.setAttribute('data-id', task.id);
  item.innerHTML=`<table><tr> 
    <th>Run Title</th>
    <th>Date of Run</th>
    <th>Your Average Pace</th>
    <th>Run Terrain</th>
    <th>Run Duration</th>
  </tr> <tr><td><strong> ${task.name}</strong></td>   <td>${task.dateOfRun}</td>
   <td> ${task.avgPace}</td>  <td>Terrain:${task.terrain}</td>  <td>${task.hours} Hours
    ${task.minutes} Minutes</td> </tr> </table>` ; 

//   appended list item to webpage so that it is displayed
tasklistElem.appendChild(item)
form.reset();

// implemented code within function to generate a delete button for each item added
let delButton=document.createElement('button');
let delButtonText=document.createTextNode("🗑️");
delButton.appendChild(delButtonText);
item.appendChild(delButton);

// added click event listener inside function to add clickability to button
delButton.addEventListener('click', function(event){
item.remove();
taskList.forEach(function(taskArrayElement, taskArrayIndex){
   if(taskArrayElement.id==item.getAttribute('data-id')){
    taskList.splice(taskArrayIndex, 1)
   }
})
console.log(taskList);
})
}










// let task = {

//     name :"Park Run",
//     category :"Long Distance",
//     // used this id property to create unique id everytime
//     id : Date.now(),
//     dateOfRun:new Date ().toISOString(),
//     duration: 1,
//     distance:10,
//     pace:7,
//     exertion:4,
//     terrain:"Road",
//     timeOfDay:"morning",
//     description:"This run was especially hard because it rained...",
//     distanceMetric:"Kilometers",
//     image:"longDistance.jpg",
// }

function calPace(hours, minutes, distance){
    let totalMin = (+hours*60) + (+minutes);
    let avgPace = totalMin/distance;
    return `${avgPace} min/km`
}


// added event listener with if else statement for activity on click to display form 
// when clicked and reset form when clicked again
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('taskform');

  if (form.style.display === 'block') {
    // 👇️ this SHOWS the form
    form.style.display = 'none';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'block';

    // form reset applied to discard user input when user clicks discard activity
    document.getElementById("taskform").reset();
  }
});

document.forms['taskform'].addEventListener('submit', function (event) {
    var elem = document.getElementById("btn");
            // Do something with the form's data here
            this.style['display'] = 'none';
            event.preventDefault();
            elem.value="Add New Activity";
            
            // added if/else statement that connects to submit button so that
            // the "discard activity" switches to "add activity" button when form is submitted
             if (elem.value=="Add New Run") elem.value = "Discard Activity";
    else elem.value = "Add New Run";
        });




// function to change button states on clicks
function change(btn)
{
    var elem = document.getElementById("btn");
    if (elem.value=="Add New Run") elem.value = "Discard Activity";
    else elem.value = "Add New Run";
}



document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById('myRange');
  var output = document.getElementById('length');
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
})

var taskList=[];
// created function called taskList that has all the inputparameters to create task object
function addTask(name, dateOfRun, timeOfDay, 
description, category, terrain, exertion, distance, hours, minutes, 
  distanceMetric){
      let totalPace = calPace (hours,minutes, distance);
      
      
let task = {
    name,
    // included code to remove milliseconds and time from date displayed
    // code snippet from : https://stackoverflow.com/questions/25159330/how-to-
    // convert-an-iso-date-to-the-date-format-yyyy-mm-dd
    dateOfRun:new Date ().toISOString().substring(0, 10),
    timeOfDay,
    description,
    category,
    terrain,
    exertion,
    distance,
    hours,
    minutes,
    
    // used this id property to create unique id everytime
    id : Date.now(),
    // distanceMetric,
    image:"longDistance.jpg",
    avgPace: totalPace,
}
taskList.push(task);
displayRun(task)
}


addTask("Park run", "21/5/23", "morning", "It was a Pleasant run", "Endurance", "Road", "difficult", 10, 2, 30);


console.log(taskList);// javascript


