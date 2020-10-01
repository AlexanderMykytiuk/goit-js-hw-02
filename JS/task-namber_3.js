// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
    
//     let longestWord = string.split(' ');
    
//         console.table(longestWord);

//    for(const value of longestWord) {
//     console.log(value);

//     if (value.length  > longestWord.length) {
//         // longestWord = value; 
      
//     }
    
//     // return value
    
//   }
  
// };

// // let longestWord = value[0];

// // .length
// function findLongestWord (string = "") {
//   // Write code under this line
//      //  smallValue = string[0]; 
//  let smallValue = string.split(' ');
   
  
//   for(const value of string) {

    
//     if(value > smallValue) {
//       smallValue = value;
//      }
   
//   }
//      return smallValue
// };

   

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

function findLongestWord (string = "") {
  // Write code under this line
  string = string.split(' ');
  let largeValue = string[0];
  
  for (const value of string) {
   
    if (value.length > largeValue.length) {
      largeValue = value;
    }
    
  }
  return largeValue;
};

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'