'use strict';

function get_letter_interval(number_a, number_b) {
  var arr = [];
  if (number_a > number_b){
    for (var i = number_a ; i>=number_b;i--){
      var alphabet= String.fromCharCode(96 + parseInt(i));
      arr.push(alphabet);
    }
  }else {
    for (var j = number_a ; j<=number_b;j++){
      var alphabet2= String.fromCharCode(96 + parseInt(j));
      arr.push(alphabet2);
    }
  }
  return arr;
}

module.exports = get_letter_interval;
