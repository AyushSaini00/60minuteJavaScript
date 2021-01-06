//Stores all the input elements into a nodeList
const inputsNodeList = document.querySelectorAll('.property input');

function handleUpdate(){
    // DOM Elements

    const box = document.querySelector('.box');
    const hOffset = document.getElementById('h-offset').value;
    const vOffset = document.getElementById('v-offset').value;
    const blurRadius = document.getElementById('blur').value;
    const spread = document.getElementById('spread').value;
    const color = document.getElementById('color').value;
    const moz = document.querySelector('.moz');
    const webkit = document.querySelector('.webkit');
    const normal = document.querySelector('.normal');
    
    //updating styles of box 
    let boxShadowValue = box.style.boxShadow;
    box.style.boxShadow = `${hOffset}px ${vOffset}px ${blurRadius}px ${spread}px ${color}`;

    //updating css value to be copied
    moz.textContent = `-moz-box-shadow: ${boxShadowValue}`;
    webkit.textContent = `-webkit-box-shadow: ${boxShadowValue}`;
    normal.textContent = `box-shadow: ${boxShadowValue}`;

}


//Event listeners
inputsNodeList.forEach(input => {
    input.addEventListener('change', handleUpdate);
});
inputsNodeList.forEach(input => {
    input.addEventListener('mousemove', handleUpdate);
});



