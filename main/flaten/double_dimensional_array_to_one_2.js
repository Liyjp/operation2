'use strict';

function double_to_one(collection) {

  function flatten(arr) {
    return [].concat( ...arr.map(x => Array.isArray(x) ? flatten(x) : x) )
  }
  var arr1 = flatten(collection);

  var arr2 = arr1.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });

  return arr2;
}

module.exports = double_to_one;
