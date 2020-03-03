/*
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties
of objects to compare them.
*/

const deepEqual = (value1, value2) => {
    if (null !== value1 && null !== value2 && typeof value1 == "object" && typeof value2 == "object") {
        if (Object.keys(value1).length != Object.keys(value2).length) return false;
        
        for (const prop in value1) {
            if (value2.hasOwnProperty(prop)) {
                if (!deepEqual(value1[prop], value2[prop])) return false;
            } else {
                return false;
            }
        }

        return true;
    } else {
        return value1 === value2;
    }
};