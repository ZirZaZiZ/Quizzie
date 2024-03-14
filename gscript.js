const questions = [
    {
        question: 'hoeveel slachtoffers telde de eerste wereldoorlog ongeveer?',
        options: ['20 miljoen', '30 miljoen', '40 miljoen', '50 miljoen'],
        correctAnswer: '20 miljoen',
        type: 'multiple-choice',
        imageUrl:
    },
    {
        question: 'Hoe heette het vredesverdrag dat na WO1 ondertekent is?',
        options: ['verdrag van Versailles', 'Verdrag van Andelot', 'Verdrag van Ribemont', 'Verdrag van Spiers'],
        correctAnswer: 'verdrag van Versailles',
        type: 'multiple-choice',
        imageUrl: 'foto1.jpg'
    },
    {
        question: 'Wat stond er NIET in dit verdrag?',
        options: ['Duitse militaire besprekingen moeten gecontroleerd worden', 'Duitsland moet veel geld betalen voor schade', 'het Duitse leger mag uit max. 100000 man bestaan', 'Duitsland moet grondgebied afstaan'],
        correctAnswer: 'Duitse militaire besprekingen moeten gecontroleerd worden',
        type: 'multiple-choice',
        imageUrl:
    },,
    {
        question: 'Wat was een belangrijke vooruitgang in Nederland na aanleiding van WO1?',
        options: ['Homohuwelijk wordt legaal', 'NAVO wordt gevormt', 'Algemeen kiesrecht wordt ingevoerd', 'er kwam veel vooruitgang in de economie'],
        correctAnswer: 'Algemeen kiesrecht wordt ingevoerd',
        type: 'multiple-choice',
        imageUrl:
    },
    {
        question: 'Tegen het eind van WO1 was er een revolutionaire stemming. Wat was hier een gevolg van?',
        options: ['De voormalige Duitse keizer werd vermoord', 'De Russische tsaar werd vermoord', 'De koning van Frankrijk werd afgezet', 'De koningin van Nederland werd afgezet'],
        correctAnswer: 'De Russische tsaar werd vermoord',
        type: 'multiple-choice',
        imageUrl:
    },
    {
        question: 'De inflatie in Duitsland was verschrikkelijk in 1922. 1 dollar kostte namelijk…. ',
        options: ['5000 Mark', '10000 Mark', '20000 Mark', '25000 Mark'],
        correctAnswer: '20000 Mark',
        type: 'multiple-choice',
        imageUrl:
    },

    {
        question: 'Om de economische situatie te verbeteren werd er een nieuwe munt ingevoerd in duitsland. Hoe heette deze munt? ',
        options: ['Rentenmark', 'Kostenmark', 'Intermark', 'Uitermark'],
        correctAnswer: 'Rentenmark',
        type: 'multiple-choice',
        imageUrl:
    },
    {
        question: 'Na WO1 gebeurde de zogenaamde "beurskrach", wat hielt dit in?',
        options: ['Het was nu mogenlijk om te beleggen in aandelen', 'De beurs zag een enorme vooruitgang', 'Het was nu niet meer mogenlijk om te beleggen in aandelen', 'de beurs stortte in'],
        correctAnswer: 'de beurs stortte in',
        type: 'multiple-choice',
        imageUrl:
    },

    {
        question: 'Hoe heette het Amerikaanse plan om Duitsland terug overeind te helpen?',
        options: ['Darwinplan', 'Dawesplan', 'Dalesplan', 'Daysplan'],
        correctAnswer: 'Dawesplan',
        type: 'multiple-choice',
        imageUrl:
    },
    {
        question: 'in welk jaar begon de tweede wereldoorlog?',
        options: ['1937', '1938', '1939', '1940'],
        correctAnswer: '1939',
        type: 'multiple-choice'
    },
   
    {
        question: 'de uitvinding van de radio had een onbedoeld gevolg. waar werd het voor gebruikt?',
        correctAnswer: 'propaganda',
        type: 'open-ended'
    },

    {
        question: 'de uitvinding van de radio had een onbedoeld gevolg. waar werd het voor gebruikt?',
        correctAnswer: 'propaganda',
        type: 'open-ended'
    },
];

let currentQuestionIndex = 0;
 let correctAnswers = 0;
 

 function displayQuestion() {
 const imageContainer = document.getElementById('image');
 const questionElement = document.getElementById('question');
 const optionsContainer = document.getElementById('options');
 const feedbackContainer = document.getElementById('feedback');
 
 questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;
 const image = document.createElement('img');
 image.src = questions[currentQuestionIndex].imageUrl;
 imageContainer.innerHTML = '';
 imageContainer.appendChild(image);
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
 answerInput.setAttribute('placeholder', 'type hier je antwoord....');
 optionsContainer.innerHTML = ''; // Clear any previous content
 optionsContainer.appendChild(answerInput);
 
 const submitButton = document.createElement('button');
 submitButton.textContent = 'antwoord';
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
 submittedAnswer.value = submittedAnswer.value || 'geen antwoord ingevult.';
 
 feedbackContainer.innerHTML = `<h2 class="correct-answer">Het juiste antwoord is ${correctAnswer}</h2>`;
 document.getElementById('open-question-submit-btn').style.display = 'none';
 
 const correctButton = document.createElement('button');
 const wrongButton = document.createElement('button');
 
 correctButton.textContent = 'Juist';
 correctButton.id = 'correct-btn';
 correctButton.addEventListener('click', () => {
 correctAnswers++;
 nextQuestion();
 });
 
 wrongButton.textContent = 'onjuist';
 wrongButton.id = 'wrong-btn';
 wrongButton.addEventListener('click', () => {
 nextQuestion();
 });
 
 feedbackContainer.appendChild(correctButton);
 feedbackContainer.appendChild(wrongButton);
 }
 
 function checkAnswer(selectedAnswer) {
 const correctAnswer = questions[currentQuestionIndex].correctAnswer;
 const feedbackContainer = document.getElementById('feedback');
 
 if (selectedAnswer === correctAnswer) {
 feedbackContainer.innerHTML = '<h2 class="correct">Juist!</h2>';
 correctAnswers++;
 } else {
 feedbackContainer.innerHTML = `<h2 class="wrong">Onjuist! Het juiste antwoord is ${correctAnswer}</h2>`;
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
 const feedbackContainer = document.getElementById('feedback');
 feedbackContainer.innerHTML = `<h2>You got ${correctAnswers} out of ${questions.length} questions right!</h2>`;
 document.getElementById('next-btn').style.display = 'none';
 }
 
 // Initial display
 displayQuestion();