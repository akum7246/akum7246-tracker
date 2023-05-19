let task = {
    name :"Park Run",
    category :"Long Distance",
    // used this id property to create unique id everytime
    id : Date.now(),
    dateOfRun:new Date ().toISOString(),
    duration: 1,
    distance:10,
    pace:7,
    exertion:4,
    terrain:"Road",
    timeOfDay:"morning",
    description:"This run was especially hard because it rained...",
    distanceMetric:"Kilometers",
    image:"longDistance.jpg",
}

console.log(task);

