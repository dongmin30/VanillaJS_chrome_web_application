const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TODOS = "todos"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요 ${username}님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logoutButtonClick() {
    if(confirm('정말 로그아웃 하시겠습니까?')){
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(TODOS);
        window.location.reload();
        alert("로그아웃 되었습니다.");
    } else {
        return false;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

logoutButton.addEventListener("click", logoutButtonClick);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}