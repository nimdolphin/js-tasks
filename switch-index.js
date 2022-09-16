// ЗАДАЧИ НА SWITCH
// Напишите if..else, соответствующий следующему switch:

let browser = prompt("write own browser", "");

if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

// Перепишите код с использованием одной конструкции switch:

const number = +prompt("Введите число между 0 и 3", "");
switch (number) {
  case 0:
    console.log("Вы ввели число 0");
    break;

  case 1:
    console.log("Вы ввели число 1");
    break;

  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}

//  Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'весна' и так далее.
//  Решите задачу через switch-case.
// Реализуем ввод переменной через prompt

let num = +prompt("введите любое число от 1 до 4 включительно", "");
let result = num;
switch (result) {
  case 1:
    console.log("зима");
    break;
  case 2:
    console.log("весна");
    break;
  case 3:
    console.log("лето");
    break;
  case 4:
    console.log("осень");
    break;
}

// В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = +prompt("выбери число от 1 до 12", "");
switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("it is winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("it is spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("it is summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("it is fall");
    break;
}

// Дана строка, состоящая из символов, например, 'abcde'.
//  Проверьте, что первым символом этой строки является буква 'a'.
//  Если это так - выведите 'да', в противном случае выведите 'нет'

// let abc = prompt("введите что-нибудь", "");

// if (abc[0] === "a") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

let abc = prompt("введите что-нибудь", "");
let abc2 = abc[0] === "a" ? "yes" : "no";

abc2 === abc;
console.log(abc2);

// Дана строка с цифрами, например, '12345'. Проверьте, что первым
// символом этой строки является цифра 1, 2 или 3. Если это так -
//  выведите 'да', в противном случае выведите 'нет'.

let str = prompt("введите что-нибудь", "");

switch (str[0]) {
  case "1":
  case "2":
  case "3":
    console.log("yes");
    break;
  default:
    console.log("no");
}

// Дана строка из 3-х цифр. Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.
const str3 = "456";

str3[0] + str3[1] + str3[2];

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех
// цифр равняется сумме вторых трех цифр. Если это так - выведите
// 'да', в противном случае выведите 'нет'.

const s = "123123";

if (s[0] + s[1] + s[2] === s[3] + s[4] + s[5]) {
  console.log("yes");
} else {
  console.log("no");
}

// Задача. Создайте переменную str и присвойте ей значение 'abcde'.
//  Обращаясь к отдельным символам этой строки выведите на экран символ
//  'a', символ 'b', символ 'e'.

let abcde = "abcde";

if (abcde[0] === "a") {
  console.log("a");
} else if (abcde[1] === "b") {
  console.log("b");
} else if (abcde[4] === "e") {
  console.log("e");
}

//  Напишите скрипт, который считает количество секунд в переданном
// кол-ве дней (кол-во дней вводим через prompt)

const day = +prompt("количество дней", "");

console.log(`в ${day} дне(днях) ${day * 24 * 60 * 60} секунд`);

// Переделайте приведенный код так, чтобы в нем использовались
// операции +=, -=, *=, /=, ++, --. Количество строк кода при
// этом не должно измениться. Код для переделки:

// var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);

let numn = 1;
numn += 12;
numn -= 14;
numn *= 5;
numn /= 7;
numn++;
numn--;
console.log(numn);
// сделала numn, тк выше уже есть num

// Создайте переменные str1='Привет, ' и str4='Мир!'.
// С помощью этих переменных и операции сложения строк выведите
//  на экран фразу 'Привет, Мир!'.

let str1 = "Привет,";
let str4 = "Мир!";

console.log(str1 + " " + str4);

// Создайте переменную name и присвойте ей ваше имя.
// Выведите на экран фразу 'Привет, %Имя%!'.

let name = "Rimma";
console.log(`Привет, ${name}`);

// Создайте переменную, присвойте ей число.
// Возведите это число в квадрат. Выведите его на экран.

const w = 5;
console.log(w * w);

// Создайте переменную num и присвойте ей значение '12345'.
//  Найдите произведение (умножение) цифр этого числа.

const numr = "12345";
console.log(1 * 2 * 3 * 4 * 5);
