// background images
let bgImages = ["fall.jpeg", "flowerPlant.jpeg", "leaf.jpeg"];

// get random image
function randomBG() {
  let random = Math.floor(Math.random() * bgImages.length);
  return bgImages[random];
}

// change background image on DOM load
document.addEventListener("DOMContentLoaded", changeBGImage)

// change background image
function changeBGImage() {
  let bgImage = randomBG();
  let pathToImage = "/assets/img/"+bgImage;
  document.body.style.backgroundImage = `${pathToImage}`;
  console.log(pathToImage);
}
