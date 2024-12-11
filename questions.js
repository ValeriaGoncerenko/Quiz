const questions = [
  {
    question: " Какой тип данных не существует в JavaScript?",
    answer: [
      { text: "String", correct: false },
      { text: "Undefined", correct: false },
      { text: "Double", correct: true },
      { text: "Symbol", correct: false },
    ],
  },
  {
    question: "Что выведет console.log(typeof NaN)?",
    answer: [
      { text: "Number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question: "Какой метод используется для добавления элемента в конец массива? ",
    answer: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "unshift()", correct: false },
      { text: "shift()", correct: false },
    ],
  },
  {
    question: "Чем отличается let от var?",
    answer: [
      { text: "let имеет блочную область видимости, а var — функциональную.", correct: true},
      { text: "let поднимается (hoisted), а var — нет.", correct: false },
      { text: "var используется только в строгом режиме.", correct: false },
      { text: "Нет отличий.", correct: false },
    ],
  },
  {
    question: "Что означает use strict в начале скрипта? ",
    answer: [
      { text: "Активирует строгий режим.", correct: true },
      { text: "Добавляет поддержку новых функций ES6.", correct: false },
      { text: "Улучшает производительность.", correct: false },
      { text: "Запрещает использование let.", correct: false},
    ],
  },
  {
    question: " Какой оператор используется для проверки строгого равенства в JavaScript?",
    answer: [
      { text: "=", correct: false },
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!==", correct: false },
    ],
  },
  {
    question: "Как преобразовать строку 123 в число?",
    answer: [
      { text: "Number(123)", correct: false },
      { text: "parseInt(123)", correct: false },
      { text: "+123", correct: false },
      { text: "Все перечисленные", correct: true},
    ],
  },

  {
    question: "Какой из этих методов возвращает новый массив?",
    answer: [
      { text: "forEach()", correct: false },
      { text: "map()", correct: false },
      { text: "push()", correct: false },
      { text: "pop()", correct: true },
    ],
  },
  {
    question: " Что произойдет при вызове setTimeout с функцией без времени ожидания?",
    answer: [
      { text: "Выполнится сразу.", correct: false },
      { text: "Выполнится после основного потока событий.", correct: true },
      { text: "Никогда не выполнится.", correct: false },
      { text: "Выдаст ошибку.", correct: false },
    ],
  },
  {
    question: "Какой результат даст сравнение null === undefined?",
    answer: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
    ],
  },
];
