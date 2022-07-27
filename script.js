//Defined variables 

const operandButton = document.querySelectorAll('[data-operand]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-allClear]');
const previousOpText = document.querySelector('[data-previousOp]');
const currentOpText = document.querySelector('[data-currentOp]');

let firstOperand = '';
let nextOperand = '';
let currentOp = null;
let shouldReset = false;




//Event listeners

equalsButton.addEventListener('click', calculate);
deleteButton.addEventListener('click', deleteNumber);
allClearButton.addEventListener('click', clear);

operandButton.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
});

operatorButton.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent))
});





//Functions


//Function to call number that is clicked
function appendNumber(number) {
    if (currentOpText.textContent === '0' || shouldReset) {
        resetDisplay();
    }
    currentOpText.textContent += number;    
};


//Function to call operator when clicked
function setOperation(operator) {
    if (currentOp !== null) {
        calculate();
    };
    firstOperand = currentOpText.textContent;
    currentOp = operator;
    previousOpText.textContent = `${firstOperand} ${currentOp}`;
    shouldReset = true;
}


//Function to set display 
function resetDisplay() {
    currentOpText.textContent = '';
    shouldReset = false;
}


//Function for deleting last number
function deleteNumber() {
 currentOpText.textContent = currentOpText.textContent.toString().slice(0, -1);
};


//Function to clear all
function clear() {
    currentOpText.textContent = '0';
    previousOpText.textContent = '';
    firstOperand = '';
    nextOperand = '';
    currentOp = null;
};


//Function to evaluate numbers and operator called
function calculate() {
    if (currentOp === null || shouldReset) {
        return;
    };    
    if (currentOp === '/' && currentOpText.textContent === '0') {
        alert("Dividing zero is like dividing the number of cookies you have by the amount of friends you have.")
        return;
    }
    nextOperand = currentOpText.textContent;
    currentOpText.textContent = operate(currentOp, firstOperand, nextOperand);
    previousOpText.textContent = `${firstOperand} ${currentOp} ${nextOperand}`;
    currentOp = null;
}




//Basic functions for calculator
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '/':
            if (b === 0) {
                return null
            } else {
                return divide(a, b);
            };
        case 'X':
            return multiply(a, b);
        case '-':
            return subtract(a, b);
        case '+':
            return add(a, b);
        default:
            return null;
    }
};
