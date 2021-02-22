const nameEl = document.querySelector('.name');
const imgEl = document.querySelector('.img');
const fullNameEl = document.querySelector('.full-name');
const publisherEl = document.querySelector('.publisher');

const intelligenceEl = document.getElementById('intelligence');
const strengthEl = document.getElementById('strength');
const speedEl = document.getElementById('speed');
const durabilityEl = document.getElementById('durability');
const powerEl = document.getElementById('power');
const combatEl = document.getElementById('combat');

function url(){
    let randomId = Math.floor(Math.random() * 731) + 1; //random integer b/w 1 and 731
    let api = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomId}.json`;
    getInfo(api);
}

function getInfo(apiURL){
    fetch(apiURL)
    .then(response => {
        if(!response.ok){
            url(); //re fetch with new apiURL if response wasn't ok
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        nameEl.innerText = data.name;

        imgEl.src = data.images.sm;
        imgEl.setAttribute('alt', data.name);

        fullNameEl.innerText = data.biography.fullName;

        publisherEl.innerText = data.biography.publisher;

        intelligenceEl.innerText = data.powerstats.intelligence;
        strengthEl.innerText = data.powerstats.strength;
        speedEl.innerText = data.powerstats.speed;
        durabilityEl.innerText = data.powerstats.durability;
        powerEl.innerText = data.powerstats.power;
        combatEl.innerText = data.powerstats.combat;
    })
    .catch(error => {
        console.log('problem : ', error);
        
    });
}

window.addEventListener('load', url);    