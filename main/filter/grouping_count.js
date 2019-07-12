'use strict';

function grouping_count(collection) {

  var res = {};
  collection.forEach(function(e){
    res[e] = res[e]>=1?res[e]+1:1
  });
  return res;

}

module.exports = grouping_count;
