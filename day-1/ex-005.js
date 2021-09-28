/*Write a function `abbrev` that takes a string as argument, and returns an abbreviation of the string.

The abbreviation will be made of the first 3 characters of the string, followed by a space and the total number of characters in the string.

If the string is shorter than 3 characters, it will be padded with spaces. (Look at the examples!)*/

function abbrev(str) {
    if (str.length >= 3) {
        console.log(str.substring(0, 3) + ' ' + str.length);
    } 
    if (str.length == 2) {
        console.log(str.substring(0, 2) + ' ' + str.length);
    } 
    if (str.length == 1) {
        console.log(str.substring(0, 1) + '  ' + str.length);
    }
}

abbrev("Nice")
abbrev("I am your father")
abbrev("Supercalifragilisticexpialidocious")
abbrev("!")
