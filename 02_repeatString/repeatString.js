const repeatString = (string, number) => {
    let phrase = "";
    if (number<0) {
        return 'ERROR';
    } else {
    for (i=1; i<=number; i++) {
        phrase += string;
    }
    return phrase;
    }
};

let repeatedPhrase = repeatString('John', 4);
console.log(repeatedPhrase);

// Do not edit below this line
module.exports = repeatString;
