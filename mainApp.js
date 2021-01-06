const projects = [
    {
        index: 1,
        name : "Binary2Decimal",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Binary2Decimal"
    },
    {
        index: 2,
        name : "Weather-app",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Weather-app"
    },
    {
        index: 3,
        name : "stopwatch",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/stopwatch"
    },
    {
        index: 4,
        name : "countdown",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/countdown"
    },
    {
        index: 5,
        name : "Random-Color-Generator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Random-Color-Generator"
    },
    {
        index: 6,
        name : "Analog-clock",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Analog-clock"
    },
    {
        index: 7,
        name : "Tip-Calculator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Tip-Calculator"
    },
    {
        index: 8,
        name : "BMI-Calculator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/BMI-Calculator"
    },
    {
        index: 9,
        name : "Speed-Reader",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Speed-Reader"
    },
    {
        index: 10,
        name : "Box-Shadow-Generator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Box-Shadow-Generator"
    }
];

const list = document.querySelector('.list');

projects.forEach(({name, code, index}) => {

    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span class="project-number">${index}</span>
        <a href="/${name}/index.html" class="project-name">
            ${projectNameFormater(name)}
        </a>
        <a href=${code} class="container-links">
            Code
        </a>
    `;
    list.appendChild(listItem);    
});

function projectNameFormater(name){
    return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}