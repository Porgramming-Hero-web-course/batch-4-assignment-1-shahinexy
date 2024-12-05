// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


const sumArray = (number: number[]): number =>{
    return number.reduce((num, prev) => num + prev, 0)
}

console.log(sumArray([5,5,10]));