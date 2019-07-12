'use strict';

function hybrid_operation_to_uneven(collection) {

 var arr = [];
 for (var i=0;i<collection.length;i++){
   if (collection[i] % 2 !== 0) {
     arr.push(collection[i]);
   }
 }

 return arr.map(function (x) {
   return x*3+2;
 })

}

module.exports = hybrid_operation_to_uneven;

