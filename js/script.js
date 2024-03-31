const quizData = [
    {
        question: "Which of the following is NOT a valid variable name in Python?",
        options: ["my_variable", "1_variable", "_variable", "variable_1"],
        answer: "1_variable"
      },
      {
        question: "What will the following Python code output?\n\nprint(2 + 2 * 3)",
        options: ["6", "8", "12", "14"],
        answer: "8"
      },
      {
        question: "What does the 'len()' function in Python return?",
        options: ["The length of a string", "The number of elements in a list or tuple", "The size of a file", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "What is the output of 'print('Python'[1:4])' in Python?",
        options: ["'Py'", "'yth'", "'tho'", "'th'"],
        answer: "'yth'"
      },
      {
        question: "Which of the following is used to define a function in Python?",
        options: ["def", "function", "define", "func"],
        answer: "def"
      }  
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let mark=0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score-value");
  const markElement = document.getElementById("mark-value");
  const submit = document.getElementById("submit");
  
  function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
      score++;
      mark+=10;
      resultElement.innerText = "Correct!";
      resultElement.style.color="green";
    } else {
      resultElement.innerText = "Wrong!";
      resultElement.style.color="red";
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      /* displayQuestion(); */
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.innerText = "Quiz completed!";
    optionsElement.innerHTML = "";
    resultElement.innerText = "";
    scoreElement.innerText = `${score}`;
    markElement.innerText = `${mark}`;
  }
  
  
   submit.addEventListener("click",()=>{
    displayQuestion();
    submit.innerHTML="Submit";
    resultElement.innerText = "";
   })