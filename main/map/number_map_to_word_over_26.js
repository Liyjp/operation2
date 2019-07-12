'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (num) {
    if (96 + num >122){
      var s = String.fromCharCode(70 + parseInt(num));
      return "a"+s;
    } else {
      return String.fromCharCode(96 + parseInt(num));
    }


  });
};

module.exports = number_map_to_word_over_26;
