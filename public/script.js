const form=document.getElementById('taskform')
const tasklistElem=document.querySelector('#tasklist')

// Event listener for form submission
form.addEventListener('submit', function(event){
    // blocks default submission behavior
    event.preventDefault();
   // Extract form input values and pass them to addTask function
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

// dynamically sets max date value to present day
runDate.max = new Date().toISOString().split("T")[0];

// Function to format date as dd/mm/yyyy
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


// I TRIED TO IMPLEMENT A TOOLTIP WHOSE CURSOR INTERACTIVITY WOULD CHANGE BASED 
// ON SCREEN SIZE (TOOLTIP THAT IS DISPLAYS ON HOVER FOR SCREENS LARGER THAN 1000PX AND 
//   SUCH THAT IT IS DISPLAYED ON CLICK FOR SCREENS LESS THAN 1000PX)

// I tried to implement this feature as a mobile version would utilize a hover functionality

// I tried to create this function where I've added two functions showTooltip() and hideTooltip() 
// to handle the display of the tooltip. The event listener for mouseover checks the maximum
//  width condition and shows the tooltip only if the width is less than 1000px. Similarly, the 
//  event listener for click also checks the maximum width condition before showing the tooltip.

// However, this function did not end up working because i kept getting a classList error when i ran this 
// on a local server

// document.addEventListener("DOMContentLoaded", function() {
//   const tooltipContainer = document.querySelector(".tooltip");
//   const isSmallScreen = window.innerWidth < 1000;
  
//   // Function to show the tooltip
//   function showTooltip() {
//     const tooltipText = tooltipContainer.querySelector(".tooltip-text");
//     tooltipText.style.display = "block";
//   }

//   // Function to hide the tooltip
//   function hideTooltip() {
//     const tooltipText = tooltipContainer.querySelector(".tooltip-text");
//     tooltipText.style.display = "none";
//   }

//   // Function to handle tooltip display based on screen size
//   function handleTooltipDisplay() {
//     if (isSmallScreen) {
//       // For screens less than 1000px, show tooltip on click
//       tooltipContainer.addEventListener("click", showTooltip);
//     } else {
//       // For screens larger than 1000px, show tooltip on hover
//       tooltipContainer.addEventListener("mouseenter", showTooltip);
//       tooltipContainer.addEventListener("mouseleave", hideTooltip);
//     }
//   }

//   // Initial setup for tooltip display based on screen size
//   handleTooltipDisplay();

//   // Add event listener to handle tooltip display on window resize
//   window.addEventListener("resize", function() {
//     const newScreenWidth = window.innerWidth;
//     const newScreenIsSmall = newScreenWidth < 1000;

//     if (isSmallScreen !== newScreenIsSmall) {
//       isSmallScreen = newScreenIsSmall;
//       handleTooltipDisplay();
//     }
//   });
// });


// As a result, i decided to implement a simpler function by just having the hover functionality
// without trying to change interactivity based on screen sizes. 
document.addEventListener("DOMContentLoaded", function() {
  const tooltipContainer = document.querySelector(".tooltip");
  const tooltipText = tooltipContainer.querySelector(".tooltip-text");

  // Function to show the tooltip
  function showTooltip() {
    tooltipText.style.display = "block";
  }

  // Function to hide the tooltip
  function hideTooltip() {
    tooltipText.style.display = "none";
  }

  // Show tooltip on hover
  tooltipContainer.addEventListener("mouseover", showTooltip);
  tooltipContainer.addEventListener("mouseout", hideTooltip);
});




// added task object as input parameter for function as it has all the
//  associated values entered in the form

// // Created a new list item with task details and append it to the tasklistElem
// function displayRun(task){

//     // created new element and CHANGE HTML CONTENT
//   let item=document.createElement('li');
//   item.setAttribute('data-id', task.id);
//   item.innerHTML=`<table><tr> 
//     <th>Run Title</th>
//     <th>Date of Run</th>
//     <th>Your Average Pace</th>
//     <th>Run Terrain</th>
//     <th>Run Duration</th>
//   </tr> <tr><td><strong> ${task.name}</strong></td>   <td>${task.dateOfRun}</td>
//    <td> ${task.avgPace}</td>  <td>${task.terrain}</td>  <td>${task.hours} Hours
//     ${task.minutes} Minutes</td>  </tr>  </table>` ; 

// //   appended list item to webpage so that it is displayed
// tasklistElem.appendChild(item)
// form.reset();

 
// // implemented code within function to generate a delete button for each item added and append it to the item
// let delButton=document.createElement('button');
// let delButtonText=document.createTextNode("🗑️");
 
// delButton.appendChild(delButtonText);
// item.appendChild(delButton);


// // added click event listener inside function to add clickability to button and to remove the item from the taskList
// delButton.addEventListener('click', function(event){
// item.remove();
// taskList.forEach(function(taskArrayElement, taskArrayIndex){
//    if(taskArrayElement.id==item.getAttribute('data-id')){
//     taskList.splice(taskArrayIndex, 1)
//    }
// })
// console.log(taskList);
// })
// }
// THE ABOVE FUNCTION WAS NOT UEFUL AS IT GENERATED A NEW TABLE HEADING WITH EACH
// TABLE ROW GENERATED, THIS WAS UNINTUITIVE AND THEREFORE REQUIRED MAJOR CHANGES


// this new function creates singular table heading with subsequent table rows 
// that display the form entry data

function displayRun(task) {
  let table = tasklistElem.querySelector('table');

  // Check if table exists, if not create a new table
  if (!table) {
    table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Run Title</th>
        <th>Run Date</th>
        <th>Time</th>
        <th>Description</th>
        <th>Run Type</th>
        <th>Run Terrain</th>
        <th>Exertion</th>
        <th>Average Pace</th>
        <th>Run Distance</th>
        <th>Run Duration</th>
        
        
        
        
        
        <th id="deleteRow">Delete</th>
      </tr>`;
    tasklistElem.appendChild(table);
  }

  // Create new table row
  let row = document.createElement('tr');
  row.setAttribute('data-id', task.id);
  row.innerHTML = `
    <td><strong>${task.name}</strong></td>
    <td>${formatDate(task.dateOfRun)}</td>
    <td>${task.timeOfDay}</td>
    <td>${task.description}</td>
    <td>${task.category}</td>
    <td>${task.terrain}</td>
    <td>Difficulty Level:${task.exertion}</td>
    <td>${task.avgPace}</td>
    <td>${task.distance} Km</td>
    <td>${task.hours} Hours ${task.minutes} Minutes</td>
    
    
    
    
    
    
    <td id="delIcon">
      <button class="delete-button" data-id="${task.id}">🗑️</button>
    </td>`;

  // Appending the row to the table
  table.appendChild(row);
  form.reset();

  // Implement code within the function to generate a delete button for each item added and append it to the item

  // Added a class "delete-button" to the delete button for styling and event handling
  let deleteButton = row.querySelector('.delete-button');

  // Added click event listener to the delete button to remove the row from the display and the taskList array
  deleteButton.addEventListener('click', function(event) {
    row.remove();
    taskList = taskList.filter((taskItem) => taskItem.id != task.id);
    console.log(taskList);
  });
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

// Function to calculate average pace
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

// Event listener for form submission to toggle button text
document.forms['taskform'].addEventListener('submit', function(event) {
    var elem = document.getElementById("btn");
    // Do something with the form's data here
    this.style['display'] = 'none';
    event.preventDefault();
    elem.value = "Add New Run";

    // Toggle button color when the form is submitted
    btn.style.backgroundColor = colors[index];
    btn.style.color = 'white';

    index = index >= colors.length - 1 ? 0 : index + 1;
});





// function to change button states on clicks
function change(btn)
{
    var elem = document.getElementById("btn");
    if (elem.value=="Add New Run") elem.value ="Discard Activity";
    else elem.value = "Add New Run";
    
   
}

document.getElementById('btn');

let index = 0;

// an array to alternate between red and blue so that red is displayed for delete activity status
const colors = ['red', '#3944bc'];

// created a function so that button color changes on click
btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});


// Event listener for range slider
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
// Function to add a task to the taskList array
function addTask(name, dateOfRun, timeOfDay, 
description, category, terrain, exertion, distance, hours, minutes, 
  distanceMetric){
      let totalPace = calPace (hours,minutes, distance);
      
      
      
let task = {
    name,
    // included code to remove milliseconds and time from date displayed
    // code snippet from : https://stackoverflow.com/questions/25159330/how-to-
    // convert-an-iso-date-to-the-date-format-yyyy-mm-dd
    dateOfRun,
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


addTask("Park run", "2023-5-21", "Morning", "It was a Pleasant run", "Endurance", "Road", "3", 10, 2, 30);


console.log(taskList);// javascript


