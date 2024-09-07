const questions = [
    {
        question : "Which programming language I am learning right now?",
        answers : [
            {option: 'Python', correct: false},
            {option: 'Rust', correct: false},
            {option: 'C++', correct: false},
            {option: 'JavaScript', correct: true},

        ]
    },

    {
        question : "Which university Shemanto studies?",
        answers : [
            {option: 'BUET', correct: false},
            {option: 'KUET', correct: true},
            {option: 'RUET', correct: false},
            {option: 'CUET', correct: false},

        ]
    },

    {
        question : "Where is my hometown?",
        answers : [
            {option: 'Dhaka', correct: false},
            {option: 'Khulna', correct: false},
            {option: 'Mymensingh', correct: true},
            {option: 'Rajshahi', correct: false},

        ]
    },

    {
        question : "Which Department I study in?",
        answers : [
            {option: 'ESE', correct: true},
            {option: 'ME', correct: false},
            {option: 'CSE', correct: false},
            {option: 'EEE', correct: false},

        ]
    },

    {
        question : "Which hall I live in?",
        answers : [
            {option: 'LSH', correct: false},
            {option: 'AEH', correct: false},
            {option: 'BSMRH', correct: true},
            {option: 'KJAH', correct: false},

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

function resetState(){
    nextBtnElement.style.display = 'none';
    while(answerBtnElement.firstChild){
        answerBtnElement.removeChild(answerBtnElement.firstChild);
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.option;
        button.classList.add('btn','border-2','border-gray-400','w-full','h-10','px-2');
        answerBtnElement.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function selectAnswer(e){
    const selectBtn = e.target;  
    const yourAnswer = selectBtn.dataset.correct === 'true';
    if(yourAnswer){
        selectBtn.classList.add('btn-success'); 
        score++;
    }
    else{
        selectBtn.classList.add('btn-error');
    }

    Array.from(answerBtnElement.querySelectorAll('button')).forEach(button => {
        // if (button.dataset.correct === 'true') {
        //     button.classList.add('btn-success');
        // }
        button.disabled = true;
    });
    nextBtnElement.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}!`;
    nextBtnElement.innerHTML = "Play Again";
    nextBtnElement.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtnElement.addEventListener('click', ()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});



startQuiz();

