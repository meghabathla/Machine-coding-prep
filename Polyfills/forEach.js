Array.prototype.myForEach = function (callbackFn) {
  for (let index = 0; index < this.length; index++) {
    callbackFn(this[index], index, this);
  }
};

const arr = [2, 3, 4, 5, 6];

arr.myForEach((element) => {
  console.log(`cb`, element);
});
