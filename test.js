"use strict";

const $ = document.querySelector.bind(document);

const quizAnswers = $("#quiz-answers");
const startButton = $(".start_btn");
const progressBar = $(".progress_container");
const quizFooter = $(".quiz_footer");

let score = 0; // кол-во правильных ответов
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

  // Формируем вопрос
  let questionHTML = `<h3>${currentQuestion.question}</h3>`;
  answers.forEach((answer, index) => {
    questionHTML += `
      <div class="quiz_answer" onclick="optionSelected(this, ${index})">
        ${answer.text}
      </div>`;
  });

  total.innerHTML = `${questionIndex + 1} / ${questions.length}`;
  progress.style.width = `${Math.round(
    ((questionIndex + 1) / questions.length) * 100
  )}%`;
  quizAnswers.innerHTML = questionHTML;
}

function optionSelected(answerElement, index) {
  const currentQuestion = questions[questionIndex];
  const userAnswer = currentQuestion.answer[index].text; // Ответ пользователя
  const correctAnswer = currentQuestion.answer.find(ans => ans.isCorrect).text; // Ищем правильный ответ
  const options = document.querySelectorAll(".quiz_answer");

  // Проверка правильного ответа
  if (userAnswer === correctAnswer) {
    score += 1; // Увеличиваем счётчик правильных ответов
    answerElement.classList.add("correct"); // Добавляем зелёный цвет для правильного ответа
  } else {
    answerElement.classList.add("incorrect"); // Красный цвет для неправильного

    // Подсвечиваем правильный ответ
    options.forEach((item) => {
      if (item.textContent === correctAnswer) {
        setTimeout(() => {
          item.classList.add("correct"); // Правильный ответ зелёным
        }, 100);
      }
    });
  }

  // Делаем остальные варианты неактивными
  options.forEach((option) => {
    option.classList.add("disabled");
  });
}

function showFooter() {
  quizFooter.style.visibility = "initial";
}

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  clearPage();
  showQuestion();
  showFooter();
});
