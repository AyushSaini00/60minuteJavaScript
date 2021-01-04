function getAngle(){
    //Get hand Elements
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    //hours, minutes and seconds
    const today = new Date(); //Date object
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // angle of rotation of hands 
    let hrHandRotation = 30*hours + minutes/2 + seconds/120;
    let minHandRotation = 6*minutes + seconds/10;
    let secHandRotation = 6*seconds;

    //now rotate the hands
    //adding translateX here otherwise only rotate works
    hourHand.style.transform = `translateX(-50%) rotate(${hrHandRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minHandRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secHandRotation}deg)`;
}

getAngle(); //to start the clock as soon as page loads otherwise it jumps to current time abruptly form 12

setInterval(getAngle, 1000);