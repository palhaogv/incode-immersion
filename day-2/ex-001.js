/*Write a function `displayFullName` that takes a full name as argument, and displays them James Bond-style.

If the name has middle names or several surnames, only the last part will be repeated.*/

function displayFullName(name) {
    nameArray = name.split(' ')
    console.log(`My name is ${nameArray[nameArray.length -1]}, ${nameArray.join(' ')}!`)
}

displayFullName("James Bond")
displayFullName("Ada Lovelace")
displayFullName("Salvador Felipe Jacinto Dalí")
