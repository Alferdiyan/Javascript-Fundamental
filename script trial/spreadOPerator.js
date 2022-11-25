const myObject = {
  name: "ferdi",
  age: 27,
};

const copyObject = { ...myObject, collage: `bachelor` };

const newObject = { ...copyObject, study: `Chemical Engineering` };

console.log(newObject);

const myArray = ["Ferdi", 27];
const copyAray = [...myArray, "bachelor"];
console.log(copyAray);
