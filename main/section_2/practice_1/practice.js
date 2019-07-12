function count_same_elements(collection) {
  var arr = [];
  var test = [];
  var num = 1;
  var size = collection.length;
  for(var i=0;i<size; i++){
    for(var j=i+1;j<size; j++){
      if(collection[i] === collection[j]){
        collection.splice(j,1);
        size--;
        j--;
        num ++;
      }
    }
    test[i] = num ;
    num = 1;
    arr[i] = collection[i]
  }

  var a = [];
  for(var i=0;i<size; i++){
    var obj = {
      key: arr[i],
      count: test[i]
    };
    a.push(obj)
  }

  return a;
}

module.exports = count_same_elements;
