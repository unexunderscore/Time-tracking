// Checking the connection between js and html 
const greetings = "Hello there!"
console.log(greetings);

// Selecting each of data time
const spentTime = document.getElementsByClassName('time');
const lastTime = document.getElementsByClassName('preTime');

// Selecting out the limits.
const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

let limit = [day, week, month];

fetch("./data.json")
    .then(response => response.json())
    .then(data => {

      for(let i=0; i<=5; i++){
        spentTime[i].textContent = (data[i].timeframes.daily.current + 'hrs')
        lastTime[i].textContent = (data[i].timeframes.daily.previous + 'hrs')
        
      }

    })
    .catch(function (err) {
      console.log("Fetch problem show: " + err.message);
    });

    const previous = document.getElementsByClassName('preData');
    for(let i=0; i<=5; i++){
    previous[i].textContent = 'Yesterday -';
}

day.onclick = function() {
  if(week.classList.contains('chosenTime') || month.classList.contains('chosenTime')){
    week.classList.remove('chosenTime');
    month.classList.remove('chosenTime');
  }
  day.classList.add('chosenTime');
  // Loading in DAILY json data
    fetch("./data.json")
    .then(response => response.json())
    .then(data => {

      for(let i=0; i<=5; i++){
        spentTime[i].textContent = (data[i].timeframes.daily.current + 'hrs')
        lastTime[i].textContent = (data[i].timeframes.daily.previous + 'hrs')
        
      }

    })
    .catch(function (err) {
      console.log("Fetch problem show: " + err.message);
    });
  
    //Selecting the previous section
    const previous = document.getElementsByClassName('preData');
    for(let i=0; i<=5; i++){
    previous[i].textContent = 'Yesterday -';
}
};

week.onclick = function() {
  if(day.classList.contains('chosenTime') || month.classList.contains('chosenTime')){
    day.classList.remove('chosenTime');
    month.classList.remove('chosenTime');
  }
  week.classList.add('chosenTime');
  // Loading in WEEKLY json data
  fetch("./data.json")
  .then(response => response.json())
  .then(data => {

    for(let i=0; i<=5; i++){
      spentTime[i].textContent = (data[i].timeframes.weekly.current + 'hrs')
      lastTime[i].textContent = (data[i].timeframes.weekly.previous + 'hrs')
    
    }

  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });

  //Selecting the previous section
  const previous = document.getElementsByClassName('preData');
  for(let i=0; i<=5; i++){
  previous[i].textContent = 'Last week -';
}
};

month.onclick = function() {
  if(week.classList.contains('chosenTime') || day.classList.contains('chosenTime')){
    week.classList.remove('chosenTime');
    day.classList.remove('chosenTime');
  }
  month.classList.add('chosenTime');
   // Loading in MONTHLY json data
   fetch("./data.json")
   .then(response => response.json())
   .then(data => {
 
     for(let i=0; i<=5; i++){
      spentTime[i].textContent = (data[i].timeframes.monthly.current + 'hrs')
      lastTime[i].textContent = (data[i].timeframes.monthly.previous + 'hrs')
       
     }
 
   })
   .catch(function (err) {
     console.log("Fetch problem show: " + err.message);
   });
 
   //Selecting the previous section
   const previous = document.getElementsByClassName('preData');
   for(let i=0; i<=5; i++){
   previous[i].textContent = 'Last month -';
 }
};