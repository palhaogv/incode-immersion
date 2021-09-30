/*Write a function `translate` that takes a dictionary object and a sentence as arguments, and returns the translation of the sentence according to the values in the dictionary.

If a word to be translated doesn't exist in the dictionary, the function will return "Error: missing value".*/

function translate(obj, str) {
    //splitting the str into an array
    let breakStr = str.split(' ')

    //creating an array to push the str translated.
    let strTranslated = []

    //creating an array to push if each of the str splitted it's a key
    let checkingIfTrue = []

    //creating an array with the keys of the obj for later check if all the str splitted it's a key
    let objKeys = Object.keys(obj)

    //pushing to checkingIfTrue if which specific str of breakStr matches the keys of the obj
    for (i = 0; i < breakStr.length; i++) output = checkingIfTrue.push(objKeys.includes(breakStr[i])) 
    //if one of the items doesn't match, its going to return 'Error: missing value'
    if (checkingIfTrue.includes(false)) {
        console.log('Error: missing value')
    //if all the the items match (meaning that all the items inside the array checkingIfTrue gonna be 'true' e.g. [true, true, true, true]), its going to return the translation.
    }else{
        for (i = 0; i < breakStr.length; i++) output = strTranslated.push(obj[breakStr[i]])
        console.log(strTranslated.join(' '))
    }
}

translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere")
translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute")
translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy")