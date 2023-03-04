// const clientName = prompt('Введите имя клиента');
// let clientSpentToday;
// let clientSpentForAllTime;

// let discount = 0;


// let questionOne = prompt('Сколько клиент потратил сегодня?');

// if (!isNaN(questionOne)) {
//     clientSpentToday = questionOne;
//     let questionTwo = prompt('Сколько клиент потратил за все время?');
//     if (!isNaN(questionTwo)) {
//         clientSpentForAllTime = questionTwo;
//         discountCounter();
//     } else {
//         alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!')
//     }
// } else {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!')
// }

// function discountCounter() {
//     clientSpentForAllTime = Number(clientSpentForAllTime);
//     clientSpentToday = Number(clientSpentToday);

//     if (clientSpentForAllTime >= 500) {
//         discount = 30;
//     } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//         discount = 20;
//     } else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//         discount = 10;
//     }

//     clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount);
//     clientSpentForAllTime += clientSpentToday;

//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// }

const clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
let clientSpentToday = prompt('Сколько клиент потратил сегодня?');

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

if (!clientSpentForAllTime || !clientSpentToday) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!')
} else if (clientSpentForAllTime >= 500) {
    discount = 30;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
}

clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount);
clientSpentForAllTime += clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)






