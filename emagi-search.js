const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const emagiSearch = function(search) {
    const possibleEmojis = [];

    for(let word of words) {
        if(word.includes(search)) {
            wordIndex = words.indexOf(word);
            possibleEmojis.push(symbols[wordIndex]);
        }
    }

    return possibleEmojis;
}

module.exports = emagiSearch;