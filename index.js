/* declaring variables for later use */
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

/* Questions and Answers*/

const quiz = [
    {
        question: "Who was the captain in the first pilot episode of the original Star Trek Series?",
        options: ["James T. Kirk", "Jean-Luc Picard", "Christopher Pike", "Spock"],
        answer: "Christopher Pike",
    },
    {
        question: "Who wrote the 'The Theme From Star Trek'?",
        choice1: ["Gene Roddenberry", "John Williams", "Alexander Courage", "William Shatner"],
        answer: "Alexander Courage"
    },
    {
        question: "What is James T. Kirk's Fathers name?",
        choice1: ["George", "Greg", "James", "Christopher"],
        answer: "George"
    },
    {
        question: "What was Spock's mother's name?",
        choice1: ["Winona", "Katherine", "Amala", "Amanda"],
        answer: "Amanda"
    },
    {
        question: "What was Captain Janeway's first mission after becoming the captain of the USS Voyager?",
        choice1: ["Fight the Borg", "Capture the Maquis ship", "Explore the Delta Quadrant", "Protect the Ocampa"],
        answer: "Capture the Maquis ship",
    },
    {
        question: "Whats the name of the ship under Benjamin Sisko's command?",
        choice1: ["Enterprise", "Defiant", "Dominion", "Voyager"],
        answer: "Defiant",
    },
    {
        question: "The theme song for Star Trek Enterprise is a cover of a song originally sung by:",
        choice1: ["Sheryl Crow", "Don Henley", "Neil Diamond", "Rod Stewart"],
        answer: "Rod Stewart",
    },
    {
        question: "Who was the first communications officer on the Enterprise?",
        choice1: ["Hoshi Sato", "Harry Kim", "Tasha Yar", "Nyota Uhara"],
        answer: "Hoshi Sato",
    },
    {
        question: "Who did not appear in at least three Star Trek TV series?",
        choice1: ["Reginald Barclay", "Q", "William Riker", "Borg"],
        answer: "Reginald Barclay",
    },
    {
        question: "Who provided the computer voice in the Star Trek TV franchise?",
        choice1: ["Gene Roddenberry", "Majel Barrett", "Christine Chapel", "William Shatner"],
        answer: "Majel Barrett",
    },
];

//Shuffle quetions 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement("div");
    optionsElement.classname = "options";

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement("label");
        option.className = "option";

        const radio = document.getElementById("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);
        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);

    }

    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);

}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='quiz']:checked");
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestion].answer) {
            score++;

        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer,
            });
        }

        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizData.lenght) {
            displayQuestions();

        } else {
            displayResult();
        }
    }
}

function showAnswer() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "none";
    showAnswerButton.style.display = "none";

    let incorrectAnswersHtml= "";
    for (i = 0; i < incorrectAnswers.lenght; i++) {
        incorrectAnswersHtml += 
        `
        <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}
        <br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}
        <br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
        `;

    }

    resultContainer.innerHTML = 
    `
    <p>You Scored ${score} out of 10!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
    `;
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

displayQuestion();