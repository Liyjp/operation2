'use strict';
var map_to_three_multiples = function(collection){
  return collection.map(function (num) {
    return num * 3;
  });
};

module.exports = map_to_three_multiples;
