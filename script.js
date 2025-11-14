const SECRET = "putibungasahabatsejati";
const btn = document.getElementById("btn");
const input = document.getElementById("code");
const msg = document.getElementById("msg");
const passwordBox = document.getElementById("passwordBox");
const beranda = document.getElementById("beranda");

// cek password
btn.addEventListener("click", tryCode);
input.addEventListener("keydown", (e) => {
  if(e.key === "Enter") tryCode();
});

function tryCode() {
  const val = input.value.trim();
  if(!val) { msg.textContent = "Masukkan kode dulu!"; return; }

  if(val === SECRET){
    sessionStorage.setItem("akses", "true");
    showBeranda();
  } else {
    msg.textContent = "Kode salah!";
  }
}

// tampilkan beranda jika password benar
function showBeranda(){
  passwordBox.style.display = "none";
  beranda.style.display = "block";
}

// mencegah akses langsung ke beranda tanpa password
if(!sessionStorage.getItem("akses")){
  passwordBox.style.display = "block";
  beranda.style.display = "none";
} else {
  showBeranda();
}

