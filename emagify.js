const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const emagify = function(searches) {
    const emojis = [];

    for(let search of searches) {
        if(words.includes(search)) {
            let wordIndex = words.indexOf(search);
            emojis.push(symbols[wordIndex]);
        }

        else {
            emojis.push(search);
        }
    }

    return emojis;
}

module.exports = emagify;

