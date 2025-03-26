const util = require("../util");

/* Goal: Traverse through the properties of any given object.

Note: We have established in ./array-sum.js that using for loops is more efficient than using .forEach, so that won't
be shown here.
*/

const object = util.generateRandomObject(1000000);

util.benchFunc("For-in loop", () => {
    for(let key in object)
        object[key] + "hi";
});

util.benchFunc("For i of Object.values loop", () => {
    for(let value of Object.values(object))
        value + "hi";
});

util.benchFunc("For i of Object.keys loop", () => {
    for(let key of Object.keys(object))
        object[key] + "hi";
});

util.benchFunc("For key, value of Object.entries loop", () => {
    for(let [key, value] of Object.entries(object))
        value + "hi";
});