const fa_sun = document.querySelector(".fa-sun");
const fa_moon = document.querySelector(".fa-moon");
const root = document.querySelector("#root");
const closeVideo = document.querySelector("#close_video");
const video_current = document.getElementsByTagName("iframe");

fa_sun.onclick = function () {
  root.classList.add("light");
  const rootLight = document.querySelector("#root.light");
  if (rootLight) {
    const formInline = document.querySelector(".form-inline");
    fa_sun.style.display = "none";
    fa_moon.style.display = "block";
  }
};
fa_moon.onclick = function () {
  root.classList.remove("light");
  fa_sun.style.display = "block";
  fa_moon.style.display = "none";
};

$(".counter").countUp({
  time: 4000,
  delay: 10,
});

closeVideo.onclick = function () {
  // video_current.pause()
  console.log(234235);
};

const closeVideo_end = document.querySelector("#end .close__btn i");
var id_end = document.getElementById("end");
closeVideo_end.onclick = function () {
  id_end.style.display = "none";
};

const chieudaibody = document.body.offsetHeight;
window.onscroll = function () {
  window.scrollY >= chieudaibody - window.innerHeight
    ? id_end.classList.remove("p-fixed")
    : id_end.classList.add("p-fixed");

  if (window.scrollY == chieudaibody - window.innerHeight) {
    id_end.scrollIntoView(true);
  }
};
