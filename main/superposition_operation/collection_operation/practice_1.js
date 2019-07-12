'use strict';

function hybrid_operation(collection) {

  var arr = collection.map(function (x) {
    return x*3+2;
  });

  function getSum(total, num) {
    return total + num;
  }

  return arr.reduce(getSum)
}

module.exports = hybrid_operation;

