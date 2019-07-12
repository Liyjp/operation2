'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var arr = collection_a.filter(function (x) {
    for (var i =0 ;i<collection_b.length;i++){
      if (x%collection_b[i] === 0){
        return x;
      }
    }
  });

  return arr;
}

module.exports = choose_divisible_integer;
