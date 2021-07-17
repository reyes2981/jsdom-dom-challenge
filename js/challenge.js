// 1. increment the counter every second
//      -- get access to the counter element
//      -- find the current number
//      -- set time to increment number
    
const counter = document.getElementById("counter"); // grab the counter and save in a variable
let seconds = 0; // <- this is the MODEL - variable with an integer stored in it
                        // the arrow function stored as the first argument of setIntervel is part of the CONTROLLER
// let timer = setInterval(updateNumber, 1000); // this is the CONTROLLER - setInterval() is a built in JavaScript function that says "do a thing. on a regular basis" 
  //seconds++;                  // set up a function that increments value of the 'seconds' variable by one
     /* this is the VIEW - setInterval takes in two arguments. The first is an arrow function that is going to run at an interval*/
                       // the second argument is the amount, in milliseconds, it's going to take for that interval

// we can create a function and put the above work inside of it
// we want to seperate the model from the view 

function updateNumber() {
    seconds++;
    counter.innerText = seconds;
}

// 2. increment and decrement counter with +/- button
//      -- get access to the increment/decrement elements
//      -- add event listener to buttons
//      -- hook up functions to make number go up or down

const plus = document.getElementById('plus'); // grab 'plus' and save in a variable
plus.addEventListener("click", incrementNumber)
const minus = document.getElementById('minus'); // grab 'minus' and save in a variable
minus.addEventListener("click", decrementNumber)

function updateNumber() {
 // seconds++;
    counter.innerText = seconds;
}

function incrementNumber() {
    seconds++;
    counter.innerText = seconds;
}

function decrementNumber() {
    seconds--;
    counter.innerText = seconds;
}