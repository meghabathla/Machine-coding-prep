Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }

  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const arr = [1, 23, 34, 45, 56, 72];

const result = arr.myFilter((element) => element % 2 === 0);
console.log(result); // [34, 56, 72]
