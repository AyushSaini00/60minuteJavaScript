//DOM elements

const container = document.querySelector('.container');
const billAmountElem = document.getElementById('bill-amount');
const tipPercentageElem = document.getElementById('tip-percentage');
const tipInputElem = document.getElementById('tip-input');
const tipTotalElem = document.querySelector('.tip-total');
const splitValueElem = document.getElementById('split-value');
const splitInputElem = document.getElementById('split-input');
const totalPerPersonElem = document.getElementById('total-per-person');
const billPerPersonElem = document.getElementById('bill-per-person');
const tipPerPersonElem = document.getElementById('tip-per-person');

//Updating the UI

function update(){
    let billAmount = Number(billAmountElem.value); //string to number
    let tipPercentage = tipInputElem.value;
    let persons = splitInputElem.value;

    let tipValue = (tipPercentage / 100) * billAmount;
    let tipEach = tipValue / persons;
    let totalEach = (billAmount + tipValue) / persons;
    let billEach =  billAmount / persons;

    tipPercentageElem.innerHTML = `${tipPercentage}%`;
    tipTotalElem.innerHTML = formatMoney(tipValue);
    splitValueElem.innerHTML = formatSplit(persons);
    totalPerPersonElem.innerHTML = formatMoney(totalEach);
    billPerPersonElem.innerHTML = formatMoney(billEach);
    tipPerPersonElem.innerHTML = formatMoney(tipEach);
}
//FORMATTING MONEY

function formatMoney(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return `₹${value}`;
}
//FORMATTING SPLIT

function formatSplit(value){
    if(value === '1') 
        return `${value} Person`;
    return `${value} People`;    
}
//LISTENING FOR INPUT EVENT ON CONTAINER

container.addEventListener('input', update);

