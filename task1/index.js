//задача 1
const existedUserLogin = 'the_best_user';
const existedUserPassword = 12345678;

const aunteficationBtn = document.querySelector('.aunteficationButton');

aunteficationBtn.addEventListener('click', aunteficationUser);

function aunteficationUser() {
    const userLogin = document.querySelector('.userLogin').value;
    const userPassword = document.querySelector('.userPassword').value;
    console.log("auntefication user")

    if (String(userLogin).trim() === existedUserLogin
        && Number(userPassword) === existedUserPassword) {
        console.log('login and password true');
    }
    else {
        console.log('login and(or) password false');
    }
};


