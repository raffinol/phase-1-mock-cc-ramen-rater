// write your code here
function showRamenImages(ramen) {
  let img = document.createElement("img");
  img.src = ramen.image;
  document.getElementById("ramen-menu").appendChild(img);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((ramens) => ramens.forEach((ramen) => showRamenImages(ramen)));
});
