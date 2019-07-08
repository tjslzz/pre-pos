'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i = 0,len = collectionA.length;i < len;i++){
    var item = collectionA[i].key;
    var count = collectionA[i].count;
    var value = objectB.value;
    for(var j = 0, lenb = value.length; j <lenb;j++){
      if(item == value[j]){
        var sum = count / 3;
        sum = parseInt(sum);
        collectionA[i].count = count - sum;
      }
    }
  }
  return collectionA;
}
