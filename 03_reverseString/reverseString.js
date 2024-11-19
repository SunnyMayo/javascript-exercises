const reverseString = function(word) {
    const len = word.length;
    let newWord = "";
    for (let i = 0; i < len; i++) {
        let x = word.charAt(word.length-i-1);
        newWord += x;
    };
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
