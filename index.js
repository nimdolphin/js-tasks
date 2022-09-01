// ЗАДАЧИ логические операторы

// Проверка значения из диапазона

if (age >= 14 && age <= 90);

// Проверка значения вне диапазона
if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

// ПРОВЕРКА ЛОГИНА
let login = prompt("Кто там?", "");
if (login == "Admin") {
  console.log("");
  let password = prompt("пароль?", "");
  if (password == "я главный") {
    console.log("Здравствуйте");
  } else if (password == null) {
    console.log("отменено");
  } else {
    console.log("неверный пароль");
  }
} else if (login == null) {
  console.log("Отменено");
} else {
  console.log("я вас не знаю");
}

// 1)Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let a = prompt("введите число", "");
if (a > 0 && a < 5) {
  console.log("верно");
} else {
  console.log("неверно");
}
// при а = 2 будет верно, при остальных значениях будет неверно.

//  2) Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
//  Выведите новое значение переменной на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let f = prompt("число", "");
if (f == 0 || f == 2) {
  f += 7;
  console.log(f);
} else {
  f /= 10;
  console.log(f);
}

let e = 5;

if (e == 0 || e == 2) {
  e += 7;
  console.log(e);
} else {
  e /= 10;
  console.log(e);
}

let b = 0;

if (b == 0 || b == 2) {
  b += 7;
  console.log(b);
} else {
  b /= 10;
  console.log(b);
}

let c = -3;

if (c == 0 || c == 2) {
  c += 7;
  console.log(c);
} else {
  c /= 10;
  console.log(c);
}

let d = 2;

if (d == 0 || d == 2) {
  d += 7;
  console.log(d);
} else {
  d /= 10;
  console.log(d);
}

// 3) Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
//  иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let h = +prompt("число один", "");
let i = +prompt("число два", "");

if (h >= 1 && i >= 3) {
  h + i;
  console.log(h + i);
} else {
  h - i;
  console.log(h - i);
}

let k = 1;
let l = 3;

if (k >= 1 && l >= 3) {
  k + l;
  console.log(k + l);
} else {
  k - l;
  console.log(k - l);
}

let m = 0;
let n = 6;

if (m >= 1 && n >= 3) {
  m + n;
  console.log(m + n);
} else {
  m - n;
  console.log(m - n);
}

let o = 3;
let p = 5;

if (o >= 1 && p >= 3) {
  o + p;
  console.log(o + p);
} else {
  o - p;
  console.log(o - p);
}

// 4) Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.

let s = prompt("введите первое число", "");
let t = prompt("введите второе число", "");

if ((s < 11 && s > 2) || (t >= 6 && t < 14)) {
  console.log("верно");
} else {
  console.log("неверно");
}
