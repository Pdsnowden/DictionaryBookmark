lookupDictDefinition = function(){
return function(){
  var selection = window.getSelection();

  if(selection.rangeCount == 0){
    console.log("nothing selected");
  }else {
    console.log("selection '" + selection.toString() + "'");
  }
}
}();

lookupDictDefinition();
