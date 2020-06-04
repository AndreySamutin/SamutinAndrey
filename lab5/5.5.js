function check(data, expectedType) {
    if (!expectedType || data === undefined ) {
        return false;
    }
    if (data === null && expectedType === 'null') {
        return true;
    }
    if (expectedType === 'array' && Array.isArray(data)) {
        return true;
    }
    if (typeof data === expectedType && !(data === null && expectedType === 'object')) {
        return true;
    } else {
        return false;
    }
}

console.log(check([], ''));
console.log(check([], 'array'));
console.log(check(null, 'null'));
console.log(check(null, 'object'));
console.log(check('test', 'string'));
console.log(check({one: 1, two: 2}, 'object'));