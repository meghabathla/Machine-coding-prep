// [Q4] What is a closure in JavaScript, and how/why would you use one? (10 points)

function outer() {
  let outerVariable = 90;
  return function inner() {
    console.log("hello I am inner function", outerVariable);
  };
}
const result = outer();
result();
