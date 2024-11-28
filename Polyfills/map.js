const arr = [2, 3, 4, 5, 6];

Array.prototype.myMap = function (callbackFn) {
  const myArr = [];
  for (let index = 0; index < this.length; index++) {
    myArr.push(callbackFn(this[index], index, this));
  }
  return myArr;
};

const newArr = arr.myMap((element) => element * 2);
console.log(newArr);
