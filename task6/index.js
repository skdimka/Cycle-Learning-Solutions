const clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;

let discount = 0;

if (clientSpentForAllTime >= 500) {
    discount = 30;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
}

clientSpentToday = clientSpentToday - clientSpentToday / 100 * discount;
clientSpentForAllTime += clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)

