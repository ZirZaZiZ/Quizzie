const questions = [
    {
        question: 'Welke front hoorde NIET bij de Europese fronten?',
        options: ['Westfront', 'Zuidfront', 'Balkanfront', 'Italiaans front'], 
        correctAnswer: 'Zuidfront',
        type: 'multiple-choice'
    },

    {
        question: 'Hoe heette het toen beide partijen zo snel mogelijk naar de zee wouden gaan voor een gunstige positie?',
        options: ['Race naar de zee', 'Water ren', 'Oceanen race', 'De zee ren'], 
        correctAnswer: 'Race naar de zee',
        type: 'multiple-choice'
    },

    {
        question: 'In welk front gebeurde de race naar de zee?',
        options: ['Westfront', 'Oostfront', 'Balkanfront', 'Italiaans front'], 
        correctAnswer: 'Westfront',
        type: 'multiple-choice'
    },

    {
        question: 'Hoelang duurde de strijd in de Balkanfront?',
        options: ['4 jaar', '5 jaar', '6 jaar', '7 jaar'], 
        correctAnswer: '4 jaar',
        type: 'multiple-choice'
    },

    {
        question: 'Hoe begon de inval in België?',
        options: ['Het Duitse leger stuit op de forten rond Luik', 'Duitse legereenheden overschrijden de Belgische grens', 'Duitsland verklaart oorlog aan Frankrijk', 'Duitse troepen vallen het neutrale Luxemburg binnen'], 
        correctAnswer: 'Duitse troepen vallen het neutrale Luxemburg binnen',
        type: 'multiple-choice'
    },

    {
        question: 'Wie was er meer een last dan een steun in de Driebond?',
        options: ['Oostenrijk', 'Duitsland', 'Italië', 'Hongarije'], 
        correctAnswer: 'Italië',
        type: 'multiple-choice'
    },

    {
        question: 'Welke front hoorde NIET bij de Afrikaanse fronten?',
        options: ['Mesopotamische Campagne', 'Duits-Zuidwest-Afrika', 'West-Afrika', 'Duits-Oost-Afrika'], 
        correctAnswer: 'Mesopotamische Campagne',
        type: 'multiple-choice'
    },

    {
        question: 'Hoeveel landen horen onder West-Afrika',
        options: ['12', '14', '16', '18'], 
        correctAnswer: '16',
        type: 'multiple-choice'
    },

    {
        question: 'Welke 2 eigenschappen horen het beste bij het oostfront?',
        options: ['Oorlogshandeling, onbeweeglijk', 'Oorlogshandeling, bewegelijk', 'Patstelling, onbeweeglijk', 'Patstelling, bewegelijk'], 
        correctAnswer: 'Oorlogshandeling, bewegelijk',
        type: 'multiple-choice'
    },

    {
        question: 'Hoelang was het westfront?',
        options: ['700 km', '750 km', '800 km', '850 km'], 
        correctAnswer: '750 km',
        type: 'multiple-choice'
    },



    {
        question: 'Noem 1 land die lag in de Balkanfront.',
        correctAnswer: 'Griekenland, Servië, Bulgarije',
        type: 'open-ended'
    },

    {
        question: 'In welk jaartal voegden de Italianen zich toebij de geallieerden?',
        correctAnswer: '1915',
        type: 'open-ended'
    },

    {
        question: 'Hoeveel fronten waren er in Afrika?',
        correctAnswer: '3',
        type: 'open-ended'
    },

    {
        question: 'Welke kleur werd er gebruikt om de oorlog tussen Italië en Oostenrijk-Hongarije te benoemen?',
        correctAnswer: 'Wit',
        type: 'open-ended'
    },

    {
        question: 'Noem 1 land wat nu ongeveer overeenkomt met toen het Duits-Oost-Afrika front.',
        correctAnswer: 'Burundi, Rwanda, Tanganyika',
        type: 'open-ended'
    },

];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let userName = '';

function startQuiz(){
    userName = document.getElementById('name-input').value;
    if(userName.trim() === '') {
        alert('Vul alstublieft uw naam in om door te gaan.');
        return;
    }
    displayQuestion()
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackContainer = document.getElementById('feedback');

    questionElement.textContent = `Vraag ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;

    if (questions[currentQuestionIndex].type === 'multiple-choice') {
        optionsContainer.innerHTML = '';
        for (const option of questions[currentQuestionIndex].options) {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsContainer.appendChild(button);
        }
    } else if (questions[currentQuestionIndex].type === 'open-ended') {
        const answerInput = document.createElement('textarea');
        answerInput.id = 'open-question-answer';
        answerInput.setAttribute('placeholder', 'Typ hier uw antwoord...');
        optionsContainer.innerHTML = ''; // Clear any previous content
        optionsContainer.appendChild(answerInput);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit Answer';
        submitButton.id = 'open-question-submit-btn';
        submitButton.addEventListener('click', () => submitOpenAnswer());
        optionsContainer.appendChild(submitButton);
    }

    feedbackContainer.innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
}

function submitOpenAnswer() {
    const submittedAnswer = document.getElementById('open-question-answer');
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackContainer = document.getElementById('feedback');

    submittedAnswer.setAttribute('readonly', 'readonly');
    submittedAnswer.value = submittedAnswer.value || 'No answer provided';

    feedbackContainer.innerHTML = `<h2 class="correct-answer">Het juiste antwoord is ${correctAnswer}</h2>`;
    document.getElementById('open-question-submit-btn').style.display = 'none';

    const correctButton = document.createElement('button');
    const wrongButton = document.createElement('button');

    correctButton.textContent = 'Correct';
    correctButton.id = 'correct-btn';
    correctButton.addEventListener('click', () => {
        correctAnswers++;
        nextQuestion();
    });

    wrongButton.textContent = 'Fout';
    wrongButton.id = 'wrong-btn';
    wrongButton.addEventListener('click', () => {
        nextQuestion();
    });

    feedbackContainer.appendChild(correctButton);
    feedbackContainer.appendChild(wrongButton);
}

function checkAnswer(selectedAnswer) {
    const feedbackContainer = document.getElementById('feedback');
    if(userName.trim() === ''){
        alert('Vul alstublieft uw naam in voordat u antwoord geeft.');
        return;
    }

    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        feedbackContainer.innerHTML = '<h2 class="correct">Correct!</h2>';
        correctAnswers++;
    } else {
        feedbackContainer.innerHTML = `<h2 class="wrong">Fout! Het juiste antwoord is ${correctAnswer}</h2>`;
    }

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear quiz container
     
    const finishContainer = document.createElement('div');
    finishContainer.classList.add('finish-container');
    finishContainer.innerHTML = `<h2>Quiz Afgerond!</h2><p>Je hebt ${correctAnswers} van de ${questions.length} vragen correct beantwoord.</p>`;
    quizContainer.appendChild(finishContainer);
    
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'block';
}

// Initial display
displayQuestion();
