const list = document.querySelector('.list');

fetch("./projects.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        updateUI(data);
    });

function updateUI(projects){
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
}

function projectNameFormater(name){
    return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}