// Practicing with Oliver https://github.com/oliverjam/promise-practice
// Promises allow us to represent the eventual completion of async code.
// For EX => when we fetch data from a server we will receive a promise that will eventually represent the server's response.
// Promises can be in 3 states : pending(async code has not finished yet), fulfilled(excepted value is available), rejected(expected value is not available).

// const myPromise = getSomeAsyncData();
// myPromise.then((someData) => console.log(someDara));
// // console.log(myPromise);

// Promises are objects with a .then() method. This method takes a callback function as an argument. The promise will call this function with the fulfilled value when it's ready.
// Chaining .then(). method than returns a promise. That will prevent to create nested callbacks. If the first .then() returns a promise the next one won't run until the first fullfills.
// Erros its with catch

// creating promises:

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    if (!ms) reject("please enter a time to wait");
    setTimeout(() => resolve("your wait is over"), ms);
  });
};

wait(1000).then(console.log);
// after 1sec your wait is over

wait().catch(console.log);

//log first "please enter a time to wait"
//your wait is over
