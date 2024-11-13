// [Q2] Explain Function.prototype.bind in JavaScript (10 points).

const object = {
  name: "Megha",
  age: 25,
  place: "Muzaffarnagar",
};

function greet() {
  console.log(
    `Hie my name is ${this.name} and age is ${this.age} and I live in ${this.place}`
  );
}

const getFunction = greet.bind(object);
getFunction();
