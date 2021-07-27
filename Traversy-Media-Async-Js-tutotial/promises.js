const posts = [
  { title: "Post One", body: "This is a post one" },
  { title: "Post Two", body: "This is a post two" },
];

function getPosts() {
  setTimeout(() => {
    output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false; // error checking, if we changed to true will throught error message

      if (!error) {
        resolve();
      } else {
        reject("error: something went wrong");
      }
    }, 2000);
  });
}

// This is to create a lot of .then otherwise you have to create Promise.all
// createPost({ title: "Post three", body: "this is a post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise(
  (resolve, reject) => setTimeout(resolve, 2000, "Goodbye") // we add setTimeout of 2000 millsec that is why takes 2sec to show up on console.
);
// array of promises
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
