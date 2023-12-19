let text = "";
const textInputNode = document.querySelector(".js-post__text");
const postButtonNode = document.querySelector(".js-post__publication-button");
const postsNode = document.querySelector(".js-posts__item");

console.log(textInputNode);
console.log(postButtonNode);

postButtonNode.addEventListener("click", function () {
  postText = textInputNode.value;
  postsNode.innerText = postText;
  console.log(postText);
});
