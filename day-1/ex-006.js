/*Write a function `pyramid` that takes the size of the base as argument, and draws a pyramid of `#`.*/

function pyramid(base) {
    ifEven = base % 2
    hash = 1
    spaces = (base - 1) / 2
    while (hash <= base) {
        if (ifEven != 0) {
            console.log(' '.repeat(spaces) + '#'.repeat(hash) + ' '.repeat(spaces))
            hash +=2
            spaces -=1
        } else {
            console.log(' '.repeat(spaces) + '#'.repeat(hash + 1) + ' '.repeat(spaces))
            hash +=2
            spaces -=1
        }
    }
}

pyramid(9)
pyramid(1)
pyramid(5)
pyramid(6)
