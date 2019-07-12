'use strict';

function even_to_letter(collection) {

  var arr = [];
  for (var i = 0; i < collection.length;i++){
    if (collection[i] % 2 === 0){
      var alphabet= String.fromCharCode(96 + parseInt(collection[i]));
      arr.push(alphabet);
    }
  }

  return arr;

}

module.exports = even_to_letter;
