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
        form.elements.runDuration.value,
        form.elements.runMinutes.value,
        form.elements.runHours.value,
        )
        

})
// added task object as input parameter for function as it has all the
//  associated values entered in the form
function displayRun(task){

    // created new element and CHANGE HTML CONTENT
  let item=document.createElement('li');
  item.setAttribute('data-id', task.id);
  item.innerHTML=`<p> ${task.name} </p>`

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
    let totalMin = ((hours * 60) + minutes);
    let pace = totalMin/distance;
    return `${pace} min/km`
}



var taskList=[];
// created function called taskList that has all the inputparameters to create task object
function addTask(name, dateOfRun, timeOfDay, 
description, category, terrain, exertion, distance, duration, hours, minutes, 
  distanceMetric){
let task = {
    name,
    dateOfRun:new Date ().toISOString(),
    timeOfDay,
    description,
    category,
    terrain,
    exertion,
    distance,
    duration,
    hours,
    minutes,
    // used this id property to create unique id everytime
    id : Date.now(),
    distanceMetric,
    image:"longDistance.jpg",
    pace,
}
let totalPace = calPace (task.hours, task.minutes, task.distance);
task.pace = totalPace
taskList.push(task);
displayRun(task)
}

addTask("Park run", "21/5/23", "morning", "It was a Pleasant run", "Endurance", "Road", "difficult", 10, 1, 2, 30);
addTask("Park", "21/5/23", "morning", "It was a Pleasant run", "Endurance", "Road", "difficult", 10, 1, 2, 30);

console.log(taskList);