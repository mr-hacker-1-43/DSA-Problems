function countVowelsAndConsonants(str) {
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") {
      consonantCount++;
    }
  }
  return { vowelCount, consonantCount };
}

// Example usage
const inputString = "hello world";
const result = countVowelsAndConsonants(inputString);

console.log("String:", inputString);
console.log("Number of Vowels:", result.vowelCount);
console.log("Number of Consonants:", result.consonantCount);
console.log('z'.charCodeAt());
