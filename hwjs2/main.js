const yourName = prompt("Как вас зовут?");
document.write(`Меня зовут ${yourName}.`);
const age = prompt("Сколько вам лет?");
document.write(`Мне ${age}.`);
const city = prompt("Из какого вы города?");
document.write(`Я проживаю в городе ${city}.`);
const phone = prompt("Ваш номер телефона?");

const email = prompt("Ваша электронная почта?");
document.write(
    `Мои контактные данные: телефон и электронная почта ${phone} , ${email}.`
);
const company = prompt("Где вы работаете?");
document.write(`Я работаю в компании ${company}.`);

let year = 2023 - age;

document.write(`${yourName} родился в ${year} году.`);

let num = "123321";
let firstHalf = num.slice(0.3);
let secondHalf = num.slice(3);
let sum = (str) => str.split("").reduce((acc, curr) => acc + Number(curr), 0);
if (sum(firstHalf) === sum(secondHalf)) {
    console.log("да");
} else {
    console.log("нет");
}

function checkNumber(a) {
    if (a > 0) {
        console.log("Верно");
    } else {
        console.log("Неверно");
    }
}

checkNumber(1);
checkNumber(0);
checkNumber(-3);

let a = 10;
let b = 2;
let sum1 = a + b;
console.log(sum);

let diff = a - b;
console.log(diff);

let prd = a * b;
console.log(prd);

let qtnt = a / b;
console.log(qtnt);
if (sum1 > 1) {
    let sum2 = sum1 * sum1;
    console.log(sum2);
}
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let n = 45;

if (n >= 0 && n <= 14) {
    console.log("Число попадает в первую четверть");
} else if (n >= 15 && n <= 29) {
    console.log("Число попадает во вторую четверть");
} else if (n >= 30 && n <= 44) {
    console.log("Число попадает в третью четверть");
} else if (n >= 45 && n <= 59) {
    console.log("Число попадает в четвертую четверть");
} else {
    console.log();
    ("Число выходит за пределы минут в часе");
}

let day = 15;
if (day >= 1 && day <= 10) {
    console.log("Число попадает в первую декаду");
} else if (day >= 10 && day <= 20) {
    console.log("Число попадает во вторую декаду");
} else if (day >= 20 && day <= 31) {
    console.log("Число попадает в третью декаду");
} else {
    console.log("В месяце не может больше 31 дня");
}

function convertDays(days) {
    let years = days / 365;
    let months = days / 31;
    let weeks = days / 7;
    let hours = days * 24;
    let minutes = days * 24 * 60;
    let seconds = days * 24 * 60 * 60;

    if (years < 1) {
        console.log("Меньше года");
    } else {
        console.log("Лет:", years.toFixed(2));
    }

    if (months < 1) {
        console.log("Меньше месяца");
    } else {
        console.log("Месяцев:", months.toFixed(2));
    }

    if (weeks < 1) {
        console.log("Меньше недели");
    } else {
        console.log("Недель:", weeks.toFixed(2));
    }

    console.log("Часов:", hours.toFixed(2));
    console.log("Минут:", minutes.toFixed(2));
    console.log("Секунд:", seconds.toFixed(2));
}
convertDays(365);
