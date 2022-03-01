//TO RUN: node filename.js

/* TODO:
1. Determine operator in formatted string input
2. Return function to calculate result */

const input = '4+2';

//using [] as we learned in class
const evaluate = ([left, op, right]) => {
    switch (op) {
        //cases for each operator
        case '+': return (input) => Number(left) + Number(right); break;
        case '-': return (input) => Number(left) - Number(right); break;
        case '*': return (input) => Number(left) * Number(right); break;
        case '/': return (input) => Number(left) / Number(right); break;
        case '^': return (input) => Number(left) ** Number(right); break; 
    }
}

let eval = evaluate(input);
console.log(eval(input));