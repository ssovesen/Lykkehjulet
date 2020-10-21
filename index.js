var inputText = document.getElementById('inputText');
var inputList = document.getElementById('inputList');
var inputArray = [];
var spinResultElement = document.getElementById('spinResultElement');
var spinButton = document.getElementById('spinButton');
var wheelElement = document.getElementById('wheelElement');


function printInput (print) {
    inputList.innerHTML += `<li>${print}</li>` 
    inputArray.push(print)
    inputText.value = ""
    makeVisible(spinButton);
}

function spinWheel () {
    wheelElement.style.animation = "spin ease 3s"
    var spinResult = inputArray[Math.floor(Math.random()*inputArray.length)]
    makeInvisible(inputList);
    makeInvisible(spinButton);
    makeVisible(spinResultElement);
    spinResultElement.innerHTML = `${spinResult}`    
}

function makeVisible (element) {
    element.style.visibility = "visible";
}
function makeInvisible (element) {
    element.style.visibility ="hidden";
}
