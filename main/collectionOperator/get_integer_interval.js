'use strict';

function get_integer_interval(number_a, number_b) {
  var arr = [];
  if (number_a < number_b){
    for (var i = number_a;i<=number_b;i++){
      arr.push(i);
    }
    return arr;
  }
  if (number_a > number_b){
    for (var j = number_a ;j >= number_b;j--){
      arr.push(j);
    }
    return arr;
  }
  if (number_b === number_a){
    arr.push(number_a);
    return arr;
  }

}

module.exports = get_integer_interval;

