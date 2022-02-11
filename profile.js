const usernameData = document.querySelector("#username");
const emailData = document.querySelector("#email");
const passwordData = document.querySelector("#password");

const dataLocalStorage = JSON.parse(localStorage.getItem("user"));

usernameData.innerHTML=dataLocalStorage.username;
emailData.innerHTML=dataLocalStorage.email;
passwordData.innerHTML=dataLocalStorage.password;

const btnLogout1 = document.querySelector("#btn-logout");

btnLogout1.onclick = function(){
    localStorage.setItem("isLogin",false);

    if("isLogin"!=true){
        location = "./login-page.html";
    }
}
