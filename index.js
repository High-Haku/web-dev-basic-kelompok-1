async function getDataDaerah(){
    const url = 'https://6201e508b8735d00174cb61f.mockapi.io/provinsi/daerah'


try{
    const response=await fetch(url);

    const result = await response.json();

    const namaDaerah = document.querySelector(".nama-daerah");

    for (let i = 0; i < 6; i++) {
        namaDaerah.innerHTML += `
            <div class="card m-3" style="width: 25rem;">
                <img src=${(result[i].img)} width="350px" height="250px" class="card-img-top">
                <div class="card-body d-grid">
                    <a href="/single-daerah-kategori.html" class="btn btn-secondary stretched-link">${result[i].name}</a>
                </div>
            </div>
        `;
} 
} catch (err) {
    console.log(err);
}
}
async function getBarangDetail(){
    const url = 'https://6201e508b8735d00174cb61f.mockapi.io/provinsi/barangdetail'


try{
    const response=await fetch(url);

    const result = await response.json();

    const namaDaerah = document.querySelector(".barang-detail");

    for (let i = 0; i < 4; i++) {
        namaDaerah.innerHTML += `
            <div class="card m-3" style="width: 19rem;">
                <img src=${(result[i].img)} width="300px" height="250px" class="card-img-top">
                <div class="card-body d-grid">
                    <a href="/single-merchandise.html" class="btn btn-secondary stretched-link">${result[i].name}</a>
                </div>
            </div>
        `;
} 
} catch (err) {
    console.log(err);
}
}
getBarangDetail();
getDataDaerah();



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