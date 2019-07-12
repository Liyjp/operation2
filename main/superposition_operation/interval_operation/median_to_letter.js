'use strict';

function median_to_letter(collection) {

  var l = collection.length-1;
  var n = Math.floor(l/2);
  var mid = Math.ceil((collection[n]+collection[l-n])/2);

  if (96+mid >122) {
    var a = String.fromCharCode(70 + mid);
    var s = "a"+a;
  }

  return s;
}

module.exports = median_to_letter;
