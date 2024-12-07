const removeFromArray = (array, ...theArgs) => {
    return array.filter((word) => !(theArgs.includes(word)));
};

// Do not edit below this line
module.exports = removeFromArray;
