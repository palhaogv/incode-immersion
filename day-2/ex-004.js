/*Write a function `replaceArray` that takes an array of words and returns it after replacing all words that start with `h` or `H` by their uppercase version.

All other words will remain unchanged.*/
/*
function replaceArray(arr) {
    arrList = []
    arr.forEach(str => {
        ((str[0] === 'h' )|| (str[0] === 'H')) ? arrList.push(str.toUpperCase()) : arrList.push(str)
    })
    console.log(arrList);
}*/

function replaceArray(arr) {
    arr.forEach(str => {
        ((str[0] === 'h' )|| (str[0] === 'H')) ? str.toUpperCase() : 0
    })
    console.log(arr);
}

replaceArray(["banana", "suit", "hammer"])
replaceArray(["Hello", "there"])
replaceArray(["Hey!", "hey..."])
