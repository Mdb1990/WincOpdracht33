/** @format */

const btn1 = document.querySelector(".btn-alert");

const alertB = () => {
  alert("button clicked");
};

btn1.addEventListener("click", alertB);

const btn2 = document.querySelector(".btn-alert2");
const bodyColor = document.querySelector(".blue-background");

const bgColor = () => {
  bodyColor.classList.toggle("red-background");
};

btn2.addEventListener("click", bgColor);
