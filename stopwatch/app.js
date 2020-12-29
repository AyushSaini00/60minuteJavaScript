//DOM Elements

const playButton = document.getElementById('btn-play');
const pauseButton = document.getElementById('btn-pause');
const resetButton = document.getElementById('btn-reset');
const timer = document.querySelector('.timer');

// CONVERTING TIME TO STRING

function timeToString(time){
    // assume time is 10000000 ms, then
    let differenceInHours = time / 3600000; // 2.777
    let hr = Math.floor(differenceInHours); //2

    let differenceInMinutes = (differenceInHours - hr)*60;  // 46.666
    let min = Math.floor(differenceInMinutes); // 46

    let differenceInSeconds = (differenceInMinutes - min)*60; // 39.99
    let sec = Math.floor(differenceInSeconds); // 39

    let differenceInMilliseconds = (differenceInSeconds - sec)*100; //99.99  /* multiplied it by 100 not 1000 to make it two digit */
    let ms = Math.floor(differenceInMilliseconds); // 99

    //but we want our format to be 02:46:39 , not 2:46:39 ---> for that use padStart()

    let formattedmin = min.toString().padStart(2, '0');
    let formattedsec = sec.toString().padStart(2, '0');
    let formattedms = ms.toString().padStart(2, '0');

    //now we can return the time in required format
    return `${formattedmin}:${formattedsec}:${formattedms}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

function displayInTimer(str){
    timer.innerHTML = str;
}

function play(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        displayInTimer(timeToString(elapsedTime));
    },10);
    toggleButtons("PAUSE");
}

function pause(){
    clearInterval(timerInterval);
    toggleButtons("PLAY");
}

function reset(){
    clearInterval(timerInterval);
    displayInTimer('00:00:00');
    elapsedTime = 0;
    toggleButtons("PLAY");
}
function toggleButtons(Key) {
    if(Key === 'PLAY'){
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    } else {
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }
}


//EVENT LISTENERS

playButton.addEventListener('click', play);
pauseButton.addEventListener('click',pause);
resetButton.addEventListener('click', reset);