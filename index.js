/* Questions and Answers*/

const quizData = [
    {
        question: "Who was the captain in the first pilot episode of the original Star Trek Series?",
        options: ["James T. Kirk", "Jean-Luc Picard", "Christopher Pike", "Spock"],
        answer: "Christopher Pike",
    },
    {
        question: "Who wrote the 'The Theme From Star Trek'?",
        options: ["Gene Roddenberry", "John Williams", "Alexander Courage", "William Shatner"],
        answer: "Alexander Courage"
    },
    {
        question: "What is James T. Kirk's Fathers name?",
        options: ["George", "Greg", "James", "Christopher"],
        answer: "George"
    },
    {
        question: "What was Spock's mother's name?",
        options: ["Winona", "Katherine", "Amala", "Amanda"],
        answer: "Amanda"
    },
    {
        question: "What was Captain Janeway's first mission after becoming the captain of the USS Voyager?",
        options: ["Fight the Borg", "Capture the Maquis ship", "Explore the Delta Quadrant", "Protect the Ocampa"],
        answer: "Capture the Maquis ship",
    },
    {
        question: "Whats the name of the ship under Benjamin Sisko's command?",
        options: ["Enterprise", "Defiant", "Dominion", "Voyager"],
        answer: "Defiant",
    },
    {
        question: "The theme song for Star Trek Enterprise is a cover of a song originally sung by:",
        options: ["Sheryl Crow", "Don Henley", "Neil Diamond", "Rod Stewart"],
        answer: "Rod Stewart",
    },
    {
        question: "Who was the first communications officer on the Enterprise?",
        options: ["Hoshi Sato", "Harry Kim", "Tasha Yar", "Nyota Uhara"],
        answer: "Hoshi Sato",
    },
    {
        question: "Who did not appear in at least three Star Trek TV series?",
        options: ["Reginald Barclay", "Q", "William Riker", "Borg"],
        answer: "Reginald Barclay",
    },
    {
        question: "Who provided the computer voice in the Star Trek TV franchise?",
        options: ["Gene Roddenberry", "Majel Barrett", "Christine Chapel", "William Shatner"],
        answer: "Majel Barrett",
    },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const mainHeader = document.getElementsByClassName('main');
const username = document.getElementById('username');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];


// Function to shuffle the questions after each try  
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function that displays the questions to a div on the page
function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}
 
//Function that checks the answers are correct and adds to the users score if true
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
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
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}
 
// Function that displays the results at the end of the quiz ad gives the user a messaage with
// Their score
function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  if (score > 0 && score <= 2 ){
    resultContainer.innerHTML = `Back to the Academy Cadet`;
  } else if (score >=3 && score <= 5){
    resultContainer.innerHTML = `Youve got some work to do Ensign`;
  } else if (score >= 6 && score <= 8){
    resultContainer.innerHTML = `Very Impressive Number 2`;
  } else {
    resultContainer.innerHTML = `Is that you Picard??`;
  };
  

}

//Function to retry the quiz once completed
function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

//Function that shows the answers to the questions they got wrong
function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();