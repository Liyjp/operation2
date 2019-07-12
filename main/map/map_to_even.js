'use strict';
function map_to_even(collection){
  return collection.map(function (num) {
    return num * 2;
  });
}
module.exports = map_to_even;
