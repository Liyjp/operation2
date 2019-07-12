function collect_same_elements(collection_a, object_b) {
  var  collection_b=[];
  for (let i = 0; i <collection_a.length ; i++) {
    for (let k = 0; k <object_b.value.length ; k++) {
      if(collection_a[i]['key'] === object_b.value[k])
      {
        collection_b.push(collection_a[i]['key']);
      }
    }
  }
  return collection_b;
}

module.exports = collect_same_elements;
