function solve() {
  let onScreenBtn = document.getElementById("onScreenBtn");
  onScreenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let movieName = document.getElementById("inputName");
    let movieHall = document.getElementById("inputHall");
    let moviePrice = document.getElementById("inputPrice");
    let moviesUl = document.getElementById("moviesUl");

    let movieInfo = `${movieName.value} | Hall number: ${movieHall.value} | Ticket price: ${moviePrice.value}$`;
    let newMovie = document.createElement("li");
    newMovie.textContent = movieInfo;
    moviesUl.appendChild(newMovie);
  });
}
