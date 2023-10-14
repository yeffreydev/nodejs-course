const socket = io();

socket.on("connect", function () {
  console.log("conectado exitosamente");
  console.log(socket.id);
});

let user = null;

const loginPage = document.querySelector(".login-page");
const chatPage = document.querySelector(".chat-page");

const username = document.getElementById("username");
const loginForm = document.getElementById("login-form");

const chatForm = document.getElementById("chat-form");
const messages = document.querySelector(".messages");
const inputMessage = document.getElementById("input-message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!username.value.trim()) {
    return alert("username no debe estar vacío.");
  }

  const newUser = {
    username: username.value,
  };

  user = newUser;
  loginPage.style.display = "none";
  chatPage.style.display = "flex";
});

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!inputMessage.value.trim()) {
    return alert("el mensaje no debe ser vacío");
  }
  let newMessage = {
    username: user.username,
    text: inputMessage.value,
  };
  inputMessage.value = "";
  socket.emit("message", newMessage);
});

socket.on("message", function (data) {
  if (!user) return;

  messages.innerHTML += `<div><span><b>${data.username}</b></span>  <span>${data.text}</span></div>`;
  console.log(data);
});
