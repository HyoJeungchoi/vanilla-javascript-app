const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const userh1 = document.querySelector("#user-name");

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem("user",userName);
    loginForm.classList.add("hidden");
    userh1.innerText = `Hello ${userName}`;
    userh1.classList.remove("hidden");
};

const savedUser = localStorage.getItem("user");

if (savedUser === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    userh1.classList.remove("hidden");
    userh1.innerText = `Hello ${savedUser}`;
}