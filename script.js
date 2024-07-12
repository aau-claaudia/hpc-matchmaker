document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            hpc: ["AI-LAB", "AI Cloud", "UCloud", "Strato"],
            question: "What is your role at AAU?",
            options: ["Student", "Researcher", "Lecturer"],
            next: [
                {
                    hpc: ["AI-LAB", "UCloud", "Strato"],
                    question: "Do you need to process or store confidential or sensitive data?",
                    options: ["I'm only working on data levels 0, 1<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>Data level 0: Public information. Data level 1: Internal information - only users with a purely work-related need may and can have access to.</p></div></span>", "I will include data levels 2, 3<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>Data level 2: Confidential information - only users with a purely work-related need may and can have access to, and where a breach of confidentiality will have semi-serious impacts for the parties involved. Data level 3: sensitive information - due to its personal, technical, commercial, or competitive nature and sensitivity, must be protected against unintentional access and disclosure.</p></div></span>"],
                    next: [
                        {
                            hpc: ["AI-LAB", "UCloud", "Strato"],
                            question: "What type of processing power is required for your work?",
                            options: [
                                "GPU-focused<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>My work involves tasks like machine learning, deep learning, or other GPU-accelerated computations that benefit from parallel processing capabilities.</p></div></span>",
                                "CPU-focused<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>My work involves general computations, high-performance simulations, or tasks that rely on the strong sequential processing power of CPUs.</p></div></span>",
                                "It requires efficiency of both CPU and GPU equally<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>My work requires a combination of GPU and CPU resources to handle a diverse set of computational tasks efficiently.</p></div></span>",
                                "I don't know"
                            ],
                            next: [
                                {
                                    hpc: ["AI-LAB", "UCloud"],
                                    question: "Which capability is most crucial for your work?",
                                    options: [
                                        "My work requires training and deploying machine learning models, image recognition models, or large language models.",
                                        "I need a platform that supports a wide range of scientific applications, visualization tools etc."
                                    ],
                                    next: ["AI-LAB", "UCloud"]
                                },
                                {
                                    hpc: ["UCloud", "Strato"],
                                    question: "What type of interface do you prefer for interacting with the HPC platform?",
                                    options: [
                                        "I prefer a user-friendly environment with visual tools for easier navigation and management of my tasks.",
                                        "I am comfortable using terminal commands for precise control and efficient execution of my tasks."
                                    ],
                                    next: ["UCloud", "Strato"]
                                },
                                {
                                    hpc: ["UCloud", "Strato"],
                                    question: "What type of interface do you prefer for interacting with the HPC platform?",
                                    options: [
                                        "I prefer a user-friendly environment with visual tools for easier navigation and management of my tasks.",
                                        "I am comfortable using terminal commands for precise control and efficient execution of my tasks."
                                    ],
                                    next: ["UCloud", "Strato"]
                                },
                                {
                                    hpc: ["AI-LAB", "UCloud"],
                                    question: "Which capability is most crucial for your work?",
                                    options: [
                                        "My work requires training and deploying machine learning models, image recognition models, or large language models.",
                                        "I need a platform that supports a wide range of scientific applications, visualization tools etc."
                                    ],
                                    next: ["AI-LAB", "UCloud"]
                                }
                            ]
                        },
                        "UCloud"
                    ]
                },
                {
                    hpc: ["AI Cloud", "UCloud", "Strato"],
                    question: "Do you need to process or store confidential or sensitive data?",
                    options: ["I'm only working on data levels 0, 1<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>Data level 0: Public information. Data level 1: Internal information - only users with a purely work-related need may and can have access to.</p></div></span>", "I will include data levels 2, 3<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>Data level 2: Confidential information - only users with a purely work-related need may and can have access to, and where a breach of confidentiality will have semi-serious impacts for the parties involved. Data level 3: sensitive information - due to its personal, technical, commercial, or competitive nature and sensitivity, must be protected against unintentional access and disclosure.</p></div></span>"],
                    next: [
                        {
                            hpc: ["AI Cloud", "UCloud", "Strato"],
                            question: "What type of processing power is required for your work?",
                            options: [
                                "GPU-focused<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>My work involves tasks like machine learning, deep learning, or other GPU-accelerated computations that benefit from parallel processing capabilities.</p></div></span>",
                                "CPU-focused<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>My work involves general computations, high-performance simulations, or tasks that rely on the strong sequential processing power of CPUs.</p></div></span>",
                                "It requires efficiency of both CPU and GPU equally<span><div class='survey-tooltip'><span>?</span><p class='tooltip-text'>My work requires a combination of GPU and CPU resources to handle a diverse set of computational tasks efficiently.</p></div></span>",
                                "I don't know"
                            ],
                            next: [
                                {
                                    hpc: ["AI Cloud", "UCloud"],
                                    question: "Which capability is most crucial for your work?",
                                    options: [
                                        "My work requires training and deploying machine learning models, image recognition models, or large language models.",
                                        "I need a platform that supports a wide range of scientific applications, visualization tools etc."
                                    ],
                                    next: ["AI Cloud", "UCloud"]
                                },
                                {
                                    hpc: ["UCloud", "Strato"],
                                    question: "What type of interface do you prefer for interacting with the HPC platform?",
                                    options: [
                                        "I prefer a user-friendly environment with visual tools for easier navigation and management of my tasks.",
                                        "I am comfortable using terminal commands for precise control and efficient execution of my tasks."
                                    ],
                                    next: ["UCloud", "Strato"]
                                },

                                {
                                    hpc: ["UCloud", "Strato"],
                                    question: "What type of interface do you prefer for interacting with the HPC platform?",
                                    options: [
                                        "I prefer a user-friendly environment with visual tools for easier navigation and management of my tasks.",
                                        "I am comfortable using terminal commands for precise control and efficient execution of my tasks."
                                    ],
                                    next: ["UCloud", "Strato"]
                                },
                                {
                                    hpc: ["AI Cloud", "UCloud"],
                                    question: "Which capability is most crucial for your work?",
                                    options: [
                                        "My work requires training and deploying machine learning models, image recognition models, or large language models.",
                                        "I need a platform that supports a wide range of scientific applications, visualization tools etc."
                                    ],
                                    next: ["AI Cloud", "UCloud"]
                                }
                            ]
                        },
                        "UCloud"
                    ]
                },
                {
                    hpc: ["AI-LAB", "UCloud"],
                    question: "What type of compilation resources do your students need for their coursework and research projects?",
                    options: [
                        "My students are engaged in projects involving training and deploying ML models using TensorFlow and PyTorch.",
                        "My students use a versatile platform for scientific applications and visualization, prioritizing ease of use and collaboration."
                    ],
                    next: ["AI-LAB", "UCloud"]
                }
            ]
        }
    ];
    
    let currentPath = [];
    let currentQuestionIndex = 0;

    const questionTitle = document.getElementById('quiz-title');
    const questionTitleHint = document.querySelector('.quiz-title-hint');
    const questionContent = document.querySelector('.question-content');
    const remainingProgressBar = document.getElementById('remaining-progress-bar');
    const nextButton = document.querySelector('.next-btn');
    const previousButton = document.querySelector('.next-previous');
    const buttonContent = document.querySelector('.button-content');
    const quizBody = document.querySelector('.quiz-body');
    const finishedContent = document.querySelector('.finished');
    const resetButton = document.getElementById('reset-btn');
    const retakeQuizButton = document.getElementById('retake-quiz-btn');

    resetButton.style.display = 'block';

    
    const hpcLinks = {
        "UCloud": document.getElementById('ucloud'),
        "AI Cloud": document.getElementById('aicloud'),
        "AI-LAB": document.getElementById('ailab'),
        "Strato": document.getElementById('strato'),
        "LUMI": document.getElementById('lumi')
    };

    function calculateLongestPath(question) {
        if (typeof question === 'string') return 0;
        if (!question.next) return 1;

        return 1 + Math.max(...question.next.map(calculateLongestPath));
    }

    const totalQuestions = calculateLongestPath(quizData[0]);

    function renderQuestion() {
        resetButton.style.display = 'block';
        const questionData = getCurrentQuestion();
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

        const remainingQuestions = totalQuestions - currentPath.length;
        const progressPercentage = ((totalQuestions - remainingQuestions) / totalQuestions) * 100;
        remainingProgressBar.style.width = `${progressPercentage}%`;
        remainingProgressBar.textContent = `${Math.round(progressPercentage)}%`;

        nextButton.style.display = 'none';
        previousButton.style.display = currentPath.length === 0 ? 'none' : 'inline-block';

        document.querySelectorAll('input[name="quizOptions"]').forEach(option => {
            option.addEventListener('change', () => {
                nextButton.style.display = 'inline-block';
            });
        });

        updateHpcLinks(questionData.hpc);
        updateButtonLayout();
    }

    function updateButtonLayout() {
        if (currentPath.length === 0) {
            buttonContent.style.justifyContent = 'right';
        } else {
            buttonContent.style.justifyContent = 'space-between';
        }
    }

    function updateHpcLinks(hpcArray) {
        for (const key in hpcLinks) {
            if (hpcLinks.hasOwnProperty(key)) {
                hpcLinks[key].style.display = hpcArray.includes(key) ? 'block' : 'none';
            }
        }
    }

    function getCurrentQuestion() {

        let question = quizData[currentQuestionIndex];
        currentPath.forEach(index => {
            question = question.next[index];
        });
        return question;
    }

    function getNextQuestionIndex(selectedOption) {
        let question = quizData[currentQuestionIndex];
        currentPath.forEach(index => {
            question = question.next[index];
        });
        if (question.next && question.next[selectedOption]) {
            return question.next[selectedOption];
        }
        return null;
    }

    function displayResult(result) {
        quizBody.style.display = 'none';
        finishedContent.style.display = 'block';
        questionTitle.textContent = `Result: ${result}`;
        questionTitleHint.textContent = 'Based on your answers, the selection of HPC has been tailored to the option fitting your needs. You may now take a closer look at the result of the quiz and make sure it fulfils your expectations as well as suits your project requirements.';
        questionContent.innerHTML = '';
        remainingProgressBar.style.width = '100%';
        remainingProgressBar.textContent = '100%';
        nextButton.style.display = 'none';
        previousButton.style.display = 'none';
        updateHpcLinks([result]);
        resetButton.style.display = 'none';
    }

    nextButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="quizOptions"]:checked');
        if (selectedOption) {
            const selectedOptionIndex = Array.from(document.querySelectorAll('input[name="quizOptions"]')).indexOf(selectedOption);
            const nextQuestion = getNextQuestionIndex(selectedOptionIndex);
            if (typeof nextQuestion === 'string') {
                displayResult(nextQuestion);
            } else {
                currentPath.push(selectedOptionIndex);
                renderQuestion();
            }
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    previousButton.addEventListener('click', () => {
        if (currentPath.length > 0) {
            currentPath.pop();
            renderQuestion();
        }
    });

    resetButton.addEventListener('click', () => {
        currentPath = [];
        currentQuestionIndex = 0;
        quizBody.style.display = 'block';
        finishedContent.style.display = 'none';
        renderQuestion();
        resetButton.style.display = 'block';
    });

    retakeQuizButton.addEventListener('click', () => {
        resetButton.click();
    });

    renderQuestion();
});
