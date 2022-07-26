import { showLogo, populateMonthsDropdown } from "./app.mjs";

// background images
let bgImages = ["fall.jpg", "flowerPlant.jpeg", "leaf.jpeg", "forest.jpg", "lake.jpg"];

// get random image
function randomBG() {
  let random = Math.floor(Math.random() * bgImages.length);
  return bgImages[random];
}

// change background image on DOM load
document.addEventListener("DOMContentLoaded", changeBGImage);

// start showLogo function on DOM load
document.addEventListener("DOMContentLoaded", showLogo);

// populate dropdown with months on DOM load
document.addEventListener("DOMContentLoaded", populateMonthsDropdown);

// change background image
function changeBGImage() {
  let bgImage = randomBG();
  let pathToImage = "./docs/assets/img/" + bgImage;
  document.body.style.backgroundImage = `url(${pathToImage})`;
}

// get form
const form = document.querySelector(".panel__form");

// show success alert on button click
form.addEventListener("submit", (x) => {
  x.preventDefault();
  alert("Sign up successful!");
});
