/*Write a function `evenIndexes` that takes a word as argument, and returns an array 
of the letters situated at even indexes.*/

function evenIndexes(str) {
    arr = []
    for(i = 0; i < str.length; i+=2) output = arr.push(str.split('')[i])
    return console.log(arr)
}

evenIndexes("lol")
evenIndexes("You're weird")
evenIndexes("")