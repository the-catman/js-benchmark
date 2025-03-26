function benchFunc(title, func, logFn = () => {}) {
    let date = Date.now();
    const returnValue = func();
    date = Date.now() - date;

    console.log(`${title} took ${date}ms to complete.`);
    logFn(returnValue); // If needed
}

function randMinMax(min, max) {
    return Math.random() * (max - min) + min;
}

function generateArray(length = 0, generator) {
    return Array.from({ length }, generator);
}

function generateRandomArray(length = 0) {
    return Array.from({ length }, () => randMinMax(-1000, 1000));
}

function generateRandomObject(entries) {
    const randomObject = {};
    
    for (let i = 0; i < entries; i++) {
      const randomKey = `key_${Math.random().toString(36).substring(2, 15)}`;
      const randomValue = Math.random().toString(36).substring(2, 15); 
      randomObject[randomKey] = randomValue;
    }
    
    return randomObject;
  }

module.exports = {
    benchFunc,
    randMinMax,
    generateArray,
    generateRandomArray,
    generateRandomObject
};