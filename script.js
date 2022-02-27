// Checking the connection between js and html 
const greetings = "Hello there!"
console.log(greetings);

// Loading in json data
fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));
