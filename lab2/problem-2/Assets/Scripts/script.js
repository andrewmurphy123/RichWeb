import fetch from 'node-fetch';

fetchPosts();

async function fetchPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    let filteredPosts = posts.filter(post => countWords(post.title) > 6)
    console.log(filteredPosts);

    let bodyData = posts.map(function(c) {
        return c.body;
    })
    .reduce(function(prev, curr) {
        return prev + " " + curr;
      })
      .split(/\s+/)
      .reduce((body, word) => {
        body[word]= (body[word] || 0) + 1;
        return body;
      }, {});
       
      console.log(bodyData);
}

function countWords(postTitle) {
    const words = postTitle.split(" ");
    return words.filter(word => word != "").length;
}