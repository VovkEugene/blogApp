let post = {
  title: "",
  text: "",
};

const titleInputNode = document.querySelector(".js-post-input__title");
const textInputNode = document.querySelector(".js-post-input__text");
const postButtonNode = document.querySelector(".js-post-input__button");
const postsNode = document.querySelector(".js-posts__item");

console.log(titleInputNode);
console.log(postButtonNode);

postButtonNode.addEventListener("click", function () {
  // получить данные из поля ввода
  const dataFromUser = getDataFromUser();
  // сохранить пост
  setPost(dataFromUser);
  // отобразить пост
  renderPost();
});

function getDataFromUser() {
  const title = titleInputNode.value;
  const text = textInputNode.value;
  return { title, text };
}

function setPost(newPost) {
  post = newPost;
}

function getPost() {
  return post;
}

function renderPost() {
  const post = getPost();

  const postHTML = `
        <h3 class="item__title">${post.title}</h3>
        <p class="item__text">${post.text}</p>`;

  postsNode.innerHTML = postHTML;
}
