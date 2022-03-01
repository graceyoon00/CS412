//TO RUN: node filename.js

/* TODO:
   string + lambda --> return array broken on c */

const p3 = (str, func) => func(str)

//replace c with two-character sequence
//prevents c from being lost
const p31 = p3('supercalifragilisticexpialidocious',
    str => str.replace(/c/g, "*c").split('*'))
    //console.log(p31)

const p32 = str => {
    return {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.match(/a/g).length,
        length: str.length
    };
}

console.table(p32('supercalifragilisticexpialidocious'))