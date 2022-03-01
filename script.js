// Checking the connection between js and html 
const greetings = "Hello there!"
console.log(greetings);



// Selecting out the limits.
const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

let limit = [day, week, month];



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
        console.log(data[i].title + ': ' + data[i].timeframes.daily.current)
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
      console.log(data[i].title + ': ' + data[i].timeframes.weekly.current)
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
       console.log(data[i].title + ': ' + data[i].timeframes.monthly.current)
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




   