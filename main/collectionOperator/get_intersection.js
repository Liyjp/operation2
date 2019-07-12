'use strict';

function get_intersection(collection_a, collection_b) {
  var arr = collection_b.filter(function(v){
    return collection_a.indexOf(v)!==-1 // 利用filter方法来遍历是否有相同的元素
  });

  return arr;
}

module.exports = get_intersection;
