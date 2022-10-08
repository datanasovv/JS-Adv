function solve() {
  let onScreenBtn = document.getElementById("onScreenBtn");
  onScreenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let movieName = document.getElementById("inputName");
    let movieHall = document.getElementById("inputHall");
    let moviePrice = document.getElementById("inputPrice");
    let moviesUl = document.getElementById("moviesUl");
    if (movieName.value && movieHall.value && moviePrice.value) {
      let movieInfo = `${movieName.value} | Hall number: ${movieHall.value} | Ticket price: ${moviePrice.value}$`;
      let newMovie = document.createElement("li");
      newMovie.textContent = movieInfo;
      let deleteLink = document.createElement("a");
      deleteLink.href = "#";
      deleteLink.textContent = "[Delete]";
      newMovie.appendChild(deleteLink);
      moviesUl.appendChild(newMovie);

      movieName.value = "";
      movieHall.value = "";
      moviePrice.value = "";
      deleteLink.addEventListener("click", (e) => {
        e.preventDefault();
        let deletedMovie = e.currentTarget.parentNode;
        moviesUl.removeChild(deletedMovie);
      });
    }
  });
}
