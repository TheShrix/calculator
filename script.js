class Calculator {
    constructor(previousOpText, currentOpText) {
        this.previousOpText = previousOpText
        this.currentOpText = currentOpText
        this.clear()
    }


    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }


    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


    appendNumber(number) {
            if (number === '.' && this.currentOperand.includes('.'))
                return
            this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    


    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.calculate()
        } 
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    };


    calculate() {

    };


    getDisplayNumber(number) {

    }


    updateDisplay() {
        this.currentOpText.innerText = this.currentOperand;
    };


}



//Variabled defined to call from HTML 

const operandButton = document.querySelectorAll('[data-operand]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-allClear]');
const previousOpText = document.querySelector('[data-previousOp]');
const currentOpText = document.querySelector('[data-currentOp]');

const calculator = new Calculator(previousOpText, currentOpText);



//Event listeners called inside Calculator class

operandButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equalsButton.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})