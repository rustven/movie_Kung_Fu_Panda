const filmTitle = document.querySelector("#title");
const filmOscar = document.querySelector("#oscar");
const filmDirector = document.querySelector("#director");
const filmDescription = document.querySelector("#desecripior");
const filmPoster = document.querySelector("#poster");

async function getData() {
    const res = await fetch("https://rustven.github.io/Movie-api/data.json");
    const data = await res.json();
    const {title, hasOscar, year, director, poster, desecripior} = data
    console.log(data);
    filmTitle.textContent = `${title}, ${year} year`
    filmOscar.textContent = hasOscar? "This movie won Oscar" : "No awards"
    filmPoster.src = poster;
    filmDescription.textContent = desecripior;

}

getData();