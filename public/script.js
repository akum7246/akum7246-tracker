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

var taskList=[];
// created function called taskList that has all the inputparameters to create task object
function addTask(name, category, dateOfRun, 
duration, distance, exertion, terrain,
timeOfDay, description, distanceMetric){
let task = {
    name,
    category,
    // used this id property to create unique id everytime
    id : Date.now(),
    dateOfRun:new Date ().toISOString(),
    duration,
    distance,
    pace:7,
    exertion,
    terrain,
    timeOfDay,
    description,
    distanceMetric,
    image:"longDistance.jpg",
}
taskList.push(task);
displayRun(task)
}

addTask("Park run", "21/5/23", "morning", "Pleasant run", "Endurance", "Road", "difficult", 10, 1);

console.log(taskList);