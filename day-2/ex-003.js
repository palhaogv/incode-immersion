/*Write a function `averageMinMax` that takes an array of integers, and displays the minimum, the maximum, and the average of those integers.

Reminder: the average of a series of integers is the total sum of those integers divided by the number of integers. You will floor the result.*/

function averageMinMax (arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let avg = arr.reduce((a, b) => a + b) / arr.length
    console.log(`Min: ${min}`)
    console.log(`Max: ${max}`)
    console.log(`Average: ${avg}`)
}

averageMinMax([-42, 0, 42])
averageMinMax([30, 20, 100])
averageMinMax([-23, -4, -12])
