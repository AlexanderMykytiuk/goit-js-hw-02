// Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить в консоль сообщение 
// в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента 
// массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
//  а для индекса 2 выведет '3 - Ajax'.

const logItems = function(array) {
    // console.log(array);
    for(let i = 0; i < array.length; i += 1) {
      
        array[i] = `${i + 1} - ${array[i]}`;
   }

  console.table(array);
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// const getItemsString = function(array) {
//   'use strict';
//   // Write code under this line
  
//    let  result = ''; 
  
//   for(let i = 0; i < array.length; i += 1) {
          
//         array[i] = `${i + 1} - ${array[i]}\n`;
    		
//        }

// 	return result += array.join('');  
// }

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// /*
// '1 - Mango
// 2 - Poly
// 3 - Ajax
// 4 - Lux
// 5 - Jay
// 6 - Kong
// '
// */

// console.log(getItemsString([5, 10, 15]));
// /*
// '1 - 5
// 2 - 10
// 3 - 15
// '
// */