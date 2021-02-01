class Calculator {
    constructor(calcElement, resultElement){
        this.calcElement = calcElement;
        this.resultElement = resultElement;
        this.clear();
    }

    clear(){
        this.currentOperant = '';
        this.previousOperant = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperant = this.currentOperant.toString().slice(0, -1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperant.includes('.'))
            return;
        this.currentOperant = this.currentOperant.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.operation === '')
            return;
        if(this.previousOperant !== ''){
            this.compute();
        }    
        this.operation = operation;
        this.previousOperant = this.currentOperant;
        this.currentOperant = '';
    }

    compute(){
        let computation;
        let prev = parseFloat(this.previousOperant);
        let current = parseFloat(this.currentOperant);

        if(isNaN(prev) || isNaN(current))
            return;
        switch(this.operation){
            case '+' :
                computation = prev + current;
                break;
            case '−' :
                computation = prev - current;
                break;
            case '×' :
                computation = prev * current;
                break;
            case '÷' :
                computation = prev / current;
                break;
            default:
                return;    
        }
        
        this.currentOperant = computation;
        this.operation = undefined;
        this.previousOperant = '';
    }

    updateDisplay(){
        this.resultElement.innerText = this.currentOperant;
        if(this.operation != null){
            this.calcElement.innerText = `${this.previousOperant} ${this.operation}`;
        }
        
    }
}

//DOM Elements

const calcElement = document.querySelector('[data-calc]');
const resultElement = document.querySelector('[data-result]');
const operationElement = document.querySelectorAll('[data-operation]'); //AC, %, /, *, -, +, ←, =
const numberElement = document.querySelectorAll('[data-number]'); //0-9, .

const calculator = new Calculator(calcElement, resultElement);

numberElement.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationElement.forEach(button => {
    if(button.dataset.operation === 'plus' || button.dataset.operation === 'minus' || button.dataset.operation === 'multiply' || button.dataset.operation === 'divide'){
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
        });
    }
    
    if(button.dataset.operation === 'equals'){
        button.addEventListener('click', () => {
            calculator.compute();
            calculator.updateDisplay();
        });
    }

    if(button.dataset.operation === 'all-clear'){
        button.addEventListener('click', () => {
            calculator.clear();
            calculator.updateDisplay();
        });
    }

    if(button.dataset.operation === 'back'){
        button.addEventListener('click', () => {
            calculator.delete();
            calculator.updateDisplay();
        });
    }
});