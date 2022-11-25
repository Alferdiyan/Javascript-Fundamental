// async Await
// Penanganan data asynchronus dengan membuat function async
/*
const firstName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `eka`;
      resolve(data);
    }, 1000);
  });
};
const lastName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `ferdiyanto`;
      resolve(data);
    }, 1000);
  });
};

const resultName = async () => {
  const first = await firstName();
  const last = await lastName();
  return `${first} ${last}`;
};

resultName().then((result) => console.log(result));
*/

const fetch = require(`node-fetch`);

const callData = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return data.json();
};

callData().then((result) => console.log(result));
