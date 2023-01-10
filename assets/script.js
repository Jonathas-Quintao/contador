var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var soma = document.getElementById('soma');
soma.addEventListener("click", increment);

var subtrai = document.getElementById('subtracao');
subtrai.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <0)
    currentNumberWrapper.style.color = 'red'
    else
    currentNumberWrapper.style.color = '#000'
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <0)
    currentNumberWrapper.style.color = 'red'
    else
    currentNumberWrapper.style.color = '#000'
}