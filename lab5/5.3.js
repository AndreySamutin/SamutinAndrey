function pulloutArray(array) {
    let resultArray = [];
    if (Array.isArray(array)) {
        array.forEach((item) => {
            if(Array.isArray(item)) {
                resultArray = resultArray.concat(pulloutArray(item));
            }
            if(typeof item === 'number' && !isNaN(item)) {
                resultArray.push(item)
            }
        })
    } else {
        return null;
    }
    return resultArray;
}

console.log(pulloutArray([1, 2, 3])); // return [1, 2, 3]
console.log(pulloutArray([])); // return []
console.log(pulloutArray([1, [2, 3, 4], 5])); // return [1, 2, 3, 4, 5]
console.log(pulloutArray([1, [2, 3, 4], 5, [1]])); // return [1, 2, 3, 4, 5, 1]
console.log(pulloutArray([1, [1], null, NaN, ['test']])); // return [1, 1]