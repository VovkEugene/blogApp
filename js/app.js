let post = "";
const textInputNode = document.querySelector(".js-post__text");
const postButtonNode = document.querySelector(".js-post__publication-button");
const postsNode = document.querySelector(".js-posts__item");

console.log(textInputNode);
console.log(postButtonNode);

postButtonNode.addEventListener("click", function () {
  const dataFromUser = getDataFromUser();
  setPost(dataFromUser);
  renderPost();
});

// получить данные из поля ввода
function getDataFromUser() {
  const post = textInputNode.value;
  return post;
}

// сохранить пост
function setPost(newPost) {
  post = newPost;
}

// отобразить пост
function renderPost() {
  postsNode.innerText = post;
}
