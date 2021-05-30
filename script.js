//JavaScript Timed Math Test//
console.log("hello wild")


//Click start button to start timed test//
//"start" button makes questions pop up //
const questionBox0 = () => {
  window.open("index1.html");
  console.log("hello")
};
const questionBox1 = () => {
  window.open("index2.html");
};

const questionBox2 = () => {
  window.open("index3.html");
};
const questionBox3 = () => {
  window.open("index4.html");
};
const questionBox4 = () => {
  window.open("index5.html");
};
const questionBox5 = () => {
  window.open("index6.html");
};
const questionBox6 = () => {
  window.open("index7.html");
};
const questionBox7 = () => {
  window.open("index8.html");
};
const questionBox8 = () => {
  window.open("index9.html");
};
const questionBox9 = () => {
  window.open("index10.html");
};
const questionBox10 = () => {
  window.open("index2.html");
};
const questionBox11 = () => {
  window.open("index3.html");
};




//If start button is clicked the timer will start and a division question will appear//
//Where and how will question loop run
//Questions
const problems = [questionBox1, questionBox2, questionBox3, questionBox4, questionBox5, questionBox6, questionBox7, questionBox8, questionBox9, questionBox10, questionBox11]

//if userAnswer chooses a variable in the [array of right answers]
const rightAnswers = [
  {questionBox0: "d",
  questionBox1: "c", 
  questionBox2: "a", 
  questionBox3: "d", 
  questionBox4: "d", 
  questionBox5: "c", 
  questionBox6: "d", 
  questionBox7: "b", 
  questionBox8: "c", 
  questionBox9: "a", 
  questionBox10: "a",
  questionBox10: "d"
}
];
console.log(problems[1])
console.log(rightAnswers[2])
//Question #1, c
//Question #2, a
//Question #3, d
//Question #4, d
//Question #5, c
//Question #6, d
//Question #7, b
//Question #8, c
//Question #9, d
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

//Displays questions
//while user is answering one question the rest are hidden
const showQuestion = () => {

}

//When a correct answer is chosen
//if (questionbox1 === c) {
  //display next question
  //score = 1
//}

//When an incorrect answer is chosen
//if (answer = !userChoice) {
  //go to next question
  // subtract 2 seconds from the time clock
  //wrong answer = timer decrement
//}



//Game Over
//if all questions are answered or if the timer reaches 0 the game is over




//Timer
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  
  var seconds = Math.floor((distance % (1000 * 20)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GAME OVER!!!!";
  }
}, 1000);




























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














//When game is over 

//I can save my initials and my score//



//fill in initials and submit button
//event listener/handler

//Where does user see other scores compared to theirs?



//game resets and starts over//
//if button is clicked then game resets and returns to starting screen


//Timer and Timer Over example Code
// Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();


