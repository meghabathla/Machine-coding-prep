const arr = [2, 3, 4, 5, 6, 7];

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let initialIndex = 0;
  let acc = initialValue;
  if (initialValue === undefined) {
    acc = this[0];
    initialIndex = 1;
  }
  for (let index = initialIndex; index < this.length; index++) {
    acc = callbackFn(acc, this[index], index, this);
  }
  return acc;
};

const result = arr.myReduce((acc, curVal) => {
  if (curVal % 2 == 0) {
    return acc + curVal;
  }
  return acc;
}, 0);

console.log(result); // Output: 12 (2 + 4 + 6)
