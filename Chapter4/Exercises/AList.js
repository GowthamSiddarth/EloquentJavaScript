/*
Objects, as generic blobs of values, can be used to build all sorts of data structures.
A common data structure is the list (not to be confused with array). A
list is a nested set of objects, with the first object holding a reference to the
second, the second to the third, and so on.
let list = {
value: 1,
rest: {
value: 2,
rest: {
value: 3,
rest: null
}
}
};
The resulting objects form a chain, like this:
value: 1
rest: value: 2
rest: value: 3
rest: null
A nice thing about lists is that they can share parts of their structure. For
example, if I create two new values {value: 0, rest: list} and {value: -1,
rest: list} (with list referring to the binding defined earlier), they are both
independent lists, but they share the structure that makes up their last three
elements. The original list is also still a valid three-element list.
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

let ListNode = class {
    constructor(value) {
        this.value = value;
        this.rest = null;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

    getRest() {
        return this.rest;
    }

    setRest(listNode) {
        this.rest = listNode;
    }
};

const arrayToList = (array) => {
    let headNode = new ListNode();
    array.reduce((headNode, arrayItem) => {
        if (undefined == headNode.value) {
            headNode.setValue(arrayItem)
            return headNode;
        } else {
            let newNode = new ListNode(arrayItem);
            headNode.setRest(newNode);
            return newNode;
        }
    }, headNode);

    return headNode;
};

const listToArray = (listNode) => {
    let currNode = listNode;
    let array = new Array();
    while (null != currNode) {
        array.push(currNode.getValue());
        currNode = currNode.getRest();
    }

    return array;
};

const prepend = (list, elem) => elem.setRest(list) || elem;

const elementAt = (list, position) => {
    if (position < 0) {
        return undefined;
    }
    let currNode = list;
    while (position > 0 && null != currNode) {
        currNode = currNode.getRest();
        position--;
    }

    return 0 == position && null != currNode ? currNode : undefined;
}

const elementAtRec = (list, position) => {
    if (position < 0) {
        return undefined;
    } else if (0 == position || null == list) {
        return null == list ? undefined : list;
    } else {
        return elementAtRec(list.getRest(), position - 1);
    }
}

let array = [...Array(10).keys()];
let list = arrayToList(array)
console.log(list);
console.log(listToArray(list));
list = prepend(list, new ListNode(-1));
console.log(list);
let node = elementAtRec(list, 17);
console.log(undefined != node ? node.getValue() : "undefined");