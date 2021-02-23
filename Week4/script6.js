function updateHeading(){
  var element = document.getElementById('head1');
  element.firstChild.nodeValue = 'Heading Changed';
}

function updatePara(){
  var element = document.getElementById('p1');
  element.firstChild.nodeValue = 'New paragraph text';
}

function LoadFunction(){
var element = document.getElementById('head1');
element.addEventListener('click', updateHeading);

var element = document.getElementById('p1');
element.addEventListener('click', updatePara);
}

document.addEventListener('DOMContentLoaded', LoadFunction);
