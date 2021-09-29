/*Write a function `averageMinMax` that takes an array of integers, and displays the minimum, the maximum, and the average of those integers.

Reminder: the average of a series of integers is the total sum of those integers divided by the number of integers. You will floor the result.*/

function averageMinMax (arr) {
    console.log(`Min: ${Math.min(...arr)}`)
    console.log(`Max: ${Math.max.apply(null, arr)}`)
    console.log(`Average: ${arr.reduce((a, b) => a + b) / arr.length}`)
}

averageMinMax([-42, 0, 42])
averageMinMax([30, 20, 100])
averageMinMax([-23, -4, -12])
