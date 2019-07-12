'use strict';
function rank_by_two_large_one_small(collection){
  var arr = collection.sort(function (a,b) {
    return a-b;
  });

  var a = [];
  var num = 0;
  var x = Math.floor(arr.length/3) *3
  for (var i = 0;i<x;i++){
    num++;
    if (num === 3){
      a.push(arr[i-2]);
      num = 0;
    }else {
      a.push(arr[i+1]);
    }
  }
  for (var k = x;k<arr.length;k++){
    a.push(arr[k]);
  }

  return a;
}
module.exports = rank_by_two_large_one_small;
