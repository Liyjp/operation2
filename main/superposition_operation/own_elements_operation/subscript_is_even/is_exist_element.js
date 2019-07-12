'use strict';
var is_exist_element = function(collection,element){
  var arr = [];
  for (var i=1;i<collection.length;i++){
    if (i % 2 ===0){
      arr.push(collection[i]);
    }
  }

  for (var j = 0;j<arr.length;j++){
    if (arr[j] === element){
      return true;
    }
    if(arr[j] !== element){
      return false
    }
  }

};
module.exports = is_exist_element;
