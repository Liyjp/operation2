'use strict';

function choose_even(collection) {
  var arr =  collection.filter(function (x) {
    return x % 2 === 0;
  });

  return arr;

}

module.exports = choose_even;
