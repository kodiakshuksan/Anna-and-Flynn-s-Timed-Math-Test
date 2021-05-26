//JavaScript Timed Math Test//

//Click start button to start timed test//
//"start" button//
function openWin() {
  window.open("index1.html");
};
function openWin1() {
  window.open("index2.html");
};

function openWin2() {
  window.open("index3.html");
};
function openWin3() {
  window.open("index4.html");
};
function openWin4() {
  window.open("index5.html");
};
function openWin5() {
  window.open("index6.html");
};
function openWin6() {
  window.open("index7.html");
};
function openWin7() {
  window.open("index8.html");
};
function openWin8() {
  window.open("index9.html");
};
function openWin9() {
  window.open("index10.html");
};
function openWin10() {
  window.open("index8.html");
};




//TO DO Build Timer Function


//Timer starts when button is clicked 





//To Do Deal With Questions


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GAME OVER!!!!";
  }
}, 1000);

























//handler//
//event Listener//

//Timer starts//
//Timer starts when button is clicked 


//if start button is clicked then timer starts
// Selects element by class
//var timeEl = document.querySelector(".time");

// Selects element by id
//var mainEl = document.getElementById("main");

//var secondsLeft = 10;

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

//function countdown() {
   // var timeLeft = 10;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  //  var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
    //  if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
      //  timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        //timeLeft--;
     // } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
       // timerEl.textContent = timeLeft + ' second remaining';
        //timeLeft--;
      //} else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
       // timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        //clearInterval(timeInterval);
        // Call the `displayMessage()` function
        //displayMessage();
      //}
    //}, 1000);
  //}
  
// Function to create and append colorsplosion image
//function sendMessage() {
  //timeEl.textContent = " ";
  //var imgEl = document.createElement("img");
  //imgEl.setAttribute("src", "images/image_1.jpg");
  //mainEl.appendChild(imgEl);

//}

//setTime();


//If start button is clicked the timer will start and a division question will appear//
//Where and how will question loop run
//Question loop

//if userAnswer chooses a variable in the [array of right answers]
//then var question++

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



