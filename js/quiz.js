
function myFunction() {
    alert("works");
}
    
    //# 04 Web APIs: Code Quiz

// As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple - choice questions and interactive challenges.Build a timed code quiz with multiple - choice questions.This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


// variables for quiz
var questionPool = 0;
var time = questions.length * 10;
var timerId;
var index= 0;


//right away hide the end page section
document.querySelector("#end-page").style.display = "none";


var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var optionsEl = document.getElementById("options")
var displayResultEl = document.getElementById("display-result");
var nameEl = document.getElementById("name");
var submitEl = document.getElementById("submit");
var startButtonEl = document.getElementById("start-button");
var tryAgainButtonEl = document.getElementById("tryagainbutton");
var endPageEl = document.getElementById("end-page");

// WHEN I click the start button

// function to start quiz
function startQuiz() {
    document.querySelector("#start").style.display="none";
    document.querySelector("#end-page").style.display = "none";
    document.querySelector("#tryagain-button").style.display = "none";
    document.querySelector(".page-text").style.display = "none";
    document.querySelector("#highscore-button").style.display = "none";
    document.querySelector("#start-quiz-screen").style.display = "none";
  
    //remove front page
    var startPageEl = document.getElementById("start-page");
    startPageEl.removeAttribute("class", "start-page");

questionsEl.removeAttribute("questions");
    
    //start timer
    timerId = setInterval(myTimer(), 1000);

    //show time on timer in seconds 
    timerEl.textContent = time;

    getQuestion();
}


// //screen changes to display question
// var nextPageEl = document.getElementbyId("next-page");
// nextPageEl.setAttribute("class", "hide-page");

// //display question
// questionsPoolEl.removeAttribute

    //get each question
function getQuestion(){
    // pull question
    document.querySelector("#questions").style.display = "block"
    //  pull options
    var questionEl = document.getElementById("questions");
    questionEl.textContent = questions[index].question;
    
    optionsEl.textContent = "";
    for (var i = 0; i < questions[index].options.length;i++){
        // buttons
        var optionsQuestion = document.createElement("button");
        optionsQuestion.setAttribute("class", "options");
        optionsQuestion.setAttribute("class", optionsQuestion);

        optionsQuestion.textContent = i + 1 + ". " + questions[index].options[i];
        optionsQuestion.click = questionsClick;

        // event listener
        optionsQuestion.setAttribute("onclick", "questionsClick()");

        // Show on screen
        optionsEl.appendChild(optionsQuestion);
    }
    // questionScreen.options.loop(function(option, i){
        
    // });
}



function questionsClick() {
    //add event listener to check button- goes to next question 
    if (this.class !== questions[index].answer) {
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
        displayResultEl.textContent = "NOPE, WRONG-O!";
        //reduce time
        //display the updated time
      
    } else {
        // feedback "Correct"
        displayResultEl.textContent = "WINNING!!!";
       
    }
    displayResultEl.setAttribute("class", "display-result");
    setTimeout(function() {
        displayResultEl.setAttribute("class", "hide-display");
        
    }, 1000);

    if(index<questions.length-1){
        index++;
        getQuestion();
    }else{
        //hide q and choices
        document.querySelector("#questions").style.display = "none";
        document.querySelector("#options").style.display = "none";
        //game over
        document.querySelector("#start").style.display = "none";
        document.querySelector("#end-page").style.display = "block";
        document.querySelector("#tryagain-button").style.display = "block";
        document.querySelector(".page-text").style.display = "none";
        document.querySelector("#highscore-button").style.display = "block";
        document.querySelector("#display-result").style.display = "none";
      
     
    }
   
};
    // Connect button from html here
    


//WHEN all questions are answered or the timer reaches  0

function endQuiz() {
    // Time Ends
    clearInterval(timerId);
    // Display: "Quiz Complete"
    var endPageEl = documentElementId("end-page");
    endPageEl.removeAttribute("class");

    // Display Score
    var displayResultEl = documentElementId("display-result");
    displayResultEl.textContent = time;

    // remove questions
    questionsEl.setAttribute("class", "questions");
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
    var initialsEl=  localStorage.item("initials");

    // make sure initials were entered
    if  (initials === null){
    return;
    }

    var highscore= JSON.parse (window.localStorage.item ("highscore")) || [];


}