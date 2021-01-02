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

    // angle of rotation of hands (ignoring the rotation by seconds in hr and min hand)
    let hrHandRotation = 30*hours + minutes/2;
    let minHandRotation = 6*minutes;
    let secHandRotation = 6*seconds;

    //now rotate the hands
    //adding translateX here otherwise only rotate works
    hourHand.style.transform = `rotate(${hrHandRotation}deg) translateX(-50%)`;
    minuteHand.style.transform = `rotate(${minHandRotation}deg) translateX(-50%)`;
    secondHand.style.transform = `rotate(${secHandRotation}deg) translateX(-50%)`;
}

getAngle(); //to start the clock as soon as page loads otherwise it jumps to current time abruptly form 12

setInterval(getAngle, 1000);