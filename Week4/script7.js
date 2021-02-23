function clickFunction(){
  var element = document.getElementById('myinput');
var div = document.getElementById('result');
div.firstChild.nodeValue = element.value;
}

function LoadFunction(){
  var element = document.getElementById('myinput');
element.addEventListener('keyup', clickFunction);
}

document.addEventListener('DOMContentLoaded', LoadFunction);
