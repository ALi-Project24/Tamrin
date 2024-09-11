function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
const input1A = [12, "1", 8, 20, 5];
const input1B = [12, 1, 8, 20, 5];
console.log(arraysEqual(input1A, input1B));

const input2A = [12, 1, 8, 20, 5];
const input2B = [12, 1, 8, 20, 5];
console.log(arraysEqual(input2A, input2B));
