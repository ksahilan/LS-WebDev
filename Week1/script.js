const questions = [
    {
        question: "What is the maximum number of points a table tennis game is played to?",
        options: ["15", "21", "11", "25"],
        answer: 2
    },
    {
        question: "Who is known as the 'Mozart of table tennis'?",
        options: ["Jan-Ove Waldner", "Ma Long", "Timo Boll", "Deng Yaping"],
        answer: 0
    },
    {
        question: "When was table tennis first included in the Olympics?",
        options: ["1988", "1992", "2000", "2004"],
        answer: 0
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll("#options button");
    const result = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
        option.disabled = false;
    });
    result.textContent = "";
}

function checkAnswer(selected) {
    const result = document.getElementById("result");
    const correctAnswer = questions[currentQuestion].answer;

    if (selected === correctAnswer) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong! The correct answer is " + questions[currentQuestion].options[correctAnswer] + ".";
        result.style.color = "red";
    }

    const options = document.querySelectorAll("#options button");
    options.forEach(option => option.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
