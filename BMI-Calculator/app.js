//DOM elements
const weightElem = document.getElementById('weight');
const heightElem = document.getElementById('height');
const bmiElem = document.querySelector('.bmi');
const descElem = document.querySelector('.desc');
const container = document.querySelector('.container');

//CALCULATING BMI

let bmiMetric;
function calcBMI(){
    let weight = weightElem.value;
    let height = heightElem.value;
    let bmi = weight / (height * height); // bmi in kg/cm*cm
    bmiMetric = (bmi * 10000).toFixed(1); //bmi in kg/m*m rounded to 1 decimal
    // console.log(bmiMetric);
}

//DESCRIPTION ACCORDING TO BMI CATEGORY
function checkCategory(value){
    if(value >= 30.0){
        return `Obese`;
    }else if(value >= 25.0 && value <= 29.9){
        return `Overweight`;
    }else if(value >= 18.5 && value <= 24.9){
        return `Normal`;
    }else if(value <= 18.4) {
        return `Underweight`;
    }
}

//UPDATING UI
function updateUI(){
    calcBMI();
    bmiElem.innerHTML = bmiMetric;
    descElem.innerHTML = checkCategory(bmiMetric);
}

//WHENEVER USER INPUTS SOMETHING IN THE CONTAINER, INVOKE UPDATEUI FUNCTION
container.addEventListener('input', updateUI);