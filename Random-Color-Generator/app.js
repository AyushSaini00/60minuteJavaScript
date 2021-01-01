const hexValueElement = document.querySelector('.hex-value');

function generateHEX(){
    let randomHex = 
        Math.random() //random number between 0 and 1
        .toString(16) //convert that number to hexadecimal string (i.e, base 16)
        .substr(-6);  //grab last 6 digit string
    let randomHexColor = `#${randomHex}`;    
    hexValueElement.textContent = randomHexColor;
    document.body.style.background = randomHexColor;     
}

function keybord(event){
    if(event.code == 'Space'){
        generateHEX();
    }
}

//when user clicks on HEX value
hexValueElement.addEventListener('click', generateHEX);

//when user clicks on spacebar
window.addEventListener('keydown', keybord);