function processData(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(array);
        }, 3000);
    });
}

function filterEvenNumbers(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyEvenNumbers(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const multipliedArray = array.map(num => num * 2);
            resolve(multipliedArray);
        }, 2000);
    });
}

const inputArray = [1, 2, 3, 4];

processData(inputArray)
    .then(filterEvenNumbers)
    .then(evenNumbers => {
        const output = evenNumbers.join(', ');
        document.getElementById('output').textContent = output;
        return evenNumbers;
    })
    .then(multiplyEvenNumbers)
    .then(result => {
        const output = result.join(', ');
        document.getElementById('output').textContent = output;
    })
    .catch(error => console.error('An error occurred:', error));
