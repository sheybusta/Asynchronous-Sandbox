const posts = [
  { title: "Post One", body: "This is a post one" },
  { title: "Post Two", body: "This is a post two" },
];

function getPosts() {
  debugger;
  setTimeOut(() => {
    output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    console.log(outout);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error: something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "post three", body: "this is three post" }).then(getPosts);
