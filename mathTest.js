//connect javascript
console.log("hello wild!")


 
//TO DO: MAKE TIMER
// const count = (function() {
//     let num = 20
//     return ( function() {return num-- })
// }) ()

// function countDown() 
// {
//     const clock = document.getElementById("clock")
//     let timerId = null
//     let num = count()
//     if (num > 0)
//     {
//         clock.innerHTML += '<span>' + num + '</span>'
//         timerId = window.setTimeout(countDown, 1000)
//     }
//         else
//         {
//             clock.innerHTML += '<span>Game Over!</span>'
//             window.clearTimeout( timeId)
//         }
//         window.clearTimeout( timerId)
        
//  }

var secondsLeft = 20;

function countDown() {
  var clock = document.getElementById("clock");

  timerInterval = setInterval(function() {
      secondsLeft--;
      clock.textContent = "Time: " + secondsLeft;

      if(secondsLeft === 0){
          clearInterval(timerInterval);
          // If seconds is 0, stop quiz
          stopClock();
          document.getElementById("clock").innerHTML = Too Slow!!! Game Over Little Flynnie and Anna Bear!!! I love You!
      }
  }, 1000)
}





// const timerEl = document.getElementById('countdown');
// const mainEl = document.getElementById('main');

const message = 'Game Over!';


// Timer that counts down from 20
// function countdown() {
//   const timeLeft = 20;

//   //Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   const timeInterval = setInterval(function () {
//     //As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
//       timeLeft-- ;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft-- ;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//     clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       document.getElementById("main").innerHTML = message;
//     }
//   }, 2000);
// }


//TO DO: START GAME
//TO DO: CREATE START BUTTON THAT STARTS QUESTIONS AND TIMER
const askMe = () => {

        
        //TO DO: MAKE QUESTION SHOW UP WHEN THE START BUTTON IS CLICKED
        document.getElementById("questionBox1").style.visibility = "visible";
        countDown();

        // const button1c = document.getElementById("button1c");
        // const onChange = button1c;

        // if (button1c = onChange) {
        //     document.getElementById("questionBox2").style.visibility = "visible";
        
    }
 
//TO DO: ADD START BUTTON
//startButton.addEventListener("clicked", askMe);
//startButton.addEventListener("clicked", x);
startButton.addEventListener("clicked", askMe);
// const askMe1 = () => {
//     const button1c = document.getElementById("button1c");
        

//         if (button1c) {
//             document.getElementById("questionBox2").style.visibility = "visible";
        
// }
// }

//Gets Right Answer Responses
//GETS QUESTION #1
const button1C = document.getElementById("button1c");
const getQuestion2 = document.getElementById("questionBox2");
const button1A = document.getElementById("button1A");
const button1B = document.getElementById("button1B");
const button1D = document.getElementById("button1D");


function changeQuestion1() {
    //stopPropagation();
    document.getElementById("questionBox1").style.visibility = "hidden";
   document.getElementById("questionBox2").style.visibility = "visible";
   //document.getElementById("demo1").innerHTML = questionBox2;
 }

 button1C.addEventListener("click", changeQuestion1);


//GETS QUESTION #2
const button2B = document.getElementById("button2B");
const getQuestion3 = document.getElementById("questionBox3");

function changeQuestion2() {
    //stopPropagation();
    document.getElementById("questionBox2").style.visibility = "hidden";
    document.getElementById("questionBox3").style.visibility = "visible";
    //document.getElementById("demo2").innerHTML = questionBox3;
 }

 button2B.addEventListener("click", changeQuestion2);
     


// //GETS QUESTION #3
 const button3D = document.getElementById("button3D");
 const getQuestion4 = document.getElementById("questionBox4");
 
 function changeQuestion3() {
     //getQuestion2.stopPropagation();
     document.getElementById("questionBox3").style.visibility = "hidden";
     document.getElementById("questionBox4").style.visibility = "visible";
     //document.getElementById("demo3").innerHTML = questionBox4;
  }

 button3D.addEventListener("click", changeQuestion3);


// //GETS QUESTION #4
const button4B = document.getElementById("button4B");
const getQuestion5 = document.getElementById("questionBox5");

function changeQuestion4() {
    //getQuestion2.stopPropagation();
    document.getElementById("questionBox4").style.visibility = "hidden";
    document.getElementById("questionBox5").style.visibility = "visible";
 }

 button4B.addEventListener("click", changeQuestion4);

//GETS QUESTION #5
const button5D = document.getElementById("button5D");
const getQuestion6 = document.getElementById("questionBox6");

function changeQuestion5() {
    //getQuestion2.stopPropagation();
    document.getElementById("questionBox5").style.visibility = "hidden";
    document.getElementById("questionBox6").style.visibility = "visible";
 }

 button5D.addEventListener("click", changeQuestion5);

//GETS QUESTION #6
const button6B = document.getElementById("button6B");
const getQuestion7 = document.getElementById("questionBox3");

function changeQuestion6() {
    //getQuestion2.stopPropagation();
    document.getElementById("questionBox6").style.visibility = "hidden";
   document.getElementById("questionBox7").style.visibility = "visible";
 }

 button6B.addEventListener("click", changeQuestion6);


//GETS QUESTION #7
const button7A = document.getElementById("button7A");
const getQuestion8 = document.getElementById("questionBox3");

function changeQuestion7() {
    //.stopPropagation();
    document.getElementById("questionBox7").style.visibility = "hidden";
   document.getElementById("questionBox8").style.visibility = "visible";
 }

 button7A.addEventListener("click", changeQuestion7);


//GETS QUESTION #8
const button8C = document.getElementById("button8C");
const getQuestion9 = document.getElementById("questionBox3");

function changeQuestion8() {
//stopPropagation();
    document.getElementById("questionBox8").style.visibility = "hidden";
   document.getElementById("questionBox9").style.visibility = "visible";
 }

 button8C.addEventListener("click", changeQuestion8);


 //GETS QUESTION #9
const button9B = document.getElementById("button9B");
const getQuestion10 = document.getElementById("questionBox3");

function changeQuestion9() {
    //stopPropagation();
    document.getElementById("questionBox9").style.visibility = "hidden";
   document.getElementById("questionBox10").style.visibility = "visible";
 }

 button9B.addEventListener("click", changeQuestion9);

//GETS QUESTION #10
const button10A = document.getElementById("button10A");
const getQuestion11 = document.getElementById("questionBox11");

function changeQuestion10() {
    //getQuestion2.stopPropagation();
    document.getElementById("questionBox10").style.visibility = "hidden";
   document.getElementById("questionBox11").style.visibility = "visible";

   //Display game over
   //document.getElementById("endGame").innerHTML = "Game Over";
 }

button10A.addEventListener("click", changeQuestion10);


//End of Questions Game over
const button11A = document.getElementById("button11A");

function endGame() {
     //Display game over
   document.getElementById("questionBox11").style.visibility = "hidden";
   document.getElementById("endGame").innerHTML = "Game Over";
}

button11A.addEventListener("click", endGame);

//Wrong Answer Responses


//TO DO: RESTART FUNCTION

//TO DO: MAKE QUESTIONS
const questionBoxes = [
    questionBox1, questionBox2
]

console.log(questionBoxes)
console.log(questionBox1)
//TO DO: MAKE QUESTIONS APPEAR ONE AFTER THE OTHER BY CHANGING VISIBILITY ATTRIBUTES
// const askQuestion1 = () => {
//     const one = document.getElementById("questionBox1");
//     one.setAttribute("type", "visible");
//     document.body.appendChild(one);

    
//document.getElementById("demoF").innerHTML = "hidden";
// }

// console.log(questionBoxes)
//TO DO: MAKE TIMER
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  //Find the distance between now and the count down date
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
x()



// function demoDisplay() {
//   document.getElementById("myP1").style.display = "none";
// }

// function demoVisibility() {
//   document.getElementById("myP2").style.visibility = "hidden";
// }
 






//TO DO: CREATE START BUTTON THAT STARTS QUESTIONS AND TIMER


// const startGame = () => {
//     if (startButton) {
//         document.getElementById("questionBox1").innerHTML = questionBox1
//         //then start setInterval())
//     }
// }     

// startButton.addEventListener("clicked", startGame);




//to do make questions change/advance as I answer them correctly



//to do make timer




//to do take away time if I answer question wrong

//game is over when questions are done or time is done

//to do save players initials and score















//Instructions:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN all questions are answer game is over

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
