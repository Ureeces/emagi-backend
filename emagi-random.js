const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const randomElement = function(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length));
    
    return arr[randomIndex]; 
}

module.exports = randomElement;