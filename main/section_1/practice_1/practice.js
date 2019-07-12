function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function(v){
    return collection_b.indexOf(v)!==-1 // 利用filter方法来遍历是否有相同的元素
  })
}

module.exports = collect_same_elements;
