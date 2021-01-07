//DOM Elements
const color1Elem = document.getElementById('color-1');
const color2Elem = document.getElementById('color-2');
const degreeRangerElem = document.getElementById('degreeRanger');
const codeElem = document.querySelector('.code');

//Generate HEX
function getHEX(){
    let randomHex = Math.random().toString(16).substr(-6);
    let hexColor = `#${randomHex}`;
    return hexColor;
}
//Generate angle
function getAngle(){
    let angle = Math.floor(Math.random()*360);
    degreeRangerElem.value = angle;
    return degreeRangerElem.value;
}
//Update the UI
function updateUI(){
    color1Elem.innerText = getHEX();
    color2Elem.innerText = getHEX();
    color1Elem.style.background = color1Elem.innerText;
    color2Elem.style.background = color2Elem.innerText;
    codeElem.innerText = `background: linear-gradient(${getAngle()}deg, ${color1Elem.innerText}, ${color2Elem.innerText});`;
    document.body.style.background = `linear-gradient(${getAngle()}deg, ${color1Elem.innerText}, ${color2Elem.innerText})`;
}


//when user clicks SPACE, then UpdateUI
function key(event){
    if(event.code === 'Space')
        updateUI();
}
window.addEventListener('keydown', key);