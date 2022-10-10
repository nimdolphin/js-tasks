// Напишите функцию pow(x,n), которая возвращает x в степени n.
//  Иначе говоря, умножает x на себя n раз и возвращает результат.
let x = +prompt("x- chislo", "");
let n = +prompt("n stepen", "");

function pow(x, n) {
  if (Number.isInteger(n) && n >= 1) {
    console.log(x ** n);
  } else {
    return;
  }
}
pow(x, n);

// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
let ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
};

ask(
  "are you agree?",
  () => console.log("yes"),
  () => console.log("no")
);

// Задача 1.   Напишите функцию, которая принимает 2 числа и возвращает 1,
// если первое число больше, чем второе; -1, если первое число меньше,
// чем второе, и 0, если числа равны.  Попробуйте реализовать эту функцию не
//  только с помощью if...else, но и с помощью тернарного оператора,
//  и в виде стрелочной функции.

function getNumb(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
}

// // с помощью тернарного оператора
function getNumb2(a, b) {
  return a > b ? 1 : a < b ? -1 : a === b;
}

// // в виде стрелочной функции
let getNumb3 = (a, b) => {
  return a > b ? 1 : a < b ? -1 : a === b;
};

// Задача 2  Напишите функцию, которая принимает 2 параметра:
// длину и ширину прямоугольника и вычисляет его площадь.
//  Если в функцию передали 1 параметр, то функция вычисляет
//  площадь квадрата.  Подсказка: используйте параметры функции по умолчанию.

// площадь прямоугольника
function calcArea(a, b) {
  return a * b;
}

let result = calcArea(5, 7);
console.log(result);

// // пдощадь квадрата

function calcSquare(a, b = 6) {
  return a * b;
}
let result2 = calcSquare(6);
console.log(result2);

// Задача 3 Написать функцию, получающую на вход два числа.
// Если оба числа чётные - функция возвращает их произведение.
//  Если оба числа нечётные - функция возвращает их сумму.
//   Если одно из чисел чётное, а второе нечётное - функция возвращает
//    это нечётное число.

const evenI = !(i % 2);
const evenJ = !(j % 2);

const oddI = !!(i % 2);
const oddJ = !!(j % 2);

function getN(i, j) {
  if (evenI && evenJ) {
    return i * j;
  } else if (oddI && oddJ) {
    return i + j;
  } else if (evenI || oddJ) {
    return j;
  } else {
    return i;
  }
}

let result1 = getN(i, j);
console.log(result1);

// Задача 4 Написать функцию, которая принимает 1 аргумент
//  (возраст пользователя) и возвращает boolean значение
//  - можно ему на сайт или нет.( если 18 и больше лет)

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let age = +prompt("введите возраст", "");

if (checkAge(age)) {
  console.log("разрешено");
} else {
  console.log("запрещено");
}

// Задача 5 Написать функцию, которая принимает 3 аргумента,
// если 1 аргумент true. - то складывать 2 и 3 аргумент ,
//  если 1-ый аргумент false  - вычитать 2 и 3 аргументы

function showArg(a, b, c) {
  if (!!a) {
    return b + c;
  }
  return b - c;
}

let result3 = showArg(8, 4, 2);
console.log(result3);

// Задача 6 Написать функцию, которая принимает 1 аргумент
// (кол-во итераций цикла)  и выводит на страницу столько
// красных кругов на страницу

function showCircle(b) {
  for (let a = 0; a < 10; a++) {
    console.log(a);
    let div = document.createElement("div");
    div.className = "alert";
    document.body.append(div);
  }
}
showCircle();

// ARGUMENTS

// Задача 1. Напишите функцию, которая принимает произвольное
//  количество аргументов в виде строк и выводит их через пробел
//  с помощью document.write() в тело html-документа. Например,
//  функция  showWords("I've", "been", "learning", "JavaScript",
//   "for", "a", "month") должна вывести фразу "I've been learning
//    JavaScript for a month".

function showWords() {
  console.log(arguments);
  let sum = 0;
  str = "";
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    str += arguments[i] + " ";
  }
  str = str.slice(0, -1);
  return str;
}

document.write(
  showWords("I have", "been", "learning", "JavaScript", "for", "a", "month")
);

// Задача 2. Напишите функцию, которая принимает произвольное количество аргументов
//  в виде однозначных чисел и возвращает 1 многозначное число. Например, функция
//   с именем complexDigit() при вызове  complexDigit(3,6,7) вернет число 367,
//   а complexDigit(1,9, 4, 8,3) вернет число 19483.

function complexDigit() {
  console.log(arguments);
  let sum = 0;
  str = "";
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    str += arguments[i] + "";
  }
  str = str.slice(0, 3);
  return str;
}
console.log(complexDigit(3, 6, 7));
