'use strict';

function get_union(collection_a, collection_b) {
  var a = collection_a.concat(collection_b);

  var arr = [];
  for (var i=0;i<a.length;i++){
    var flag = true;
    var tmp = a[i];
    for (var j = 0;j<arr.length;j++){
      if (tmp === arr[j]){
        flag = false;
        break;
      }
    }
    if (flag){
      arr.push(tmp);
    }
  }
  return arr;
}

module.exports = get_union;

