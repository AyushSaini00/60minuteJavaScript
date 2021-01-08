const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');


const link = `https://api.quotable.io/random`;

function getQuote(){
    fetch(link)
        .then(response => {
            let data = response.json();
            return data;
        })
        .then(data => {
            quoteElement.innerText = `“${data.content}”`;
            authorElement.innerText = `―${data.author}`;
        })
        .catch(error => {
            console.log(error);
        });
}

window.addEventListener('load', getQuote);