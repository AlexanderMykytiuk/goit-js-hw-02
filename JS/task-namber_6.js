//Задание 6
function mapArray(array) {
    'use strict';
    let numbers = new Array();
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      let value1 = array[0];
      let value2 = 0;
      let value3 = array[2];   
      
          
      if (array[i] = value3) {
        value3 = array[2] *10;
      }
      if (array[i] = 0) {
        value2 = 0;
      }
      if (array[i] = value1) {
        value1 = array[0] *10;
      }
      numbers = [value1, value2, value3]
    }
    return numbers;
  }
  
  console.log(mapArray([-2, 0, 2]));
  // [-20, 0, 20]
  
  console.log(mapArray([-2.5, 0, 2.5]));
  // [-25, 0, 25]

