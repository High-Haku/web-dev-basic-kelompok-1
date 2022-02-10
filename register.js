const elRegist = document.querySelector("#register");
elRegist.onclick = register;

function register(){
  const emailInput = document.querySelector("#email").value;
  const userNameInput = document.querySelector("#username").value;
  const passInput = document.querySelector("#password").value;

  let userData = {
    username: userNameInput,
    email: emailInput,
    password: passInput,
  };

  localStorage.setItem("user", JSON.stringify(userData));
  localStorage.setItem("isLogin",true);
  if("user"!=null){
    location="./profile-page.html";
    
  }
};
const showPasswordEl = document.querySelector("#showPassword")
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? password.type = "text" : password.type = "password"
  })