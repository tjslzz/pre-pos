'use strict';

function countSameElements(collection) {
  var result = new Array();
  var obj = {key:"a", count:0};
  for(var i = 0, len = collection.length;i < len;i++){
    if(obj.key == collection[i]){
      obj.count = obj.count + 1;
    }
    else{
      result.push({key:obj.key,count:obj.count});
      obj.key = collection[i];
      obj.count = 1;
    }
  }
  result.push({key:obj.key,count:obj.count});
  return result;
}
