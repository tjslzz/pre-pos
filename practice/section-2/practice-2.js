'use strict';

function countSameElements(collection) {
  var result = new Array();
  var obj = {key:"a", count:0};
  for(var i = 0, len = collection.length;i < len;i++){
    var str = collection[i]+"";
    if(str.length == 1){
      if(obj.key == collection[i]){
        obj.count = obj.count + 1;
      }
      else{
        result.push({key:obj.key,count:obj.count});
        obj.key = collection[i];
        obj.count = 1;
      }
    }
    else{
      var temp = str.split('-');
      result.push({key:obj.key,count:obj.count});
      result.push({key:temp[0],count:parseInt(temp[1])});
    }
  }
  console.log(result);
  return result;
}
