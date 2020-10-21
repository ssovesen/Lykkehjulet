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
    spinButton.style.visibility = "visible"
    console.log('Dette blir lagt til i listen:', print);
    console.log(inputArray.length)
}


function spinWheel () {
    wheelElement.style.animation = "spin ease 3s"
    var spinResult = inputArray[Math.floor(Math.random()*inputArray.length)]
    console.log('resultat', spinResult)
    inputList.style.display="none";
    spinResultElement.style.visibility= "visible"
    spinResultElement.innerHTML = `${spinResult}`
    
}

