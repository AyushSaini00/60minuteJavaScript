const container = document.querySelector('.container');
const error = document.querySelector('.error');

function getAge(){
    
    const dobValue = document.getElementById('dob').value;

    //if the dob value is falsy, then simply return
    if(!dobValue) return;

    //stores dob ----- Date Wed Sep 01 1999 05:30:00 GMT+0530 (India Standard Time)
    let dob = new Date(dobValue);

    //current date
    const today = new Date();


    let diff = today - dob;
    let age = diff / (1000 * 60 * 60 * 24 * 365); //21.375 

    calcAge(age);
}

function calcAge(age){ 
    let year = Math.floor(age); //21
    let remainingYear = age - year; //0.375

    let monthDiff = remainingYear * 12; //4.5
    let month = Math.floor(monthDiff); //4

    let remainingMonth = monthDiff - month; //0.5
    let day = Math.floor(remainingMonth * 30); //15
    
    //display age to UI
    displayAge(year, month, day);
}

function displayAge(y,m,d){
    
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');   
    
    years.innerText = y;
    months.innerText = m;
    days.innerText = d;

    if(y >= 0){
        error.style.display = `none`;
    }
    if(y < 0){
        error.style.display = `block`;
    }
}

container.addEventListener('input', getAge);