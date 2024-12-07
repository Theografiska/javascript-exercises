const sumAll = (firstNo, secondNo) => {
    let sum = 0;
    if (firstNo <= 0 || secondNo <= 0) {
        return 'ERROR';
    } else if (Number.isInteger(firstNo) === false || Number.isInteger(secondNo) === false) {
        return 'ERROR';
    } else if (firstNo === secondNo) {
        sum += firstNo + secondNo;
    } else if (firstNo < secondNo) {
        for (i=firstNo; i<=secondNo; i++) {
            sum += i;
        }
    } else if (secondNo < firstNo) {
        for (i=secondNo; i<=firstNo; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
