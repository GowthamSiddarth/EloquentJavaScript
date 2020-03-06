/*
Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator. Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/

const everyImplWithLoop = (array, predicate) => {
    for (const elem of array) {
        if (!predicate(elem)) {
            return false;
        }
    }

    return true;
}

const everyImplWithSome = (array, predicate) => {
    let count = 0;
    array.some(elem => {
        if (predicate(elem)) count++;
        return false;
    });
    return count == array.length;
}

console.log(everyImplWithLoop([...Array(6).keys()], a => a < 5));
console.log(everyImplWithSome([...Array(6).keys()], a => a < 5));