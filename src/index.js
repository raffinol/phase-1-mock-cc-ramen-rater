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

function createNewRamen() {
  let input = document.getElementById("new-ramen");
  input.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target["new-name"].value;
    let restaurant = e.target["new-restaurant"].value;
    let image = e.target["new-image"].value;
    let rating = e.target["new-rating"].value;
    let comment = e.target["new-comment"].value;
    let newRamen = { name, restaurant, image, rating, comment };
    showRamenImages(newRamen);
  });
}
createNewRamen();

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((ramens) => ramens.forEach((ramen) => showRamenImages(ramen)));
});
