function LoadFunction(){
var element = document.getElementById('head1');
element.firstChild.nodeValue = 'Heading Changed';

var element = document.getElementById('p1');
element.firstChild.nodeValue = 'New paragraph text';
}

document.addEventListener('DOMContentLoaded', LoadFunction);
