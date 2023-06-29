let menubutton = document.querySelector(".fa-bars");
let mobilenav = document.querySelector(".navmobile");

let plusbutton1 = document.querySelector(".plus1");
let plusbutton2 = document.querySelector(".plus2");
let plusbutton3 = document.querySelector(".plus3");

let underlist1 = document.querySelector(".ul1");
let underlist2 = document.querySelector(".ul2");
let underlist3 = document.querySelector(".ul3");

menubutton.addEventListener("click", () => {
  mobilenav.classList.toggle("hide");
});

plusbutton1.addEventListener("click", () => {
  underlist1.classList.toggle("showlist");
});
plusbutton2.addEventListener("click", () => {
  underlist2.classList.toggle("showlist");
});
plusbutton3.addEventListener("click", () => {
  underlist3.classList.toggle("showlist");
});
