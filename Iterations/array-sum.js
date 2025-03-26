const util = require("../util");

/* Goal: Iterate over an array of ints to produce a sum. */

const toBeSummed = util.generateRandomArray(10000000);

util.benchFunc("Simple while loop", () => {
    let i = 0, sum = 0;
    while(i < toBeSummed.length) {
        sum += toBeSummed[i];
        i++;
    }
    return sum;
});

util.benchFunc("Simple for loop", () => {
    let sum = 0;
    for(let i = 0; i < toBeSummed.length; i++)
        sum += toBeSummed[i];
    return sum;
});

util.benchFunc("For-of loop", () => {
    let sum = 0;
    for(let i of toBeSummed)
        sum += i;
    return sum;
});

util.benchFunc("Array.prototype.reduce", () => {
    return toBeSummed.reduce((accumulator, curr) => accumulator += curr);
});

util.benchFunc("Array.prototype.forEach", () => {
    let sum = 0;
    toBeSummed.forEach((val) => { sum += val });
    return sum;
});

util.benchFunc("For-in loop", () => {
    let sum = 0;
    for(let i in toBeSummed)
        sum += toBeSummed[i];
    return sum;
});
