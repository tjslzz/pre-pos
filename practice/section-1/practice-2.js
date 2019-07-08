'use strict';

function collectSameElements(collectionA, collectionB) {
  var res = new Array();
  for(var i = 0,lena = collectionA.length; i < lena;i++){
    for(var j = 0,lenb = collectionB.length; j < lenb;j++){
      for(var k = 0, lenc = collectionB[j].length; k < lenc;k++){
        if(collectionA[i] == collectionB[j][k]){
          res.push(collectionA[i]);
        }
      }
    }
  }
  return res;
}
