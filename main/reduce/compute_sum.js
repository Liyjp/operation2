'use strict';

function calculate_elements_sum(collection) {
  function getSum(total, num) {
    return total + num;
  }

  return collection.reduce(getSum)
}

module.exports = calculate_elements_sum;

