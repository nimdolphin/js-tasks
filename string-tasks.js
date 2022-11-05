// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  let lowStr = str.toLowerCase();
  let upperStr = str.toUpperCase();
  if (lowStr.includes("viagra") || upperStr.includes("XXX")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

console.log(ucFirst("vasy"));

// Усечение строки
// Создайте функцию truncate(str, maxlength),
//  которая проверяет длину строки str и, если она
//  превосходит maxlength, заменяет конец str на "…",
//   так, чтобы её длина стала равна maxlength.

// // Результатом функции должна быть та же строка,
//  если усечение не требуется, либо, если необходимо,
//   усечённая строка.

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));

// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала
// идёт знак валюты, а затем – число.
// // Создайте функцию extractCurrencyValue(str), которая
// будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120") === 120); // true

// 0.  Напишите функцию logAllChars(str), которая принимает str в
// качестве аргумента и выводит каждый символ строки в логи.

function logAllChars(str) {
  for (let key of str) {
    console.log(key);
  }
}

logAllChars("hello");

// 1. Дана строка 'frontent$developer$wow. Замените все $ на *
// с помощью глобального поиска и замены.

const str1 = "frontent$developer$wow";

const newStr1 = str1.replace(/[$]/gi, "*");
console.log(newStr1);

// 2.  Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.

const str2 = "I am learning frontend development";

const convertStringToArray = (str2) => {
  return str2.trim().split(" ");
};

const result = convertStringToArray(str2);

console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']

// 3. Напишите функцию removeSymbols(str, length), которая
// возвращает подстроку, состоящую из указанного количества символов.

const str3 = "hey, buddy";

function removeSymbols(str3, length) {
  if (str3 === String || length > 0) {
    return str3.slice(0, length);
  }
}

console.log(removeSymbols(str3, 4));

// 4. Напишите функцию pasteDashesIntoString(str), которая принимает
// строку str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.

const str4 = "I love pizza";
function pasteDashesIntoString(str4) {
  return str4.toUpperCase().split(" ").join("-");
}

console.log(pasteDashesIntoString(str4));

// 5. Напишите функцию makeStringLowerCased(str), которая
// принимает строку str в качестве аргумента и переводит в нижний регистр.

function makeStringLowerCased(str5) {
  let newStr = "";
  newStr = str5.toLowerCase();
  console.log(newStr);
  return newStr;
}

makeStringLowerCased("I LOVE PIZZA");

// 6.Напишите функцию capitaliseAllWords(str), которая возвращает
// строку, в которой каждое слово начинается с заглавной буквы.

function capitaliseAllWords(str) {
  let newArr = str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
  console.log(newArr);
}

capitaliseAllWords("i love pizza");

// 7. Напишите функцию makeFirstLetterUpperCased(str), которая
// принимает строку str в качестве аргумента и делает первую букву
// заглавной.

function makeFirstLetterUpperCased(str) {
  console.log(str[0].toUpperCase() + str.slice(1));
}

makeFirstLetterUpperCased("i love pizza");

// 8. Напишите функцию changeLetterRegister(str), которая принимает
// в качестве аргумента строку и заменяет регистр каждого символа на
// противоположный. Например, если вводится «Я иЗуЧаЮ ФрОнТеНд»,
// то на выходе должно быть «я ИзУчАю ФрОнТеНд».

let str6 = prompt("Я иЗуЧаЮ ФрОнТеНд");

function changeLetterRegister(str6) {
  let newStr = "";

  for (key of str6) {
    // console.log(key);

    if (key === key.toUpperCase()) {
      console.log(key.toLowerCase());
      newStr += key.toLowerCase();
    } else {
      console.log(key.toUpperCase());
      newStr += key.toUpperCase();
    }
  }
  console.log(newStr);
  return newStr;
}

changeLetterRegister(str6);

// 2 VARIANT

let str7 = prompt("write Я иЗуЧаЮ ФрОнТеНд", "");

function changeLetter(str7) {
  let newS = "";
  for (i = 0; i < str7.length; i++) {
    let newStr = str7[i];
    let bigW = newStr.toUpperCase();
    let smallW = newStr.toLowerCase();

    if (newStr === newStr.toLowerCase()) {
      // console.log(bigW);
      newS += bigW;
    } else {
      // console.log(smallW);
      newS += smallW;
    }
  }
  return newS;
}

console.log(changeLetter(str7));

// 9. Напишите функцию changeLetterRegister(str), которая принимает
//  в качестве аргумента строку и делает в ней все символы разного
// регистра по порядку. Например, если вводится «джаваскрипт»,
// то на выходе должно быть «дЖаВаСкРиПт».

const str5 = prompt("джаваскрипт", "");

function changeLetterRegister(str5) {
  let strNew5 = "";

  for (i = 0; i < str5.length; i++) {
    // console.log(str5[i]);

    if (!(i % 2)) {
      console.log(str5[i].toLowerCase());
      strNew5 += str5[i].toLowerCase();
    } else if (i % 2 === 1) {
      console.log(str5[i].toUpperCase());
      strNew5 += str5[i].toUpperCase();
    }
  }
  console.log(strNew5);
  return strNew5;
}

changeLetterRegister(str5);

// 10. Напишите функцию addZeros(num, len, sign), которая дополняет
// нулями до указаной длины числовое значение с дополнительным знаком
//  «+» или «-» в зависимости от передаваемого аргумента.

function addZeros(num, len, sign) {
  console.log("сейчас длина строки:", num.length);

  console.log("пусть строка имеет длину:", len);

  let a = num.length < len;
  let c = "+" === sign;
  let b = "-" === sign;

  let newNum = "";

  if (a && c) {
    newNum = +(num + "0".repeat(len - num.length));
  } else if (a && b) {
    newNum = -(num + "0".repeat(len - num.length));
  }
  console.log(newNum);
  return newNum;
}

addZeros("123", 6, "-");

// 11. Напишите функцию compareStrings(str1, str2), которая сравнивает
//  строки без учёта регистра символов.

function compareStrings(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  console.log(a === b);
}

compareStrings("string", "StRiNg");
compareStrings("JavaScript", "JavaScriptonite");

// 12. Напишите функцию repeatStr(str, n), которая возвращает строку
//  повторяемую определённое количество раз.

function repeatStr(str, n) {
  let str2 = str.repeat(n);
  console.log(str2);
}

repeatStr("hello", 5);

function repeatStr(str, n) {
  let string = "";
  while (n > 0) {
    string += str;
    n--;
  }
  console.log(string);
}

repeatStr("hello", 5);

// 13. Напишите функцию getPathname(pathname), которая находит имя
// файла (подстрока после последнего символа "\" ) из полного
//  пути к файлу.

const pathname = "/home/user/landing/index.js";

const getPathname = (pathname) => {
  const newPathname = pathname.split("/").slice(-1).join("");

  console.log(newPathname);
  return newPathname;
};

getPathname(pathname);

// 14. Напишите функцию getSubstring(str, char, pos), которая возвращает
//  часть строки, расположенную после или до указанного символа char
//  в зависимости от параметра pos.

const str = "Javascript — синхронный язык программирования";

function getSubstring(str, char, pos) {
  let newStr = str.split(" ");
  let newStr2 = "";
  console.log(newStr);

  console.log(newStr.indexOf(char));

  let d = "after" === pos;
  let f = "before" === pos;

  if (newStr.includes(char) && d) {
    newStr2 = newStr.slice(0, 1).join(" ");
  } else if (newStr.includes(char) && f) {
    newStr2 = newStr.slice(0, 3).join(" ");
  }

  console.log(newStr2);
  return newStr2;
}

getSubstring(str, "—", "after");
getSubstring(str, "язык", "before");
