const selectTypeElement = document.getElementById('select-type');
const timerElement = document.querySelector('.timer');
const btnWrapper = document.querySelector('.btn-wrapper');

let interval, time;
time = 25*60;

function start(){ 
        interval = setInterval(() => {
            time--;
            display(format(time));
            if(time === 0){
                clearInterval(interval);
                timerElement.innerText = '00:00';
                resetTime();
            }
        },1000);
}

function resetTime(selectType){
    if(selectType === 'pomodoro')
        time = 25*60;
    if(selectType === 'break')
        time = 5*60;
    if(selectType === 'long-break')
        time = 10*60;        
}

function selectSession(session){
    if(session === 'pomodoro')
        display('25:00');
    if(session === 'break')
        display('05:00');
    if(session === 'long-break')
        display('10:00');        
}

function reset(){
    if(interval)
        clearInterval(interval);
    resetTime();
    selectSession(selectTypeElement.value);
}

function format(time){
    let min = Math.trunc(time / 60);
    let sec = Math.round(((time / 60) - min)*60);

    let minutes = min.toString().padStart(2,'0');
    let seconds = sec.toString().padStart(2,'0');

    return `${minutes}:${seconds}`;
}

function display(formattedTime){
    timerElement.innerText = formattedTime;
}

let isClicked = true;

btnWrapper.addEventListener('click', e => {

    //start btn
    if(e.target.id === 'start'){

        //proceed only if the btn is clicked
        if(isClicked){
            //start the timer
            start();
        }

        //to prevent it to start accidentally
        isClicked = false;
    }

    //pause btn
    if(e.target.id === 'pause'){

        //so that after pausing, user can now again click on start to resume the timer
        isClicked = true;
        if(interval)
            clearInterval(interval);
    }

    //reset btn
    if(e.target.id === 'reset'){

        isClicked = true;
        reset();
    }
});
selectTypeElement.addEventListener('change', ()=> {
    selectSession(selectTypeElement.value);
    resetTime(selectTypeElement.value);
});