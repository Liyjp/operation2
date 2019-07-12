'use strict';

function get_letter_interval_2(number_a, number_b) {
  var arr = [];
  if (number_a > number_b){
    for (var i = number_a ; i>=number_b;i--){
      if (96+i > 148){
        var a= String.fromCharCode(44 + parseInt(i));
        arr.push("b"+a);
      } else if (96+i >122){
        var a= String.fromCharCode(70 + parseInt(i));
        arr.push("a"+a);
      } else {
        var a= String.fromCharCode(96 + parseInt(i));
        arr.push(a)
      }
    }
    return arr;
  }else {
    for (var i = number_a ; i<=number_b;i++){
      if (96+i<=122){
        var a= String.fromCharCode(96 + parseInt(i));
        arr.push(a)
      }else if (96+i <= 148) {
        var a= String.fromCharCode(70 + parseInt(i));
        arr.push("a"+a);
      }else {
        var a= String.fromCharCode(44 + parseInt(i));
        arr.push("b"+a);
      }

    }


    return arr;
  }
}

module.exports = get_letter_interval_2;

