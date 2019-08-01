/*
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

const minOfTwo = (x, y) => x < y ? x : y;

let x = 5, y = "as";
console.log(minOfTwo(x, y));