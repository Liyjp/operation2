'use strict';
var single_element = function(collection){
  var arr1 = [];
  for (var i=0;i<collection.length;i++){
    if ((i+1) % 2 ===0){
      arr1.push(collection[i]);
    }
  }

  function findLonelyDog(arr) {
    let len = arr.length,
      result = [];
    for (let i = 0; i < len; i = i + 1) {
      if ((arr.indexOf(arr[i])) === arr.lastIndexOf(arr[i])) {
        result.push(arr[i]);

      }
    }
    return result;
  }

  return findLonelyDog(arr1);

};

module.exports = single_element;
