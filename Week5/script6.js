function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  //Excersize 6
//  element.style.left = positionLeft - 10 + 'px';
//  excersize 7
element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}



function myKeyDown(event) {
  if (event.keyCode == 37) {
    setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
    setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) {
    setInterval(moveDown, 10);
  }
  if (event.keyCode == 39) {
    setInterval(moveRight, 10);
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}
function decOpacity(){
  var element = document.getElementById("circle");
  var circleOpacity = parseFloat(element.style.opacity);
  element.style.opacity = circleOpacity - 0.1;
}
function changeContent() {
  var element = document.getElementById("circle");
  //element.firstChild.nodeValue = "hahaha";
  //excersize 2
  //element.style.backgroundColor = "Blue";
  //excersize 4
  //element.style.opacity = "1";
  //excersize 5
  var circleOpacity = parseFloat(element.style.opacity);
  element.style.opacity = circleOpacity - 0.1;
  //Excersize 6
  setInterval(decOpacity, 1000);
}

function myClickCircleEvent() {
  var element = document.getElementById("circle");
  //excersize 3
  //element.style.opacity = "0.5";
  //excersize 6
  element.style.opacity  = "1";
  //excersize 7
  //element.addEventListener("click", moveLeft);
  element.addEventListener("click", changeContent);

}

//excersize 1
function clickEvent(){
alert('The Button Was Pressed')
}

function LoadFunction(){
  var element = document.getElementById("circle");
  element.addEventListener("click", clickEvent);
}
//Excersize 8
document.addEventListener('DOMContentLoaded', myClickCircleEvent);
//document.addEventListener('DOMContentLoaded', myClickCircleEvent); //myLoadEvent);
