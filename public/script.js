const form=document.getElementById('taskform')
const tasklist=document.querySelector('#tasklist')

form.addEventListener('submit', function(event){
    // blocks default submission behavior
    event.preventDefault();
    console.log(form.elements.runName)
    
})





















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
taskList.push(task)
}

