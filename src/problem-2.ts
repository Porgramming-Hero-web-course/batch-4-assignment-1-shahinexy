// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (numberArr: number[]): number[] =>{
    return numberArr.filter((num, idx) => numberArr.indexOf(num) === idx)
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));