// Promise


const firstName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `eka`;
      resolve(data);
    }, 1000);
  });
};
const lastName = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `${name} ferdiyanto`;
      resolve(data);
    }, 1000);
  });
};
firstName()
  .then((data) => lastName(data))
  .then((result) => console.log(result));
