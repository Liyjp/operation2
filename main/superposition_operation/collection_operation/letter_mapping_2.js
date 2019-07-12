'use strict';

function average_to_letter(collection) {

  var sum = 0;
  var len = collection.length
  for (var i =0;i<collection.length;i++){
    sum += collection[i];
  }

  var a = Math.ceil(sum/len);

  var alphabet= String.fromCharCode(96 + a);

  return alphabet;
}

module.exports = average_to_letter;

