// DOM elements

const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const inputElement = document.querySelector('.input').value;


//get time in format of days, hours, minutes, seconds
function getTimeInFormat(differenceInTime){
    let totalTime = differenceInTime / (1000 * 60 * 60 * 24); 
    let days = Math.floor(totalTime); 
    
    let differenceInHours = (totalTime - days) * 24; 
    let hours = Math.floor(differenceInHours);  

    let differenceInMinutes = (differenceInHours - hours) * 60; 
    let minutes = Math.floor(differenceInMinutes);

    let differenceInSeconds = (differenceInMinutes - minutes) * 60;
    let seconds = Math.floor(differenceInSeconds);

    //padding extra '0' at the start of hr, min & seconds
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');

    //updating the values in html
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formattedHours;
    minutesElement.innerHTML = formattedMinutes;
    secondsElement.innerHTML = formattedSeconds;
}

function resetTimer(){
    daysElement.innerHTML = `-`;
    hoursElement.innerHTML = `-`;
    minutesElement.innerHTML = `-`;
    secondsElement.innerHTML = `-`;
}

//storing the time elapsed till inputElement in the variable countdonwDate
let countdownDate = new Date(inputElement).getTime();

function updateTimer(){
    //taking difference of present time with countdownDate
    let dateDotNowinIST = Date.now() + 19800000; //because IST is 5:30 ahead of UCT timezone
    let timeLeft = countdownDate - dateDotNowinIST;

    getTimeInFormat(timeLeft);
    
    if(timeLeft < 0 ){
        clearInterval(init);
        resetTimer();
    }
}

let init = setInterval(updateTimer, 1000);