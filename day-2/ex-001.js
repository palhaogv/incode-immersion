/*Write a function `displayFullName` that takes a full name as argument, and displays them James Bond-style.

If the name has middle names or several surnames, only the last part will be repeated.*/

function displayFullName(name) {
    let nameSplit = name.split(' ')
    const lastName = nameSplit[nameSplit.length -1]
    console.log(`My name is ${lastName}, ${name}`)
}

displayFullName("James Bond")
displayFullName("Ada Lovelace")
displayFullName("Salvador Felipe Jacinto Dalí")
