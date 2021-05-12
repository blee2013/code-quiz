//Questions
var questions = [
    {
        question: "What is the name of my puppy?",
        options: ["Coachella", "King T'Challa", "Chalupa", "Cafe Mocha"],
        answer: "King T'Challa"
    },
    {
        question: "Which of the following places has the best Tacos?",
        options: ["The Ohio", "Chipotle", "Bar Taco", "La Bamba"],
        answer: "The Ohio"
    },
    {
        question: "Which is the best Christman movie?",
        options: ["White Christmas", "The Grinch Who Stole Christmas", "Santa Claus", "Frosty the Snowman"],
        answer: "The Grinch Who Stole Christmas"
    },
    {
        question: "What is the best kind of pie?",
        options: ["Pumpkin Pie", "Apple Pie", "Cherry Pie", "Sweet Potatoe Pie"],
        answer: "Pumpkin Pie"
    },
    {
        question: "Which is the best flavored pop?",
        options: ["Grape", "Orange", "Pineapple", "Lime"],
        answer: "Grape"
    },
    {
        question: "Which of these is best with chips?",
        options: ["Salsa", "Guacamole", "Bean Dip", "Queso"],
        answer: "Queso"
    },
    {
        question: "Which of this is best to put on first?",
        options: ["Shirt", "Pants", "Socks", "Gloves"],
        answer: "Socks"
    }
];


//        < !-- < script type = "text/javascript" >
//         var timeleft = 10;
// var downloadTimer = setInterval(function () {
// timeleft--;
// document.getElementById("countdowntimer").textContent = timeleft;
// if (timeleft <= 0)
//     clearInterval(downloadTimer);
// }, 1000); 

//     </script > --> 


// }
    // countdown timer
        // 1. countdown

        // 2. Stop the quiz
        // 3. Lose time

// THEN a timer starts and I am presented with a question



        //* DON'T USE A LOOP

// WHEN I answer a question
    // Add 3 questions are multiple-choice
    // array with a var for the correct answer


// THEN I am presented with another question




    // ideas: funtion and return
    // switch
    // double array var codequestion = {question; answer} 
            // {
            //     question: "Commonly used data types do NOT inclue:",
            //         answers: {
            //         1: "strings",
            //             2: "booleans",
            //                 3: "alerts",
            //                     4: "numbers",
            //      },
            //     rightAnswer: "3"
            // },
        // connect button to correct answer





// WHEN I answer a question incorrectly



// THEN time is subtracted from the clock
    // deduct x sec from clock 
    // move to next question
    // nextQuestionIndex++;
    // // Out of time .. end quiz
    // function endQuiz() {
    //     clearInterval(timerId);
    // }
    // // Out of Questions.. end quiz
    // if (nextQuestionIndex === questions.length) {
    //     endQuiz();
    // } else {
    //     getQuestion();
    // }
    // Add place to enter intials 
    // Add Submit button
    // Add "Try Again" Button

// THEN I can save my initials and score

     //Connect to local stoarge

     //get user initials

     // commit user initials & high score

     // Display all high scores


//event listeners
    //Start Button
//   document.querySelector("#submit").addEventListener("click", startQuiz);


    // document.getElementById("submit").addEventListener("click", test);
    // function test(){
    //     alert("works");
    // // }

    // // Submit Button
    // submitButton.click = highScore;

    // // Try Again
    // tryagainbuttonEl.click = tryAgain;

// --------------------------------------


// document.querySelector("#stop").onclick = stopwatch.stop();
// document.querySelector("#reset").onclick =  stopwatch.reset();
// document.querySelector("#startTime").oclick = stopwatch.start();

// var intervalId;

// //prevents the clock from being sped up unnecessarily
// var clockRunning = false;


// // Our stopwatch object
// var stopwatch =
// {

//     time: 0,


//     reset: function () {

//         stopwatch.time = 0;


//         // DONE: Change the "display" div to "00:00."
//         document.querySelector("#display").textContent =("00:00");


//     },

//     start: function () {

//         // DONE: Use setInterval to start the count here and set the clock to running.
//         if (!clockRunning) {
//             intervalId = setInterval(stopwatch.count, 1000);
//             clockRunning = true;
//         }
//     },
//     stop: function () {

//         // DONE: Use clearInterval to stop the count here and set the clock to not be running.
//         clearInterval(intervalId);
//         clockRunning = false;
//     },
//     count: function () {

//         // DONE: increment time by 1, remember we cant use "this" here.
//         stopwatch.time++;
//         //console.log("time: "+stopwatch.time)

//         // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//         //       and save the result in a variable.
//         var converted = stopwatch.timeConverter(stopwatch.time);
//         //console.log(converted);

//         // DONE: Use the variable we just created to show the converted time in the "display" div.
//         document.querySelector("#display").textContent=(converted);
//     },

//     timeConverter: function (t) {
//         //t=1
//         //min0
//         //min=00
//         //sec1
//         //sec=01
//         var minutes = Math.floor(t / 60);
//         var seconds = t - (minutes * 60);

//         if (seconds < 10) {
//             seconds = "0" + seconds;
//         }

//         if (minutes === 0) {
//             minutes = "00";
//         }
//         else if (minutes < 10) {
//             minutes = "0" + minutes;
//         }

//         return minutes + ":" + seconds;
//     }
// };
