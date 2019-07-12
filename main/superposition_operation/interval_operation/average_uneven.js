'use strict';

function average_uneven(collection) {

  var sum = 0;
  var num = 0;
  for (var i =0 ;i<collection.length;i++){
    if (collection[i] % 2 !== 0){
      num++
      sum += collection[i];
    }
  }

  return sum/num;
}

module.exports = average_uneven;
