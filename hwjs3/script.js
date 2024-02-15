document.write("<br/> Задание 1 <br/>");
document.write("Выведите числа от 1 до 50 <br/>");

for (let i = 1; i <= 50; i++) {
    console.log(i);
    document.write(i + "<br/>");
}
document.write("<br/>");
document.write("Выведите числа от 35 до 8 <br/>");
for (let e = 35; e >= 8; e--) {
    console.log(e);
    document.write(e + "<br/>");
}
document.write("<br/>");

document.write("<br/> Задание 2: <br/>");
document.write(
    "Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку. <br/>"
);
let num = 89;

while (num >= 11) {
    document.write(num + "<br/>");
    num--;
}
document.write("<br/>");

let sum = 0;
for (let y = 0; y <= 100; y++) {
    sum += y;
}
console.log(sum);
document.write(sum + "<br/>");

document.write("<br/> Задание 4: <br/>");
document.write(
    "Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3)."
);
document.write("<br/>");

let o = 5;
let sum1 = 0;
for (let a = 1; a <= o; a++) {
    sum1 = 0;
    for (let p = 1; p <= a; p++) {
        sum1 += p;
    }
    document.write("Сумма: " + a + "=" + sum1 + "<br/>");
}
document.write("<br/>");

document.write("<br/> Задание 5: <br/>");
document.write(
    "Выведите чётные числа от 8 до 56. Решить задание через while и for.<br/>"
);
document.write("<br/>");

for (let s = 8; s <= 56; s++) {
    if (s % 2 == 0) document.write(s + " ");
}
document.write("<br/>");
document.write("<br/>");

let d = 8;
while (d <= 56) {
    if (d % 2 == 0) {
        document.write(d + " ");
    }
    d++;
}
document.write("<br/>");

document.write("<br/> Задание 6: <br/>");
document.write("Вывести на экран полную таблицу умножения: <br/>");

for (let f = 2; f <= 10; f++) {
    for (let g = 1; g <= 10; g++) {
        let result = f * g;
        document.write(f + "*" + g + "=" + result);
    }
}

document.write("<br/> Задание 7: <br/>");
document.write("<br/>");

let n = 1000;
let num1 = 0;

while (n >= 50) {
    n = n / 2;
    num1++;
}
document.write(n + num1);
