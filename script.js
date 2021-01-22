//JavaScript Timed Math Test//

//Click start button to start timed test//
//"start" button//

//handler//
//event Listener//

//Timer starts//
//Timer starts when button is clicked 


//if start button is clicked then timer starts
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
//var mainEl = document.getElementById("main");

var secondsLeft = 10;

//function setTime() {
  // Sets interval in variable
  //var timerInterval = setInterval(function() {
    //secondsLeft--;
    //timeEl.textContent = secondsLeft;

    //if(secondsLeft === 0) {
      // Stops execution of action at set interval
      //clearInterval(timerInterval);
      // Calls function to create and append image
      //sendMessage();
    //}
//}, 1000);
//}

function countdown() {
    var timeLeft = 10;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
  
// Function to create and append colorsplosion image
//function sendMessage() {
  //timeEl.textContent = " ";
  //var imgEl = document.createElement("img");
  //imgEl.setAttribute("src", "images/image_1.jpg");
  //mainEl.appendChild(imgEl);

}

setTime();


//If timer starts then Question #1 appears//
//Question window.alert box?
//Question loop

//Question #1 is submitted

//When I answer/confirm question question #2 appears//
//var questions

//var rightAnswer = [array of the right answers 
//Question #1, c
//Question #2, a
//Question #3, d
//Question #4, d
//Question #5, c
//Question #6, d
//Question #7, b
//Question #8, c
//Quesiton #9, d
//Question #10, a  ]


//var wrongAnswer = [array of the wrong answers
//Question #1, abd
//Question #2, bcd
//Question #3, abc
//Question #4, abc
//Question #5, abd
//Question #6, abc
//Question #7, acd
//Question #8, abd
//Quesiton #9, abc
//Question #10, bcd ]









//If answer to Question #1 is incorrect the time is subtracted from the timer//
// wrong answer = timer decrement

//if answer is right a point is added to the players score

//if all questions are answered or if the timer reaches 0 the game is over

//When game is over 

//I can save my initials and my score//

//fill in initials and submit button
//event listener/handler

//Where does user see other scores compared to theirs?

//game resets and starts over//
//if button is clicked then game resets and returns to starting screen