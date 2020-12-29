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