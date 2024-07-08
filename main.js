let header = document.querySelector("header");
let darkmood = document.querySelector('#darkmood');
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navnbar");
let txt=document.getElementById('txt')
let mail=document.getElementById('mail')
let telo=document.getElementById('telo')
let areatxt=document.getElementById('areatxt')
// scrollup
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
// menubtn
menuicon.onclick = () => {
  navbar.classList.add("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};
// darkmood
darkmood.onclick = function toggleDarkMode() {
  if (darkmood.classList.contains("bx-moon")) {
    darkmood.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add('active');
  } else {
    darkmood.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove('active');
  }
};
function sendmail()
{
  txt.value="";
  mail.value="";
  telo.value="";
  areatxt.value=""

}
