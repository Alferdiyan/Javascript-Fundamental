const helloWorld = () => {
  return "Hello World";
};
const helloName = (name) => {
  return `helloo my name is ${name}`;
};
const nameAge = (name, Age) => {
  return `hello my name is${name} and my Age is ${Age}`;
};

const callAge = (Age) => `hello my age is ${Age}`;

console.log(nameAge("ferdi", 27));
