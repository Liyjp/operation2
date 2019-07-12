'use strict';

function double_to_one(collection) {

  var arr = [].concat.apply([], collection);

  return arr;
}

module.exports = double_to_one;
