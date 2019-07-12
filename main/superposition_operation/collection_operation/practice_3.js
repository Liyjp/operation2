'use strict';

function hybrid_operation_to_uneven(collection) {

  var arr = [];
  for (var i=0;i<collection.length;i++){
    if (collection[i] % 2 !== 0) {
      arr.push(collection[i]);
    }
  }

  var a = arr.map(function (x) {
    return x*3+5;
  });

  function getSum(total, num) {
    return total + num;
  }

  return a.reduce(getSum)
}

module.exports = hybrid_operation_to_uneven;

