let userPassword = prompt('Введите пароль');

if (userPassword.length < 3 || userPassword.length > 20) {
    console.log("no");
} else {
    let hasBigSymbol = false;
    let hasNumbers = false;
    for (i = 0; i < userPassword.length; i++) {
        const symbol = userPassword[i];
        const isNumberSymbol = !isNaN(parseInt(symbol));
        if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
            hasBigSymbol = true;
        }
        if (isNumberSymbol) {
            hasNumbers = true;
        }
    }
    if (!hasBigSymbol || !hasNumbers) {
        console.log('nooo')
    } else {
        console.log('goood')
    }
}