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
  item.innerHTML=`<p><strong> ${task.name}</strong> </p> <br> ${task.dateOfRun} <br> ${task.avgPace}` ; 

//   appended list item to webpage so that it is displayed
tasklistElem.appendChild(item)
form.reset();

// implemented code within function to generate a delete button for each item added
let delButton=document.createElement('button');
let delButtonText=document.createTextNode('Delete');
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

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('taskform');

  if (form.style.display === 'block') {
    // 👇️ this SHOWS the form
    form.style.display = 'none';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'block';
  }
});

function change() // no ';' here
{
    var elem = document.getElementById("btn");
    if (elem.value=="Add New Run") elem.value = "Discard Activity";
    else elem.value = "Add New Run";
}


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
    distanceMetric,
    image:"longDistance.jpg",
    avgPace: totalPace,
}
taskList.push(task);
displayRun(task)
}

addTask("Park run", "21/5/23", "morning", "It was a Pleasant run", "Endurance", "Road", "difficult", 10, 2, 30);


console.log(taskList);