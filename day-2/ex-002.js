/*Write a function `concatArray` that takes an array of words, and return a single string made of those words.

The words will be separated by a space, and the string will end with a `.`.*/

function concatArray(arr) {
    return console.log(arr.join(' ') + '.')
}

concatArray(["Hello", "this", "is", "dog"])
concatArray(["All", "I", "want", "for", "christmas", "is", "you"])
concatArray([])