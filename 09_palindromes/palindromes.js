const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    let strippedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');
    
    let reverseString = strippedString.split('').reverse().join('');
    // compare strings
    return strippedString === reverseString;
};  

// Do not edit below this line
module.exports = palindromes;
