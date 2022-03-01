//TO RUN: node filename.js

/* TODO: Take string as input, return in reverse alphabetical order
Ignore special characters */

//our input
const input = 'supercalifragilisticexpialidocious';

/* strategy:
1. turn string into array of characters
2. sort by alphabetical order, reverse it, then join together
(we're ignoring punctuation, so we're just gonna let it sort itself) */

const reverse = str => {
    const charr = str.split("");
    return charr
    .sort().reverse().join("");
}

console.log(reverse(input));