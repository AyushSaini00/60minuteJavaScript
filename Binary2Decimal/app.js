const container = document.querySelector('.container');

container.addEventListener('submit', (event)=>{

    event.preventDefault();

    let decimal = 0;
    let counter = 0;

    const result = document.querySelector('.result');
    let binary = document.querySelector('#binary').value;

    while(binary > 0){
        let lastDigit = Math.round(binary % 10);
        decimal += Math.pow(2, counter) * lastDigit;
        counter++;
        binary /= 10;
    }

    result.textContent = `Decimal Number : ${decimal}`;
});