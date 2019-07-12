'use strict';
function one_add_next_multiply_three(collection){
  var arr = [];
  for (var i=0;i<collection.length-1;i++){
    var x = (collection[i]+collection[i+1])*3 ;
    arr.push(x)
  }

  return arr;
}
module.exports = one_add_next_multiply_three;
