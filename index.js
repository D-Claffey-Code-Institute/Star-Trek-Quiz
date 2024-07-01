/* declaring variables for later use */
let username;
let questionCounter;
let answers;
let correctAnswers;
let incorrectAnswers;

/* Questions and Answers*/

const questions = [
    {
        question: "Who was the captain in the first pilot episode of the original Star Trek Series?",
        choice1: "James T. Kirk",
        choice2: "Jean-Luc Picard",
        choice3: "Christopher Pike",
        choice4: "Spock",
        answer: 3
    },
    {
        question: "Who wrote the 'The Theme From Star Trek'?",
        choice1: "Gene Roddenberry",
        choice2: "John Williams",
        choice3: "Alexander Courage",
        choice4: "William Shatner",
        answer: 3
    },
    {
        question: "What is James T. Kirk's Fathers name?",
        choice1: "George",
        choice2: "Greg",
        choice3: "James",
        choice4: "Christopher",
        answer: 1
    },
    {
        question: "What was Spock's mother's name?",
        choice1: "Winona",
        choice2: "Katherine",
        choice3: "Amala",
        choice4: "Amanda",
        answer: 4
    },
    {
        question: "What was Captain Janeway's first mission after becoming the captain of the USS Voyager?",
        choice1: "Fight the Borg",
        choice2: "Capture the Maquis ship",
        choice3: "Explore the Delta Quadrant",
        choice4: "Protect the Ocampa",
        answer: 2
    },
    {
        question: "Whats the name of the ship under Benjamin Sisko's command?",
        choice1: "Enterprise",
        choice2: "Defiant",
        choice3: "Dominion",
        choice4: "Voyager",
        answer: 2
    },
    {
        question: "The theme song for Star Trek Enterprise is a cover of a song originally sung by:",
        choice1: "Sheryl Crow",
        choice2: "Don Henley",
        choice3: "Neil Diamond",
        choice4: "Rod Stewart",
        answer: 4
    },
    {
        question: "Who was the first communications officer on the Enterprise?",
        choice1: "Hoshi Sato",
        choice2: "Harry Kim",
        choice3: "Tasha Yar",
        choice4: "Nyota Uhara",
        answer: 1
    },
    {
        question: "Who did not appear in at least three Star Trek TV series?",
        choice1: "Reginald Barclay",
        choice2: "Q",
        choice3: "William Riker",
        choice4: "Borg",
        answer: 1
    },
    {
        question: "Who provided the computer voice in the Star Trek TV franchise?",
        choice1: "Gene Roddenberry",
        choice2: "Majel Barrett",
        choice3: "Christine Chapel",
        choice4: "William Shatner",
        answer: 2
    },
];