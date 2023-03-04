const questionOne = "Сколько будет 2 + 2?";
const questionTwo = "Сколько будет 2 * 2?";

const correctAnswerOne = 4;
const correctAnswerTwo = 4;

let correctAnswers = 0;
let incorrectAnswers = 0;


const userAnswer1 = prompt(questionOne);
if (Number(userAnswer1) === correctAnswerOne) {
    correctAnswers += 1;
    alert(`Правильно! Верный ответ: ${correctAnswerOne}`);
} else {
    incorrectAnswers += 1;
    alert(`Не правильно! Верный ответ: ${correctAnswerOne}`);
}

const userAnswer2 = prompt(questionTwo);
if (Number(userAnswer2) === correctAnswerTwo) {
    correctAnswers += 1;
    alert(`Правильно! Верный ответ: ${correctAnswerTwo}`);
} else {
    incorrectAnswers += 1;
    alert(`Не правильно! Верный ответ: ${correctAnswerTwo}`);
}

alert(`Правильных ответов: ${correctAnswers}, Не правильных ответов: ${incorrectAnswers}`);
