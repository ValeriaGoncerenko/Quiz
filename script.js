"use strict";

const $ = document.querySelector.bind(document);

const quizAnswers = $("#quiz-answers");
const startButton = $(".start_btn");
const progressBar = $(".progress_container");
const quizFooter = $(".quiz_footer");



let score = 0; //кол-во правильных вопросов
let questionIndex = 0; // текущий вопрос

function clearPage() {
  quizAnswers.innerHTML = "";
}
clearPage();

function showQuestion() {
  const currentQuestion = questions[questionIndex];
  const answers = currentQuestion.answer;

  let progress = $(".progress_bar");
  let total = $(".quiz_total");

  let questionHTML = `<h3>${currentQuestion.question}</h3>`;
  answers.forEach((answer, index) => {
    console.log(answer);
    questionHTML +=
      `
      <div class="quiz_answer" onclick="optionSelected('` +
      answer.text +
      `')">
        ${answer.text}
      </div>`;
  });
  total.innerHTML = `${questionIndex + 1} / ${questions.length}`;
  progress.style.width = `${Math.round(
    ((questionIndex + 1) / questions.length) * 100
  )}%`;
  quizAnswers.innerHTML = questionHTML;
}

function optionSelected(answerText) {
  const correctAnswer = questions[questionIndex].answer.filter(
    (a) => a.correct
  )[0];
  const options = document.querySelectorAll(".quiz_answer");
  const selectedOption = Array.from(options).filter(
    (o) => o.innerText == answerText
  )[0];
  selectedOption.classList.add("selected");
  if (answerText == correctAnswer.text) {
    score += 1;
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("incorrect");

    options.forEach((item) => {
      if (item.textContent === answerText) {
        setTimeout(() => {
          item.classList.add("correct");
        }, 100);
      }
    });
  }

  options.forEach((option) => {
    option.classList.add("disabled");
  });
}

function getSelectedOptionDOM(){
  const options = document.querySelectorAll(".quiz_answer");
  const selectedOption = Array.from(options).filter(
    (o) => o.classList.contains('selected')
  )[0];

  return selectedOption;
}


function showFooter(show) {
  if (show) {
    quizFooter.style.display = "flex";
  } else {
    quizFooter.style.display = "none";
  }
}



startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  clearPage();
  showQuestion();
  showFooter(true);
});

function nextQuestion() {
  if(getSelectedOptionDOM() == undefined) {
    alert ('Please answer the question')
    return;
  }
  questionIndex += 1;
  if (questionIndex == questions.length) {
    clearPage();
    showFooter(false);
    showResult();
  } else {
    showQuestion();
  }
}

function startOver (){
  score = 0;
  questionIndex = 0;
  const result =$(".result")
  result.setAttribute('hidden', 'true')
  showFooter(false)
  startButton.style.display = "block";
  clearPage();
}

function showResult(){
const result = $('.result')
const resultText = $('.result_text')
const resultButton = $('.result_btn')

result.removeAttribute("hidden")
resultText.innerHTML = `number of correct answers ${score} / ${questions.length}`
resultButton.innerText = "Start Over";
resultButton.onclick = startOver
  }