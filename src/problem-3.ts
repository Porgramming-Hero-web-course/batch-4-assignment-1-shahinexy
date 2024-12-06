// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number =>{
    const array: string[] = sentence.split(' ') 

    let count: number = 0
    
    for(let i of array){
        if(i.includes(word)){
            count ++;
        }
    }
    return count;
}

console.log(countWordOccurrences("I love typescript, typescript", "typescript"));