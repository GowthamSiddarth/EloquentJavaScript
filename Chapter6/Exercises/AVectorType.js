/*
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    toString() {
        return this.x + ", " + this.y;
    }
}

let vector1 = new Vec(2, 4);
console.log(vector1.length);

let vector2 = new Vec(1, 3);
console.log(String(vector2));

console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));