/*Write a function `hasValue` that takes an object and a value as arguments, 
and returns whether that value is found in the object.

The value must be found as a value, not as a key.*/

function hasValue(obj, arg) {
    //gets the object's values.
    let objValues = Object.values(obj)
    //checks if the arg is within the values.
    let argIsInclude = objValues.includes(arg)
    return console.log(argIsInclude)
}

hasValue({"hello": "bonjour", "my": "mon"}, "bonjour")
hasValue({"hello": "bonjour", "my": "mon"}, "hello")
hasValue({"hello": "bonjour", "my": "mon"}, "tasty")