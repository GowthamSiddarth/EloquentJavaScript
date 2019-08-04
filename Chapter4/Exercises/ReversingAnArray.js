/*
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/

const reverseArray = (array) => array.map((elem, index) => array[array.length - index - 1]);

const reverseArrayInPlace = (array) => {
    for (let index = 0; index < array.length / 2; index++) {
        [array[index], array[array.length - index - 1]] = [array[array.length - index - 1], array[index]];
    }
}

let array = [...Array(5).keys()];
console.log(array);
console.log(reverseArray(array));
console.log(array);
reverseArrayInPlace(array);
console.log(array);