// Assignment-1: Count The Occurrence
function countWordOccurrences(text) {
    const wordMap = new Map();
    const deleteWhitespace = text.replace(/[^\w\s]/g, '').toLowerCase();
    //*** (/s/g, '') : replace all whitespace into - '' ***/ 
    const words = deleteWhitespace.split(' ');

    for (let word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1)
        } else {
            wordMap.set(word, 1)
        }
    }

    return wordMap;
}
let inputText = "The quick brown fox jumps over the lazy dog.lazy dog, and quick brown fox create a playful scene. Jumps, jumps, jumps the";
let result = countWordOccurrences(inputText);
console.log(result);