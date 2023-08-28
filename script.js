"use strict";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const form = document.getElementById("form");

const main = document.getElementById("main");

const search = document.querySelector(".search");

const overview = document.querySelectorAll(".overview");

const movies = document.querySelectorAll(".movie");

console.log(main.childNodes);

// get API
const getApi = async function (url) {
  const res = await fetch(url);
  const data = await res.json();

  const markup = `<div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[0].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[0].title}</h3>
    <span class="orange">${data.results[0].vote_average}</span>
  </div>
  <div class="overview">
  <div class="biggerFront">Overview</div>
    ${data.results[0].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[1].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[1].title}</h3>
    <span class="orange">${data.results[1].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[1].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[2].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[2].title}</h3>
    <span class="orange">${data.results[2].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[2].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[3].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[3].title}</h3>
    <span class="orange">${data.results[3].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[3].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[4].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[4].title}</h3>
    <span class="orange">${data.results[4].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[4].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[5].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[5].title}</h3>
    <span class="orange">${data.results[5].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[5].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[6].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[6].title}</h3>
    <span class="orange">${data.results[6].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[6].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[7].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[7].title}</h3>
    <span class="orange">${data.results[7].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[7].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[8].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[8].title}</h3>
    <span class="orange">${data.results[8].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[8].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[9].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[9].title}</h3>
    <span class="orange">${data.results[9].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[9].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[10].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[10].title}</h3>
    <span class="orange">${data.results[10].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[10].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[11].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[11].title}</h3>
    <span class="orange">${data.results[11].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[11].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[12].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[12].title}</h3>
    <span class="orange">${data.results[12].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[12].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[13].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[13].title}</h3>
    <span class="orange">${data.results[13].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[13].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[14].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[14].title}</h3>
    <span class="orange">${data.results[14].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[14].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[15].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[15].title}</h3>
    <span class="orange">${data.results[15].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[15].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[16].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[16].title}</h3>
    <span class="orange">${data.results[16].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[16].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[17].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[17].title}</h3>
    <span class="orange">${data.results[17].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[17].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[18].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[18].title}</h3>
    <span class="orange">${data.results[18].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[18].overview}
  </div>
  </div>
  <div class="movie">
  <img
    class="img"
    src="${IMG_PATH + data.results[19].poster_path}"
    alt="movie poster"
  />
  <div class="header_flex">
    <h3 class="header">${data.results[19].title}</h3>
    <span class="orange">${data.results[19].vote_average}</span>
  </div>
  <div class="overview">
    <div class="biggerFront">Overview</div>
    ${data.results[19].overview}
  </div>
  </div>
  `;

  main.insertAdjacentHTML("afterbegin", markup);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getApi(SEARCH_API + searchTerm);
  } else {
    Window.reload();
  }
});

getApi(API_URL);
