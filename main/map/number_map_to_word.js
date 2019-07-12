'use strict';
var number_map_to_word = function(collection){
  return collection.map(function (num) {
    return  String.fromCharCode(96 + parseInt(num));
  });
};

module.exports = number_map_to_word;
