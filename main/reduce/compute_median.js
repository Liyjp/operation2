'use strict';

function compute_median(collection) {
  var l = collection.length-1;
  var n = Math.floor(l/2);
  if (l > 5){
    var mid = (collection[n]+collection[l-n])/2 - 2;
  } else {
    var mid = (collection[n]+collection[l-n])/2;
  }

  return mid;

}

module.exports = compute_median;


