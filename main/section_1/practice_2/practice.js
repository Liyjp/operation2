function collect_same_elements(collection_a, collection_b) {
  var arr = collection_a.filter(function(v){
    return collection_b[0].indexOf(v)!==-1 // 利用filter方法来遍历是否有相同的元素
  })

  var a = [];
  a.push(arr);

  return arr;
}

module.exports = collect_same_elements;
