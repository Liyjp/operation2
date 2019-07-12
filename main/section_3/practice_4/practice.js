function create_updated_collection(collection, object_b) {
  var collection_a = [];
  var m = {};
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length === 1) {
      var k=collection[i];
      var v=1;
      if (k in m) {
        m[k] = m[k] + v;
      }
      else {
        m[k] = v;
      }
    }
    else {
      if(collection[i].length>3)
      {
        var k = collection[i][0];
        var v = parseInt(collection[i].slice(2,collection[i].length-1));
        if (k in m) {
          m[k] = m[k] + v;
        }
        else {
          m[k] = v;
        }
      }
      else {
        var k = collection[i][0];
        var v = parseInt(collection[i].slice(2));
        if (k in m) {
          m[k] = m[k] + v;
        }
        else {
          m[k] = v;
        }
      }
    }
  }
  for (var key in m) {
    var temp = {};
    temp['key'] = key;
    temp['count'] = m[key];
    collection_a.push(temp);
  }


    // count满3减1
    for (var i = 0; i < collection_a.length; i++) {
      for (var j = 0; j < object_b.value.length; j++) {
        if (collection_a[i].key === object_b.value[j]) {
          var n = parseInt(collection_a[i].count / 3);
          collection_a[i].count -= n;
        }
      }
    }

  return collection_a

}

module.exports = create_updated_collection;
