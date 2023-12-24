const posts = [];
const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 20;

const titleInputNode = document.querySelector(".js-post-input__title");
const textInputNode = document.querySelector(".js-post-input__text");
const postButtonNode = document.querySelector(".js-post-input__button");
const postsNode = document.querySelector(".js-posts__item");
const validationMessage = document.getElementById("validationMessage");

postButtonNode.addEventListener("click", function () {
  // получить данные из поля ввода
  const dataFromUser = getDataFromUser();
  // сохранить пост
  addPost(dataFromUser);
  // отобразить пост
  renderPosts();
});

titleInputNode.addEventListener("input", validation);

textInputNode.addEventListener("input", validation);

function getDataFromUser() {
  const title = titleInputNode.value;
  const text = textInputNode.value;
  return { title, text };
}

function addPost({ title, text }) {
  const postDate = `${new Date().toLocaleString()}`;

  posts.push({ postDate, title, text });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();

  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
    <div class='item'>
        <p class="item__date">${post.postDate}</p>
        <h3 class="item__title">${post.title}</h3>
        <p class="item__text">${post.text}</p>
    </div>`;
  });

  postsNode.innerHTML = postsHTML;
}

function validation() {
  const titleLength = titleInputNode.value.length;
  const textLength = textInputNode.value.length;

  if (titleLength > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `*Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validationMessage_hidden");
    return;
  }

  if (textLength > TEXT_VALIDATION_LIMIT) {
    validationMessage.innerText = `*Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validationMessage_hidden");
    return;
  }

  validationMessage.classList.add("validationMessage_hidden");
}
