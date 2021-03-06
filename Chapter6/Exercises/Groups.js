/*
The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.
*/

let GroupIterator = require("../../Chapter6/Exercises/IterableGroups");

class Group {
    constructor() {
        this.items = [];
    }

    has(value) {
        return this.items.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
            this.items.push(value);
        }
    }

    delete(value) {
        this.items = this.items.filter(v => v != value);
    }

    static from(iterable) {
        let group = new Group();
        for (const item of iterable) {
            group.add(item);
        }

        return group;
    }

    itemAt(index) {
        return 0 <= index && index < this.length ? this.items[index] : undefined;
    }

    get length() {
        return this.items.length;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

    toString() {
        return this.items.join(", ");
    }
}

let group = Group.from([10, 20]);
console.log(String(group));
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
console.log(String(group));

group = Group.from([...Array(10).keys()]);
for (const item of group) {
    console.log(item);
}