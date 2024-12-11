"use strict";

const questions = [
  {
    question: "Що з їжі я люблю найбільше?",
    answer: [
      { text: "Шаурма", correct: false },
      { text: "Піца", correct: false },
      { text: "Суші", correct: true },
      { text: "Бургер", correct: false },
    ],
  },
  {
    question: "Що з їжі я люблю найбільше?",
    answer: [
      { text: "Шаурма", correct: false },
      { text: "Піца", correct: false },
      { text: "Суші", correct: true },
      { text: "Бургер", correct: false },
    ],
  },
];

const $ = document.querySelector.bind(document);

const quizAnswers = $("#quiz-answers");
const startButton = $(".start_btn");
const progressBar = $(".progress_wrapper");
const quizFooter = $(".quiz_footer");

let score = 0; // Количество правильных ответов
let questionIndex = 0; // Текущий вопрос

// Очищаем страницу
function clearPage() {
  quizAnswers.innerHTML = "";
  progressBar.innerHTML = "";
  quizFooter.innerHTML = "";
}

clearPage()

// Функция для отображения вопроса и ответов
function showQuestion() {
  const currentQuestion = questions[questionIndex];
  const answers = currentQuestion.answer;

  // Отображаем вопрос
  quizAnswers.innerHTML = `<h3>${currentQuestion.question}</h3>`;

  // Отображаем ответы
  answers.forEach((answer, index) => {
    quizAnswers.innerHTML += `
      <div class="quiz_answer" onclick="selectAnswer(${index})">
        ${answer.text}
      </div>`;
  });
}

// Функция для обработки выбора ответа
function selectAnswer(answerIndex) {
  const isCorrect = questions[questionIndex].answer[answerIndex].correct;
  
  if (isCorrect) {
    score++;
  }

  // Переход к следующему вопросу
  questionIndex++;

  if (questionIndex < questions.length) {
    clearPage();
    showQuestion(); // Показываем следующий вопрос
  } else {
    endQuiz(); // Если вопросы закончились, выводим результат
  }
}

// Функция для завершения квиза
function endQuiz() {
  quizAnswers.innerHTML = `<h3>Квиз завершён! Ваш результат: ${score}/${questions.length}</h3>`;
}

// Начинаем квиз по нажатию кнопки "Start Quiz"
startButton.addEventListener("click", () => {
  startButton.style.display = "none"; // Скрываем кнопку "Start Quiz"
  quizFooter.removeAttribute("hidden"); // Показываем футер
  clearPage();
  showQuestion(); // Показываем первый вопрос
});

// Обработчик для кнопки "Submit" (если нужно)
document.querySelector("#submit").addEventListener("click", () => {
  clearPage();
  showQuestion();
});
