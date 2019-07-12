'use strict';

function choose_no_repeat_number(collection) {

  var arr = collection.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
  return arr;
}

module.exports = choose_no_repeat_number;
