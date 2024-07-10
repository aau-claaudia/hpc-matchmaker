document.addEventListener('DOMContentLoaded', () => {
    // Define the questions and options
    const quizData = [
        {
            question: "What are your role at AAU?",
            options: ["Researcher", "Staff", "Student"],
        },
        {
            question: "Do you need to process or store confidential or sensitive data?",
            options: ["I’m only working on data levels 0, 1", "I will include data levels 2, 3"],
            next: [
                {question: "Data processing question for level 0, 1", options: ["Option 1", "Option 2"]}, 
                {question: "Data processing question for level 2, 3", options: ["Option 3", "Option 4"]}
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let previousQuestions = [];

    const questionTitle = document.getElementById('quiz-title');
    const questionHint = document.querySelector('.quiz-title-hint');
    const questionContent = document.querySelector('.question-content');
    const remainingQuestionsCount = document.getElementById('remaining-questions-count');
    const progressBar = document.getElementById('progress-bar');
    const nextButton = document.querySelector('.next-btn');
    const previousButton = document.querySelector('.next-previous');

    function renderQuestion(index) {
        const questionData = quizData[index];
        questionTitle.textContent = questionData.question;
        questionContent.innerHTML = '';

        questionData.options.forEach((option, i) => {
            const formCheck = document.createElement('div');
            formCheck.className = 'form-check question-option';
            formCheck.innerHTML = `
                <input class="form-check-input" type="radio" name="quizOptions" id="option${i}">
                <label class="form-check-label question-option-content" for="option${i}">
                    ${option}
                </label>
            `;
            questionContent.appendChild(formCheck);
        });

        remainingQuestionsCount.textContent = quizData.length - index - 1;

        // Calculate progress percentage
        const progressPercentage = (index / quizData.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.textContent = `${Math.round(progressPercentage)}%`;

        nextButton.style.display = 'none'; // Hide next button initially

        // Hide the previous button if it's the first question
        if (index === 0) {
            previousButton.style.visibility = 'hidden';
        } else {
            previousButton.style.visibility = 'visible';
        }

        // Add event listeners to options to show the next button when an option is selected
        document.querySelectorAll('input[name="quizOptions"]').forEach(option => {
            option.addEventListener('change', () => {
                nextButton.style.display = 'inline-block'; // Show next button when an option is selected
            });
        });
    }

    function getNextQuestionIndex(selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (currentQuestion.next && currentQuestion.next[selectedOption]) {
            quizData.splice(currentQuestionIndex + 1, 0, currentQuestion.next[selectedOption]);
        }
    }

    nextButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="quizOptions"]:checked');
        if (selectedOption) {
            previousQuestions.push(currentQuestionIndex);
            const selectedOptionIndex = Array.from(document.querySelectorAll('input[name="quizOptions"]')).indexOf(selectedOption);

            getNextQuestionIndex(selectedOptionIndex);

            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                renderQuestion(currentQuestionIndex);
            }
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    previousButton.addEventListener('click', () => {
        if (previousQuestions.length > 0) {
            currentQuestionIndex = previousQuestions.pop();
            renderQuestion(currentQuestionIndex);
        }
    });

    // Initialize the quiz
    renderQuestion(currentQuestionIndex);
});
