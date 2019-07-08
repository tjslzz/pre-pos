'use strict';

function collectSameElements(collectionA, collectionB) {
  var res = new Array();
  for(var i = 0,lena = collectionA.length; i < lena;i++){
    for(var j = 0,lenb = collectionB.length; j < lenb;j++){
      if(collectionA[i] == collectionB[j]){
        res.push(collectionA[i]);
      }
    }
  }
  return res;
}
