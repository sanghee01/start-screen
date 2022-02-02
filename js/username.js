const loginInput = document.querySelector("#username input");
const loginForm = document.getElementById("username");
const sayHello = document.getElementById("helloUser");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername();
}

function paintUsername() {
  const username = localStorage.getItem(USERNAME_KEY);

  sayHello.innerText = `Hello ${username}`;
  sayHello.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintUsername();
}
