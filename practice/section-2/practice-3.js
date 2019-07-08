'use strict';

function countSameElements(collection) {
  var result = new Array();
  var obj = {name:"a", summary:0};
  for(var i = 0, len = collection.length;i < len;i++){
    var str = collection[i]+"";
    if(str.length == 1){
      if(obj.name == collection[i]){
        obj.summary = obj.summary + 1;
      }
      else{
        result.push({name:obj.name,summary:obj.summary});
        obj.name = collection[i];
        obj.summary = 1;
      }
    }
    else{
      //特殊情况
      if(str.indexOf(obj.name) == -1){
        //换了其他的字母
        result.push({name:obj.name,summary:obj.summary});
        obj['name'] = str.substring(0,1);
        obj['summary'] = parseInt(str.substring(2,3));
      }
      else{
        //还是这个字母
        var num = parseInt(str.match(/\d+/g));
        obj.summary = obj.summary + num;
      }
    }
  }
  result.push({name:obj.name,summary:obj.summary});
  return result;
}
