function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
    else if (startNum == endNum) {
        return startNum;
    }
    else {
        return [];
    }
};

console.log(rangeOfNumbers(1,5));
console.log(rangeOfNumbers(6,9));
console.log(rangeOfNumbers(4,4));