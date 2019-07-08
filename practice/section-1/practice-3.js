'use strict';

function collectSameElements(collectionA, objectB) {
  var res = new Array();
  var _value = objectB.value;
  for(var i = 0,lena = collectionA.length; i < lena;i++){
    for(var j = 0,lenb = _value.length; j < lenb;j++){
      if(collectionA[i] == _value[j]){
        res.push(collectionA[i]);
      }
    }
  }
  return res;
}
