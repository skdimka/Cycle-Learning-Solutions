let number = 100;

let sum = 0;

let sumWhile = 0;
let j = 0;

let sumDoWhile = 0;
let k = 0;

// for (i = 0; i <= number; i++) {
//     sum += i;
// }
// console.log(sum);

// for (i = number; i >= 0; i--) {
//     sum += i;
// }
// console.log(sum);


// while (j < number) {
//     j++;
//     sumWhile += j;
// }
// console.log(sumWhile);

while (j <= number) {
    sumWhile += j;
    j++;
}
console.log(sumWhile);



// do {
//     k++;
//     sumDoWhile += k;
// } while (k < number);
// console.log(sumDoWhile);