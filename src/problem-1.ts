// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


const sumArray = (number: number[]): number =>{
    return number.reduce((num, prev) => num + prev, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]));