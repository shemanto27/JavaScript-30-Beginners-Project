const questions = [
    {
        question : "Which programming language I am learning right now?",
        answers : [
            {text: 'Python', correct: false},
            {text: 'Rust', correct: false},
            {text: 'C++', correct: false},
            {text: 'JavaScript', correct: true},

        ]
    },

    {
        question : "Which university Shemanto studies?",
        answers : [
            {text: 'BUET', correct: false},
            {text: 'KUET', correct: true},
            {text: 'RUET', correct: false},
            {text: 'CUET', correct: false},

        ]
    },

    {
        question : "Where is my hometown?",
        answers : [
            {text: 'Dhaka', correct: false},
            {text: 'Khulna', correct: false},
            {text: 'Mymensingh', correct: true},
            {text: 'Rajshahi', correct: false},

        ]
    },

    {
        question : "Which Department I study in?",
        answers : [
            {text: 'ESE', correct: true},
            {text: 'ME', correct: false},
            {text: 'CSE', correct: false},
            {text: 'EEE', correct: false},

        ]
    },

    {
        question : "Which hall I live in?",
        answers : [
            {text: 'LSH', correct: false},
            {text: 'AEH', correct: false},
            {text: 'BSMRH', correct: true},
            {text: 'KJAH', correct: false},

        ]
    },
];

const questionElement = document.getElementById('question');
const answerBtnElement = document.getElementById('answerBtns');
const nextBtnElement = document.getElementById('nextBtn');

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtnElement.innerHTML = 'Next';
    showQuestion();
}

