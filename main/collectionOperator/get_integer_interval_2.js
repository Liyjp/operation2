'use strict';

function get_integer_interval_2(number_a, number_b) {
  var arr1 = [];
  if (number_a < number_b){
    for (var i = number_a; i<=number_b;i++) {
      if (i % 2 === 0){
        arr1.push(i);
      }
    }
    return arr1;
  }

  if (number_a > number_b){
    for (var j = number_a;j>=number_b;j--){
      if (j % 2 === 0){
        arr1.push(j);
      }
    }
    return arr1;
  }
  if (number_a === number_b){
    if (number_a % 2 === 0){
      arr1.push(number_b);
    }
    return arr1
  }
}

module.exports = get_integer_interval_2;
