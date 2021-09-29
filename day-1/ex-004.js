/*Write a function `printVowels` that takes a string as argument and displays only the vowels of the string.*/

function printVowels(str) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    letters = str.toLowerCase().split('');
    vowelsFound = [];

    for (i of letters) {
        vowels.includes(i) ? vowelsFound.push(i) : 0
        }
    return console.log(vowelsFound.join(''));
}

printVowels("hello world")
printVowels("kangaroo")
printVowels("cheeseburger")
printVowels("rhythm")