'use strict';

function choose_common_elements(collection_a, collection_b) {

  var arr = collection_a.filter(function(v){
    return collection_b.indexOf(v)!==-1 // 利用filter方法来遍历是否有相同的元素
  });

  return arr;
}

module.exports = choose_common_elements;
