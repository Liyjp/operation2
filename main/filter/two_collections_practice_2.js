'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  var arr = collection_a.filter(function(e) {
    return collection_b.indexOf(e) < 0;
  });

  return arr;
}

module.exports = choose_no_common_elements;
