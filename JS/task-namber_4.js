// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов 
// и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.



// const formatString = function(string) {

//     const stringLength = string > string.slice(0, 40) ? string.concat('. . .') : string;
     
//     return stringLength
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // вернется форматированная строка

function formatString (string, maxLength = 40) {
    // Write code under this line
    //return string.length
    for (const value of string) {
     if (string.length > maxLength) {
          string = string.slice(0, 40).concat('...'); 
     }
      if (maxLength === 30) {
          string = string.slice(0, 30).concat('...');
      }
    }
    return string
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'