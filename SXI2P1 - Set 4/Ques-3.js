// What are the various ways to create objects in JavaScript? (10 points)

// Method-1

const object = {
  name: "Megha",
  age: 25,
  place: "Muzaffarnagar",
};

//Method-2
const newobj = Object.create(object);
newobj.grade = 78;
console.log(newobj);

//Method-3

const myObj = Object.assign({}, object);
myObj.date = "13Nov";
console.log(myObj);
