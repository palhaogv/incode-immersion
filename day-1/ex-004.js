/*Write a function `printVowels` that takes a string as argument and displays only the vowels of the string.*/

function printVowels(str) {
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    letters = str.split('');
    vowelsFound = [];

    for (i in letters) {
        if (vowels.includes(letters[i])) {
            vowelsFound.push(letters[i])
        }
    }
    return console.log(vowelsFound.join(''));
}

printVowels("hello world")
printVowels("kangaroo")
printVowels("cheeseburger")
printVowels("rhythm")