const reverseString = string => {
    const splitToArray = string.split("");
    let newString = "";
    for (i=splitToArray.length-1; i>=0; i--) {
        newString += splitToArray[i];
    } 
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
