// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumberic(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const result = multiplyNumberic(menu);

console.log(result);

// THIS TASKS
// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.one = +prompt("write number", "");
    this.two = +prompt("write mumber", "");
  },
  sum() {
    return this.one + this.two;
  },
  mul() {
    return this.one * this.two;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

// создать обьект чайник. У него должны быть свойства:
// модель/производитель, дата производства, срок годности,
// срок гарантии, цвет, высота, вместимость (сами решаете
// это число/строка или обьект) и СОСТОЯНИЕ (включен или
// выключен - isOn) , сколько раз уже включали чайник и
// 3 метода - включить чайник, выключить чайник,
// вывести данные о чайнике и очистить данные
// (очистка значения, сколько раз чайник был включен)

let kettle = {
  model: "lili",
  date: "30.05.2022",
  expiratinDate: 5,
  warrantlyPeriod: 2,
  color: "green",
  height: 25,
  capacity: 3,
  isOn: false,
  usageTimes: 0, // количество раз когда был включен

  turnOn() {
    console.log(
      "you are going to turn on your kettle, current state is: ",
      this.isOn
    );
    console.log("usage times: ", this.usageTimes);

    if (this.isOn) {
      console.log("you can not do it because you turn on the kettle early");
      return;
    }
    this.isOn = true;
    this.usageTimes++;

    console.log("amount of usage times:", this.usageTimes);
  },

  turnOff() {
    this.isOn = false;
    console.log("you turn off the kettle", this.isOn);
  },

  getUsageTimes() {
    console.log("Current amount of usage times: ", this.usageTimes);
  },

  clean() {
    this.usageTimes = 0;
    console.log("clean all", this.usageTimes);
  },
};

kettle.turnOn();
kettle.turnOn();
kettle.turnOff();
kettle.getUsageTimes();
kettle.clean();

// Создайте функцию-конструктор Calculator,
// которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи
//  prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// function Calculator() {
//   (this.read = function () {
//     this.a = +prompt("number one", "");
//     this.b = +prompt("number two", "");
//   }),
//     (this.sum = function () {
//       return this.a + this.b;
//     }),
//     (this.mul = function () {
//       return this.a * this.b;
//     });
// }

// let calculator = new Calculator();
// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное
// значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания
// нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму
// всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value = +prompt("number", "") + this.value;
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);

// Реализуйте класс Employee (Работник), который будет иметь свойства:
//  firstname (имя),  lastname (фамилия), rate (ставка за день работы),
//workDays (количество отработанных дней). Также класс должен иметь метод
//   getCurrentSalary(), который будет выводить зарплату работника.
//    Зарплата - это произведение (умножение) ставки rate на количество
//    отработанных дней days.

// Работать должно вот так:

// const worker = new Employee('Настя', 'Петрова', 5, 24);

// console.log(employee.firstname); //выведет 'Иван'
// console.log(employee.lastname); //выведет 'Иванов'
// console.log(employee.rate); //выведет 10
// console.log(employee.workDays); //выведет 31
// console.log(employee.getCurrentSalary()); //выведет 310 - то есть 10*31

function Employee(firstname, lastname, rate, workDays) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.rate = rate;
  this.workDays = workDays;

  this.getCurrentSalary = function () {
    return this.rate * this.workDays;
  };
}

const worker = new Employee("Nastya", "Petrova", 5, 24);

const employee = new Employee("Ivan", "Ivanov", 10, 31);

console.log(employee.firstname);
console.log(employee.lastname);
console.log(employee.rate);
console.log(employee.workDays);
console.log(employee.getCurrentSalary());
