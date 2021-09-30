/*Write a function `rmCensored` that takes an object as argument, 
and will remove any property where the key and/or the value contains a `*`.

You have to modify the object *in-place*, you don't create a new one.*/

function rmCensored(obj) {
    //getting an array with all the keys within the object.
    Object.keys(obj).forEach(str => {
        //Using .forEach() to get each key as a str inside the array and checks if it has the char *. If yes, delete that key from the object.
        (str.includes('*')) ? delete obj[str] : 0
    })
    //getting an array with all the values within the object.
    Object.values(obj).forEach(str => {
        //creating a function to get the key that refers to an specific value given. The function returns the key as a string.
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        //creating the var that returns the key for each str.
        let keyToDelete = getKeyByValue(obj, str)
        //if the string has the char *, it's going to delete that key
        if (str.includes('*')) {
            delete obj[keyToDelete]
        }
    })
    return obj
}
var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}
rmCensored(swearWords)
console.log(swearWords)

var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies)

