// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. 
// Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. 
// Слова в строке могут быть в произвольном регистре.

'use strict';
const checkForSpam = function (str) {
  let arrStr = str.split(' ');

  for (let i = 0; i < arrStr.length; i += 1) {
    let word = arrStr[i].toLowerCase;

    if (arrStr[i].toLowerCase === 'spam' || arrStr[i].toLowerCase === 'sale') {
      return true;
    }

    return false;
  }

};

// Вызовы функции для проверки

console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


//Як тут використати includes()????