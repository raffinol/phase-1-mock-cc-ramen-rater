function showRamenImages(ramen) {
  let img = document.createElement("img");
  img.src = ramen.image;
  document.getElementById("ramen-menu").appendChild(img);
  img.addEventListener("click", () => {
    showRamenInfo(ramen);
  });
}

function showRamenInfo(ramen) {
  detailImage = document.querySelector("img.detail-image");
  detailName = document.querySelector("h2.name");
  detailRestaurant = document.querySelector("h3.restaurant");
  detailRating = document.querySelector("span#rating-display");
  detailComment = document.querySelector("p#comment-display");

  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = ramen.rating;
  detailComment.textContent = ramen.comment;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((ramens) => ramens.forEach((ramen) => showRamenImages(ramen)));
});
