/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
*/

const flattenWithReduceAndConcat = array => array.reduce((a, b) => a.concat(b), []);

const flattenWithReduceAndConcatRec = (array, depth = 1) => depth > 0 ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenWithReduceAndConcatRec(val, depth - 1) : val), []) : array;

let array = [1, 2, [3, 4, [5, 6]]];
console.log(flattenWithReduceAndConcat(array));
console.log(flattenWithReduceAndConcatRec(array, 10));