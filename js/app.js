let text = "";
const textInputNode = document.querySelector(".js-post__text");
const postButtonNode = document.querySelector(".js-post__publication-button");

console.log(textInputNode);
console.log(postButtonNode);

postButtonNode.addEventListener("click", function () {
  postText = textInputNode.value;
  console.log(postText);
});
