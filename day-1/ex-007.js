/*Write a function `subDigits` that takes an integer as argument, and returns it after substracting each digit to that integer.

For example, if the integer is 12, it returns 12 - 1 - 2 => 9.

If the integer is negative, the function returns "Argument Error".*/

function subDigits(num) {
    if( num >= 0) {
        digits = num.toString().split('');
        realDigits = digits.map(Number)
        for (i in realDigits) {
            num -= realDigits[i]
        }
        console.log(num)
    } else {
        return console.log('Argument Error')
    }
    
}

subDigits(12)
subDigits(4000000)
subDigits(0)
subDigits(451)
subDigits(-12)
