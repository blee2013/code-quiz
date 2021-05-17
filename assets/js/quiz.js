// variables for quiz
var questionIndex = 0;
var time = questions.length * 10;
var timerId;

// //right away hide the end page section
// document.querySelector("#end-page").style.display = "none";

//doc elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var optionsEl = document.getElementById("options")
var submitBtn = document.getElementById("submit");
var startButtonEl = document.getElementById("start-button");
var initialsEl = document.getElementById("initials");
var answerEl = document.getElementById("answer");



// function to start quiz
function startQuiz() {
    //hide start screen 
    var startQuizEl = document.getElementById("start-quiz-screen");
    startQuizEl.setAttribute("class", "hide-page");

    //show questions
    questionsEl.removeAttribute("class");

    //start timer
    timerId = setInterval(myTimer, 1000);

    //show start time
    timerEl.textContent = time;

    getQuestion();
}

//get question functions
function getQuestion() {

    //get question
    var displayQuestion = questions[questionIndex];

    //display question
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.textContent = displayQuestion.Q;

    //remove previous question
    optionsEl.innerHTML = "";

    //display options
    displayQuestion.options.forEach(function(option, i) {
        //new buttons
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "button");
        optionNode.setAttribute("value", option);

        optionNode.textContent = i + 1 + ". " + option;

        optionNode.onclick = checkAnswer;

        optionsEl.appendChild(optionNode);
    });
}




function checkAnswer() {
    
    //add event listener to check button- goes to next question 
    if (this.value !== questions[questionIndex].answer) {

    // if (questionIndex <= questions.length -1) {
        // if !== deduct time x from timer
        time -= 10;

        // time is subtracted from the clock for wrong answer
        if (time < 0) {
            //end quiz and reduce time to 0
            time = 0;
        }
        //restart clock
        timerEl.textContent = time;
   
        // feedback "Wrong"
        console.log("wrong")
        answerEl.textContent = "NOPE, WRONG-O!";
        //reduce time
        //display the updated time
        
    } else {

        // feedback "Correct"
        answerEl.textContent = "WINNING!!!";
        console.log("right")
      
    }

    //display WRONG-0 or WINNING
    answerEl.setAttribute("class", "answer");
    setTimeout(function () {
        answerEl.setAttribute("class", "hide-page");
    }, 1000);

    //next question
    questionIndex++;

    //keep checking that there are more questions
    if(questionIndex === questions.length){
        endQuiz();
    } else {
        getQuestion();
    }
}
      
//WHEN all questions are answered or the timer reaches  0

function endQuiz() {
    // Time Ends
    clearInterval(timerId);

    // Display: "Quiz Complete"
    var endPageEl = document.getElementById("end-page");
    endPageEl.removeAttribute("class");

    // Display Score
    var displayScoreEl = document.getElementById("score");
    displayScoreEl.textContent = time;

    // remove questions
    questionsEl.setAttribute("class", "hide-page");
    }


// high score- permanant or final screen 
function myTimer() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        endQuiz();
    }
}

function saveHighScore() {
    // user puts in initials 
    var initials =  initialsEl.value.trim();

    // make sure initials were entered
    if  (initials !== ""){
        var highScore = JSON.parse(localStorage.getItem("highscore")) || [];

    var finalScore = {
    score: time, 
    initials: initials
    };

    //local storage
    highScore.push(finalScore);
    localStorage.setItem("highscore", JSON.stringify(highScore));

    localStorage.getItem("initials") 
    localStorage.getItem("highscore") 

    // window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighScore();
    }
}

function showScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    let savedScores = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (savedScores !== null) {
        highScore = savedScores;
    }
}

showScores();
// //display high scores
// function showHighScores() {
//     var loadTasks = function () {
//         var savedTasks = localStorage.getItem("highscore");
//     // var highScores = JSON.parse(localStorage.getItem("highscore")) || [];
// }

function clearHighScores() {
    localStorage.removeItem("highscore");
    location.reload();
}

document.getElementById("clearScore").onclick = clearHighScores;

//submit initials
submitBtn.onclick = saveHighScore;

//start quiz
startButtonEl.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter; 
