const returnAPromise = (value = "hello") => {
  const resolvingExecutor = (resolve) => {
    resolve(value);
  };
  return new Promise(resolvingExecutor);
};

returnAPromise("first promise")
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

returnAPromise("second promise")
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

returnAPromise("third promise")
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
