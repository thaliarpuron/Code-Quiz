
var interval;
function finishQuiz() {
    clearInterval(interval);
    var highestScore=localStorage.getItem("highestScore");
    if(!highestScore || currentScore>highestScore){
        var initials=prompt("Enter your initials");
        localStorage.setItem("highScore",currentScore);
        localStorage.setItem("initials",initials);
    }
 
    function showHighScores() {
        var highestScore=localStorage.getItem("highestScore");
        var initials=localStorage.getItem("initials");
        if(highestScore && initials){
            alert(highestScore);
        }
    }


var myQuestions = [
    {
        question: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "What HTML tags are JavaScript code wrapped in?",
        options: ["<script>", "<body>", "<head>", "<div>"],
        correctAnswer: "<script>"
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis",
    }
];

var currentQuestion = 0;
var questionContainer = document.getElementById("container");
var currentScore = 0;

function showCurrentQuestion() {
    var question = myQuestions[currentQuestion];
    questionContainer.innerHTML = "";

    var questionTitle = document.createElement("h1");
    questionTitle.innerText = question.question;
    questionContainer.appendChild(questionTitle);

    var optionsList = document.createElement("ul");

    for (var i = 0; i < question.options.length; i++) {
        var questionLi = document.createElement("li");
        questionLi.innerText = question.options[i];
        optionsList.appendChild(questionLi);

    }
    questionContainer.appendChild(optionsList);
}

questionContainer.addEventListener("click", function(event) {
    if (event.target.matches("li")) {
        var correctAnswer = event.target.innerText;

        var question = myQuestions[currentQuestion];

        if (correctAnswer === question.correctAnswer) {
            currentScore++;
        } else {
            currentTime = currentTime - 10;
        }
        currentQuestion++;
        if (currentQuestion >= myQuestions.length) {
            finishQuiz();
        } else {
            showCurrentQuestion();
        }

    }
});

var currentTime = 40;
var quizTimer = document.getElementById("timer");

function startQuiz() {
    showCurrentQuestion();
    interval = setInterval(showCurrentQuestion, 1000);
    currentTime--;
    quizTimer.innerText = "Time: " + currentTime;

    if (currentTime === 0) {
        clearInterval(interval);
        showScore();
    }
}

var startQuizButton = document.getElementById("startbtn");
startQuizButton.addEventListener("click", startQuiz);

