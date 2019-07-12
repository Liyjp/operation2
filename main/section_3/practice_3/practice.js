function create_updated_collection(collection_a, object_b) {
  var arr = [];
  var test = [];
  var num = 1;
  var size = collection_a.length;
  for(var i=0;i<size; i++){
    for(var j=i+1;j<size; j++){
      if(collection_a[i] === collection_a[j]){
        collection_a.splice(j,1);
        size--;
        j--;
        num ++;
      }
    }
    test[i] = num ;
    num = 1;
    arr[i] = collection_a[i]
  }
  var a = [];
  for(var i=0;i<size; i++){
    var obj = {
      key: arr[i],
      count: test[i]
    };
    a.push(obj)
  }

  for (var i=0;i<a.length;i++){
    for (var j=0;j<object_b.value.length;j++){
      if (a[i].key === object_b.value[j]){
        var n = parseInt(a[i].count / 3);
        a[i].count -= n;
      }
    }
  }

  return a
}

module.exports = create_updated_collection;
