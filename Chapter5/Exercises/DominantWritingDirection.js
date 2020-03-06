/*
Write a function that computes the dominant writing direction in a string of
text. Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy functions
defined earlier in the chapter are probably useful here.
*/

const SCRIPTS = require('../../resources/scripts');

const characterScript = code => {
    for (const script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => from <= code && code >= to)) return script;
    }

    return null;
}

const countBy = (items, groupName) => {
    let groups = [];
    for (const item of items) {
        let name = groupName(item);
        let key = groups.findIndex(group => group.name == name);
        if (-1 == key) groups.push({name: name, count: 1});
        else groups[key].count++;
    }

    return groups;
}