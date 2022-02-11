async function getDaerah() {
  const URL = "https://6201e508b8735d00174cb61f.mockapi.io/provinsi/daerah";

  try {
    const response = await fetch(URL);
    const result = await response.json();

    const daerah = document.querySelector(".daerah");

    for (let i = 2; i <= 2; i++) {
      daerah.innerHTML += `
      <img src=${result[i].img} class="card-img">
      <div class="card-img-overlay d-flex justify-content-center align-items-end">
      <h1 class="card-title text-center">${result[i].name}</h1>
      </div>
      </div>
      `;
    }
  } catch (err) {
    console.log(err);
  }
}

function handleClick(data) {
  console.log(data);
}


async function getKategoriDaerah() {
    const URL = "https://6201e508b8735d00174cb61f.mockapi.io/provinsi/kategoridaerah";
  
    try {
      const response = await fetch(URL);
      const result = await response.json();
  
      const kategoriDaerah = document.querySelector(".kategori-daerah");
  
      for (let i = 0; i < 5; i++) {
        kategoriDaerah.innerHTML += `
        <div class="col">
        <div class="card">
        <image src=${result[i].img} width=200 height=300 />
        <div class="card-body">
        <h5 class="card-title">${result[i].name}</h5>
        <br>
        <a href="/merchandise.html" class="btn btn-primary">Lihat</a>
        </div>
        </div>
        </div>
        `;
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  function handleClick(data) {
    console.log(data);
  }
  
  getDaerah();
  getKategoriDaerah();

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