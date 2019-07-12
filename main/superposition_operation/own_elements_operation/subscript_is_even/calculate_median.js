'use strict';
var calculate_median = function(collection){
  var arr = [];
  var num =0 ;
  for (var i=0;i<collection.length;i++){
    if ((i+1) % 2 ===0){
      arr.push(collection[i]);
      num++;
    }
  }

  var l = arr.length-1;
  var n = Math.floor(l/2);
  var mid = Math.ceil((arr[n]+arr[l-n])/2);

  return mid;
};
module.exports = calculate_median;
