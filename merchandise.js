// VERIFY LOGIN
const loginVerify = JSON.parse(localStorage.getItem('isLogin'));
console.log(loginVerify);
const profileButton = document.querySelector("#profileButton");
const loginButton = document.querySelector("#loginButton");


if(loginVerify===true){
profileButton.classList.remove("d-none")
loginButton.classList.add("d-none")
};

// LogOut
const btnLogout = document.querySelector("#btn-Logout");

btnLogout.onclick = function(){
    localStorage.setItem("isLogin",false);

    if("isLogin"!=true){
        location = "./login-page.html";
    }
}