// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!'); 
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
// }

let i = 0;

// while (i < 3) {
//     i++;
//     let newStudent = prompt("Введите имя нового студента!");
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`);
//         console.log(i);
//     }
// }

do {
    i++;
    let newStudent = prompt("Введите имя нового студента!");
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
        console.log(i);
    }
} while (i < 3); 