const elLogin = document.querySelector("#login");
elLogin.onclick = login;

function login() {
  const emailInput = document.querySelector("#email").value;
  const passwordInput = document.querySelector("#password").value;

  const dataLocalStorage = JSON.parse(localStorage.getItem("user"));

  if (emailInput === dataLocalStorage.email && passwordInput === dataLocalStorage.password){
    location="./index.html";
    localStorage.setItem("isLogin",true);
  } else {
    alert("email atau password anda salah");
  }
  return false;
};

const showPasswordEl = document.querySelector("#showPassword")
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? password.type = "text" : password.type = "password"
  })