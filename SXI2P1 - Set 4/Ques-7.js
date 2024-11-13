// [Q7] Implement the Promise.reject (10 points)?

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
});
