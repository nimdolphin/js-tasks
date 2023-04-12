// перечитать что за метод сорт и что мы в него ПЕРЕДАЕМ,
// написать 2 функции для сортировки - от большего к меньшему и
// наоборот

const arr = [2, 6, 8, 44, 7, 55, 77, 890];

arr.sort((a, b) => a - b);

console.log(arr);

const arr1 = [2, 6, 8, 44, 7, 55, 77, 890];

arr1.sort((a, b) => b - a);

console.log(arr1);

// 0. С помощью цикла for сформируйте строку '123456789' и запишите
// ее в переменную str.

let str = "";
for (i = 1; i < 10; i++) {
  str += i;
}
console.log(str);

// 1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды
// должно быть 12 рядов:

// x
// xx
// xxx
// xxxx
// xxxxx

let str2 = "";

for (i = 1; i <= 12; i++) {
  str2 += "x";
  console.log(str2);
}

// 2.  С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (i = 1; i <= 9; i++) {
  for (j = 1; j <= i; j++) {
    console.log(i);
  }
}

// 3. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись
//  циклом for:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

let str3 = "";

for (i = 2; i <= 10; i++) {
  if (i % 2) continue;

  str3 += "xx";
  console.log(str3);
}

// 4.   Пирамидка с цифрами
// 111
// 222
// 333
// 444
// 555
// 666
// 777
// 888
// 999

for (i = 1; i <= 9; i++) {
  for (j = 0; j <= 2; j++) {
    console.log(i);
  }
}

// 5. Напишите функцию goThroughArray(list), которая проходится по
//  массиву и выводит каждый элемент.

const list = ["x", "y", "z"];

function goThroughArray(list) {
  for (char of list) {
    console.log(char);
  }
}

goThroughArray(list);

// 6. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их
// вместе.

const arr3 = ["a", "b", "c"];

const arr2 = [1, 2, 3];

const newArr = arr3.concat(arr2);
console.log(newArr);

// 7. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

const arr4 = ["a", "b", "c"];

arr4.splice(3, 0, "1", "2", "3");
console.log(arr4);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в [1, 4, 5].

const arr5 = [1, 2, 3, 4, 5];

arr5.splice(1, 2);

console.log(arr5);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].

const arr6 = [1, 2, 3, 4, 5];

const newArr2 = arr6.splice(1, 3);
console.log(newArr2);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте
//  из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr7 = [1, 2, 3, 4, 5];

arr7.splice(3, 0, "a", "b", "c");
console.log(arr7);

// 11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr8 = [1, 2, 3, 4, 5];

arr8.splice(1, 0, "a", "b");
arr8.splice(6, 0, "c");
arr8.splice(8, 0, "e");

console.log(arr8);

// 12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr9 = [3, 4, 1, 2, 7];

arr9.sort((a, b) => a - b);

console.log(arr9);

// 13. Дан объект {js:'test', jq: 'hello', css: 'world'}.
//  Получите массив его ключей.

const obj = { js: "test", jq: "hello", css: "world" };

const arr10 = Object.keys(obj);

console.log(arr10);

// 14. Дана строка, например, '123456'. Переверните эту строку
// (сделайте из нее '654321') не используя цикл.

const str1 = "1, 2, 3, 4, 5, 6";

const newStr = str.split(", ").reverse().join(", ");

console.log(newStr2);

// 15. Дана строка. Сделайте заглавным первый символ этой строки
// не используя цикл. Найдите два решения

const str4 = "hello";
const newStr4 = str4[0].toUpperCase() + str4.slice(1);
console.log(newStr4);

const str5 = "hello";
const newStr5 = str5.charAt(0).toUpperCase() + str5.slice(1);
console.log(newStr5);

// 16. Проверьте, что строка начинается на http://.

const str6 = "http://blablabla";

console.log(str6.startsWith("http://"));

// 17. Проверьте, что строка заканчивается на .html

const str7 = "blabla.html";
console.log(str7.endsWith(".html"));

// 18. Дан массив с числами. Проверьте, что в этом массиве есть
// число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

const array = [1, 3, 6, 5, 8, 10];

const array2 = array.includes(5) ? "yes" : "no";

console.log(array2);

// 19. Дано число, например 31. Проверьте, что это число не делится
//  ни на одно другое число кроме себя самого и единицы. То есть в
// нашем случае нужно проверить, что число 31 не делится на все числа
// от 2 до 30. Если число не делится - выведите 'false', а если
// делится - выведите 'true'.

function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    return !(num % i);
  }
}

isPrime(31);

// 20. Дан массив с числами. Проверьте, есть ли в нем два одинаковых
// числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

const arr12 = [1, 2, 5, 6, 7, 7, 8, 9, 99, 45];

for (i = 0; i < arr12.length; i++) {
  arr12[i] === arr12[i - 1] ? console.log("yes") : console.log("no");
}

// 21. Заполните массив следующим образом: в первый элемент запишите
//  '1', во второй '22', в третий '333' и так далее (два цикла)

let arr13 = [];

function addArray() {
  for (i = 1; i <= 9; i++) {
    for (j = 1; j <= i; j++) {
      arr13.push(i);
    }
  }
  return arr13;
}

addArray();

// 22. Дан массив чисел, найдите в нем максимальное число

const arr14 = [1, 2, 4, 6, 8, 10, 101, 4];

function findMaxNum() {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

findMaxNum();

// 23. Дан массив чисел, найдите в нем минимальное число

const arr15 = [56, 2, 4, 6, 8, 10, 101, 4];

function findMinNum() {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

findMinNum();

// 24. Дан массив чисел, найдите среднее арифметическое всех чисел

let arr16 = [2, 5, 7, 44, 67, 87, 1, 3];

const findArithmeticNum = () =>
  arr.reduce((value, sum) => value + sum, 0) / arr.length;

findArithmeticNum();

// 25.  Fill. Напишите функцию, которая заполняет новый массив
// предоставленным значением.

//   * Описание задачи: Напишите функцию, которая заполняет новый
// массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * Сложность задачи: 1 of 5
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}

const fill = (arraySize, value) => value.repeat(arraySize).split("");

const data = 3;
const valueToFill = "a";
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']

// 26. Reverse. Напишите функцию, которая разворачивает массив в
// обратном порядке. Пожалуйста, не используйте array.reverse(),
//  чтобы сделать задачу более интересной.

//   * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

const reverse = (array) => {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]

// 27. Compact. Напишите функцию, которая очищает массив от
// нежелательных значений, таких как false, undefined, пустые
// строки, ноль, null.

//  * Описание задачи: Напишите функцию, которая очищает массив от
//  нежелательных значений, таких как false, undefined, пустые строки,
// ноль, null.
//* Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

const compact = (array) => array.filter(Boolean);

const data3 = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data3)); // [1, 2, 3]

// 28. From Pairs. Напишите функцию, которая возвращает объект,
// составленный из значений вложенных массивов. Первое элемент массива
// - ключ, второй - зачение. (используем метод массива reduce)

//   * Описание задачи: Напишите функцию, которая возвращает объект,
//  составленный из значений вложенных массивов. Первое значение -
// ключ, второе - зачение.
//   * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - массив, значения которого массивы пар
//   * @returns {Array}

const fromPairs = (array) =>
  array.reduce((accum, item) => {
    return { ...accum, [item[0]]: item[1] };
  }, {});

const data4 = [
  ["a", 1],
  ["b", 2],
];
fromPairs(data4); // { 'a': 1, 'b': 2 }

// 29. Without. Напишите функцию, возвращает новый массив без
// предоставленных значений. Используйте примитивные типы.

//   * Описание задачи: Напишите функцию, возвращает новый массив
// без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - Массив с примитивными значениями
//   * @param {?} args - лист значений для удаления
//   * @returns {Array}

const without = (array, ...args) => {
  let numbers = [...array];
  for (i = 0; i < args.length; i++) {
    numbers = numbers.filter((item) => item !== args[i]);
  }
  return numbers;
};

const data5 = [1, 2, 3, 1, 2];
console.log(without(data5, 1, 2)); // [3]

// 30. Unique. Напишите функцию, которая убирает повторяющиеся
// значения.

//   * Описание задачи: Напишите функцию, которая убирает
// повторяющиеся значения.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
//   * Сложность задачи: 2 of 5
//   * @param {Array<string | number>} array - Массив с примитивными
// значениями
//   * @returns {Array}
// */

const unique = (array) => {
  return array.filter((item, id) => array.indexOf(item) === id);
};

const data6 = [1, 2, 1, 2, 3];
console.log(unique(data6)); // [1, 2, 3]

// 2 вариант

const unique1 = (array) => [...new Set(array)];

const dataa = [1, 2, 1, 2, 3];
console.log(unique1(dataa)); // [1, 2, 3]

// 31. IsEqual. Напишите функцию, которая сравнивает два массива и
// возвращает true, если они идентичны.

//   * Описание задачи: Напишите функцию, которая сравнивает два
// массива и возвращает true, если они идентичны.
//   * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//   * Сложность задачи: 2 of 5
//   * @param {Array} firstArray - Массив с примитивными значениями
//   * @param {Array} secondArray - Массив с примитивными значениями
//   * @returns {boolean}

const isEqual = (firstArray, secondArray) => {
  if (
    Array.isArray(firstArray) === Array.isArray(secondArray) &&
    firstArray.length === secondArray.length
  ) {
    return firstArray.every((item, id) => item === secondArray[id]);
  } else {
    return false;
  }
};

const arr17 = [1, 2, 3, 4];
const arr18 = [1, 2, 3, 4];
const arr19 = [1, 2, 3, 5];
const arr20 = [1, 2, 3, 4, 5];
console.log(isEqual(arr17, arr18)); // true
console.log(isEqual(arr17, arr19)); // false
console.log(isEqual(arr17, arr20)); // false

// 32. Flatten. Напишите функцию, которая преобразует глубокий массив
//  в одномерный. Пожалуйста, не используйте array.flat(), чтобы
// сделать задачу интереснее. (рекурсия)

//   * Описание задачи: Напишите функцию, которая преобразует глубокий
//  массив в одномерный.
//   * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
//   * Сложность задачи: 3 of 5
//   * @param {Array} array - Глубокий массив
//   * @returns {Array}

const flatten = (array) => {
  let newArr = [];

  if (!Array.isArray(array)) {
    return array;
  }

  for (let key of array) {
    newArr = newArr.concat(flatten(key));
  }
  return newArr;
};
const data7 = [1, 2, [3, 4, [5]]];
console.log(flatten(data7)); // [1, 2, 3, 4, 5]

// 33. Chunk. Напишите функцию, которая разделяет массив на части
// заданного размера.

//   * Описание задачи: Напишите функцию, которая разделяет массив
//  на части заданного размера.
//   * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//   * Сложность задачи: 3 of 5
//   * @param {Array} array - Массив элементов
//   * @param {number} size - Размер чанков
//   * @returns {Array}

const chunk = (array, size) => {
  const newArr = [];
  const newS = [...array];

  while (newS.length > 0) {
    const chunk = newS.splice(0, size);
    newArr.push(chunk);
  }
  return newArr;
};

const data8 = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data8, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data8, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// 34. Дан двухмерный массив с числами, например
// [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
//  Массив, конечно же, может быть произвольным.

const arr21 = [[1, 2, 3], [4, 5], [6]];
let sum21 = 0;

const getSum = (arr21) => {
  for (i = 0; i < arr21.length; i++) {
    const newArr = arr21[i].reduce((value, sum21) => value + sum21, 0);
    sum21 += newArr;
  }
  return sum;
};

console.log(getSum(arr21));

// 35. Дан массив с числами. Создайте из него новый массив,
// где останутся лежать только положительные числа. Создайте
// для этого вспомогательную функцию isPositive(), которая параметром
//  будет принимать число и возвращать true, если число положительное,
//  и false - если отрицательное.

const isPositive = (arr1) => arr1.filter((item) => item >= 0);

const arr22 = [1, 3, -5, 7, -9, 99];
isPositive(arr22);

// РЕКУРСИЯ*

// 1. Дан массив с числами. Выведите последовательно
//  его элементы используя рекурсию

const arr23 = [1, 5, 7, 8, 9, 10];

let i = 0;

function getArr(array) {
  if (array.length > 0) {
    array.shift();
    return getArr(array);
  }
}

getArr(arr23);

// 2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
//  опять сложите его цифры. И так, пока сумма не станет однозначным
// числом (9 и менее).

const num = 34567890;

function getSum(num) {
  let sum = 0;

  let str = String(num)
    .split("")
    .map((item) => +item);

  for (let i = 0; i < str.length; i++) {
    sum += str[i];
  }

  return sum > 9 ? getSum(sum) : sum;
}

getSum(num);

// Алгоритмы сортировок:

// 1) Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
// отсортировать по возрастанию написав алгоритм сортировки вставками.

const arr25 = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

function soort() {
  for (let i = 1; i < arr25.length; i++) {
    let num = arr25[i];

    let j = i - 1;

    while (j >= 0 && num < arr25[j]) {
      arr[j + 1] = arr25[j];
      j--;
    }
    arr25[j + 1] = num;
  }
  return arr25;
}

soort();

// 2) Задание: есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
// отсортировать по возрастанию(1) и по убыванию(2) написав
//  алгоритм сортировки пузырьком.

const arr26 = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

function bubbleSort() {
  for (let i = 0; i < arr26.length; i++) {
    for (let j = 0; j < arr26.length; j++) {
      if (arr26[j] > arr26[j + 1]) {
        [arr26[j], arr26[j + 1]] = [arr26[j + 1], arr26[j]];
      }
    }
  }
  return arr26;
}

bubbleSort();

// по убыванию

const arr27 = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

function bubbleSort() {
  for (let i = 0; i < arr27.length; i++) {
    for (let j = 0; j < arr27.length; j++) {
      if (arr27[j] < arr27[j + 1]) {
        [arr27[j], arr27[j + 1]] = [arr27[j + 1], arr27[j]];
      }
    }
  }
  return arr27;
}

bubbleSort();

// 3) бинарный поиск

const sortArr = [3, 4, 7, 8, 10, 13, 17, 19, 25, 37, 58, 60];

function BinarySearch(sortArr, key) {
  let start = 0;
  let end = sortArr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let middleNum = sortArr[middle];

    if (middleNum < key) {
      start = middle + 1;
    } else if (middleNum > key) {
      end = middle - 1;
    } else if (key === middleNum) {
      return middleNum;
    }
  }
  return -1;
}

BinarySearch(sortArr, 37);
