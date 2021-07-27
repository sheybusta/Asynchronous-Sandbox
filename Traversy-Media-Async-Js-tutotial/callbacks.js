const posts = [
  { title: "Post One", body: "This is a post one" },
  { title: "Post Two", body: "This is a post two" },
];

function getPosts() {
  debugger;
  setTimeout(() => {
    output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
getPosts();

createPost({ title: "Post Three", body: " this is post three" }, getPosts);
