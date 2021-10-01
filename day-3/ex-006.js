/*Write a function `countOccurences` that takes a string as argument, and returns an object. 
This object will associate the number of occurences of a word with an array of corresponding words.
*/

function countOccurences(str) {
    let strSplitted = str.split(' ')
    let listOfOccurences = {}
    let finalList = {}

    for (const i of strSplitted) {
        listOfOccurences[i] = listOfOccurences[i] ? listOfOccurences[i] + 1 : 1
    }
    
    let keys = Object.keys(listOfOccurences)
    let values = Object.values(listOfOccurences).map(String)

    for (i = 0; i < Object.keys(listOfOccurences).length; i++) {
        console.log(finalList)
        if (Object.keys(finalList).includes(values[i])) {
            Object.assign(finalList[values[i]], keys[i])
        } else {
            finalList[values[i]] = keys[i]
        }

        //console.log(finalList)
    }
    console.log(finalList)

/*
    strSplitted.forEach(element => {
        let key = getKeyByValue(listOfOccurences, element)
    });*/

    return listOfOccurences
}

console.log(countOccurences('hello is it you hello hello'))