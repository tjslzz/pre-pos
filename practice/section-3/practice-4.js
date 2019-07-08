'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = new Array();
  var obj = {key:"a", count:0};
  for(var i = 0, len = collectionA.length;i < len;i++){
    var str = collectionA[i]+"";
    if(str.length == 1){
      if(obj.key == collectionA[i]){
        obj.count = obj.count + 1;
      }
      else{
        result.push({key:obj.key,count:obj.count});
        obj.key = collectionA[i];
        obj.count = 1;
      }
    }
    else{
      var temp = str.split('-');
      result.push({key:obj.key,count:obj.count});
      result.push({key:temp[0],count:parseInt(temp[1])});
    }
  }

  for(var i = 0,len = result.length;i < len;i++){
    var item = result[i].key;
    var count = result[i].count;
    var value = objectB.value;
    for(var j = 0, lenb = value.length; j <lenb;j++){
      if(item == value[j]){
        var sum = count / 3;
        sum = parseInt(sum);
        result[i].count = count - sum;
      }
    }
  }
  return result;
}
