'use strict';

function compute_average(collection) {
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }

  return ~~(sum/collection.length*10)/10;

}

module.exports = compute_average;

