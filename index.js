// ЗАДАНИЯ НА ЦИКЛЫ 1
// При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i < 11; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let a = 0; a < 3; a++) {
  console.log(`number ${a}!`);
}

let a = 0;
while (a < 3) {
  console.log(`number ${a}!`);
  a++;
}

// Повторять цикл, пока ввод неверен
let num;
do {
  num = prompt("введите число больше 100", "");
  if (!num) break;
} while (num < 100);

// Вывести простые числа
let n = 10;

numb: for (let m = 2; m <= n; m++) {
  for (let q = 2; q < m; q++) {
    if (m % q === 0) continue numb;
  }
  console.log(m);
}

// 1. Выведите столбец чисел от 1 до 50.
//  (в консоль и в документ html с помощью document.write)
//   Использовать два типа циклов, while и for

let b = 1;
while (b < 51) {
  console.log(b);
  b++;
}

for (let c = 1; c < 51; c++) {
  console.log(c);
}

document.write("1<br>");
document.write("2<br>");
document.write("3<br>");
document.write("4<br>");
document.write("5<br>");
document.write("6<br>");
document.write("7<br>");
document.write("8<br>");
document.write("9<br>");
document.write("10<br>");
document.write("11<br>");
document.write("12<br>");
document.write("13<br>");
document.write("14<br>");
document.write("15<br>");
document.write("16<br>");
document.write("17<br>");
document.write("18<br>");
document.write("19<br>");
document.write("20<br>");
document.write("21<br>");
document.write("22<br>");
document.write("23<br>");
document.write("24<br>");
document.write("25<br>");
document.write("26<br>");
document.write("27<br>");
document.write("28<br>");
document.write("29<br>");
document.write("30<br>");
document.write("31<br>");
document.write("32<br>");
document.write("33<br>");
document.write("34<br>");
document.write("35<br>");
document.write("36<br>");
document.write("37<br>");
document.write("38<br>");
document.write("39<br>");
document.write("40<br>");
document.write("41<br>");
document.write("42<br>");
document.write("43<br>");
document.write("44<br>");
document.write("45<br>");
document.write("46<br>");
document.write("47<br>");
document.write("48<br>");
document.write("49<br>");
document.write("50<br>");

// 2. Выведите столбец чисел от 1 до 100.
for (let i = 1; i < 101; i++) {
  console.log(i);
}

//  3. Выведите столбец чисел от 11 до 33.
let t = 11;
while (t < 34) {
  console.log(t);
  t++;
}

//  4. Выведите столбец четных чисел в промежутке
// от 0 до 100.

for (let h = 0; h < 101; h++) {
  if (h % 2 === 1) continue;
  console.log(h);
}

// 5. С помощью цикла найдите сумму чисел от 1 до 100.

let sum = 0;
for (let d = 1; d < 101; d++) {
  sum += d;
}
console.log("сумма:" + sum);

// 6. Дано число m=1000. Делите его на 2 столько раз, пока
//  результат деления не станет меньше 50. Какое число получится?
//  Посчитайте количество итераций, необходимых для этого
//  (итерация - это проход цикла), и запишите его в переменную num.

let m = 1000;
let numb = 0;

while (m > 50) {
  m /= 2;
  numb++;
}
console.log(m);
console.log(numb);
