
// *---Виведення вікна 

// const message = prompt("Яка офіційна назва JavaScript ?");
// console.log(message);

// if (message.toLowerCase() === "ECMA".toLowerCase()) {
//     alert ("правильно");
// } else {
//     alert("not rihth");
// }

// *------вивести години і хвилини

// const globalMinutes = 60;

// const hours = Math.floor(globalMinutes / 60);
// const minutes = globalMinutes % 60;

// const modiliedHours = String(hours).padStart(2, "0");

// const modiliedMinutes = String(minutes).padStart(2, "0");

// console.log(`${modiliedHours}:${modiliedMinutes}`);


//*-------цикл, що виводить у консоль числа від мах до мін у порядку зменшення.
// Вивести в консоль всі парні числа від мах до мін.

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


//*--за доп. циклу фор додайте всі парні числа від мін до макс 

// const max = 50;
// const min = 0;
// let sum = 0;
// for (let i = min; i <= max; i += 1) {

// if (i % 2 === 0) {
//     sum += i;
// }   
// }
// console.log(sum);

// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i+= 1) {
//   console.log(i);
    
// }

//*-----------Задачі--------------------------

// цикл for...of.
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let item of order) {
//     total += item;
//   }

//   return total;
// }


// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//  for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }


//*-------------------------------
// функція findNumber(start, end, divisor) 

// повертає перше число від start до end, яке ділиться на divisor без остачі

// function findNumber(start, end, divisor) {

//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
// return i;
//     }
//   }
// }


//*---Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// function includes(array, value) {
// let array1 = [];

//   for (let i = 0;  i < array.length; i+= 1) {
// if (array[i] === value) {
//       return true;
// }
//   }
//   return false;
// }


//*------------числа,що вводитькористувач додаються в prompt

let total = 0;
let  userNumber = prompt("Введіть число"):
    let check = false;

do {
    if (number) {
        check = true;
        total += Number.(userNumber);
    } else {
        check = false;
        console.log(`Загальна сума чисел дорівнює ${total}`);
    }

} while (check);
