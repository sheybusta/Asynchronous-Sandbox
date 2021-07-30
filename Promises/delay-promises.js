const delayedPromise = (delay = 0, value = delay) => {
  const delayedResolver = (resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  };
  return new Promise(delayedResolver);
};

delayedPromise(100, "hi 100")
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
delayedPromise(50, "hi 50")
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

delayedPromise(1000, "hi 1000")
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
