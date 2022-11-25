/* expresion pada javascript Untuk memecah array atau object kedalam variabel yang berbeda */

const myObject = {
  name: "ferdi",
  age: 27,
};

const { name, age } = myObject;
console.log(name, age);

const myArray = ["Ferdi", 27];
//const copyAray = [...myArray, "bachelor"];
//console.log(copyAray);
const [named, aged] = myArray;
console.log(named, aged);
