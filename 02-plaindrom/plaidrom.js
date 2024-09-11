function isPalindrome(str) {
  let cleanedStr = str.replace(/\s+/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("headphone"));
