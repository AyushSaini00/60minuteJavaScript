const projects = [
    {
        index: '01',
        name : "Binary2Decimal",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Binary2Decimal"
    },
    {
        index: '02',
        name : "Weather-app",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Weather-app"
    },
    {
        index: '03',
        name : "stopwatch",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/stopwatch"
    },
    {
        index: '04',
        name : "countdown",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/countdown"
    },
    {
        index: '05',
        name : "Random-Color-Generator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Random-Color-Generator"
    },
    {
        index: '06',
        name : "Analog-clock",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Analog-clock"
    },
    {
        index: '07',
        name : "Tip-Calculator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Tip-Calculator"
    },
    {
        index: '08',
        name : "BMI-Calculator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/BMI-Calculator"
    },
    {
        index: '09',
        name : "Speed-Reader",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Speed-Reader"
    },
    {
        index: '10',
        name : "Box-Shadow-Generator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Box-Shadow-Generator"
    },
    {
        index: '11',
        name : "Password-Generator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Password-Generator"
    },
    {
        index: '12',
        name : "Random-Linear-Gradient",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Random-Linear-Gradient"
    },
    {
        index: '13',
        name : "Quotes-Generator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Quotes-Generator"
    },
    {
        index: '14',
        name : "HTML-Canvas",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/HTML-Canvas"
    },
    {
        index: '15',
        name : "Age-Calculator",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Age-Calculator"
    },
    {
        index: '16',
        name : "Form-Validation",
        code : "https://github.com/AyushSaini00/60minuteJavaScript/tree/main/Form-Validation"
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