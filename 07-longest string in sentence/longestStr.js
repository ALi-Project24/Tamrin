function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
const input = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
const output = findLongestWord(input);
console.log(output);
