let currentQuestionIndex = 0;
let score = 0;
let selectedSubject = '';
let userName = '';

function startQuiz(){
    userName = document.getElementById('inputuser').value;
    selectedSubject = document.getElementById('inputsubject').value;

    if (!userName) {
        alert('Please Enter your name');
        return;
    }

    document.getElementById('page1').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[selectedSubject][currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;

    const options = document.getElementById('options');
    options.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        options.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[selectedSubject][currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions[selectedSubject].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('Result').style.display = 'block';
    document.getElementById('score').innerText = userName + ", Your score is " + score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedSubject = '';
    userName = '';

    document.getElementById('page1').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('Result').style.display = 'none';
}

function change(Imagename) {
     document.getElementsById("demo1,demo2").src=Imagename+".png";
     

}