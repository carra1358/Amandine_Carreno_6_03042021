const logo = require("../images/Logo/logo.png");
import { config } from "@fortawesome/fontawesome-svg-core";
console.log(config.autoA11y); // true
import "../styles/stylesheet.scss";
import "../styles/sass/responsive.scss";

const getData = () => import("./data/data.json");
const template = document.getElementById("nos_photographes");
const navigation = document.querySelector(".navigation");
const tag = document.getElementsByClassName("tag");
const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const hasTagParams = urlParams.has("tagValue");
const getTagParams = urlParams.get("tagValue");

getData().then((data) => {
  let photographer = data.default.photographers;
  let tags = data.default.photographers
    .map((p) => p.tags)
    .reduce(function (a, b) {
      return [...a, ...b];
    });
  tags = new Set([...tags]);

  tags.forEach((x) => renderNav(x, photographer));

  WhichDataToload(photographer);

  FilterInMain(photographer);
});

function renderNav(x, photographer) {
  navigation.innerHTML += `<li><a href="#" class="tag" id="${x}"><span class="screen-reader">tag</span><i class="fas fa-hashtag" aria-hidden="true"></i>${x}</a></li>`;
  navigation.addEventListener("click", (event) => {
    const filterPhotographers = photographer.filter((t) =>
      t.tags.includes(event.target.id)
    );
    template.innerHTML = "";
    filterPhotographers.forEach((element) => renderPhotographerCard(element));
  });
}

function renderPhotographerCard(element) {
  template.innerHTML += `
<li aria-label="profil de ${element.name}" class="card">
<a href="photographes.html?id=${
    element.id
  }" aria-label="lien vers le profil de ${element.name}">
<div class="profil-img"><img src="${
    "../images/PhotographersIDPhotos/" + element.portrait
  }" alt=""> </div> 
<h2>${element.name}</h2>
</a>
<p aria-label="informations sur ce photographes">
    <span class="ville"><span class="screen-reader">ville</span> ${
      element.city
    }, ${element.country}</span><br>
    <span class="quote"><span class="screen-reader">citation</span> ${
      element.tagline
    }</span><br>
    <span class="tarif"><span class="screen-reader">prix</span>${
      element.price
    }€/jour</span><br>
</p>
<div class="card-tagwrapper" role="navigation" aria-label="navigation secondaire: tags du photographes">
   ${element.tags
     .map(
       (tag) =>
         `<span class="screen-reader">tag</span> <a href="#" class="tag ${tag}" ><i class="fas fa-hashtag" aria-hidden="true"></i>${tag}</a>`
     )
     .join("")}
</div>
</li>

`;
}

function FilterInMain(photographer) {
  template.addEventListener("click", (event) => {
    let filterPhotographers = photographer.filter((t) =>
      t.tags.includes(event.target.text)
    );
    if (filterPhotographers.length >= 1) {
      template.innerHTML = "";
      filterPhotographers.forEach((element) => renderPhotographerCard(element));
    }
  });
}

/* Gestion affichage des photographes taggés depuis photographes.html */

function filterByTagInPhotographer(photographer) {
  let tagParamsFilter = photographer.filter((p) =>
    p.tags.includes(getTagParams)
  );

  tagParamsFilter.forEach((element) => renderPhotographerCard(element));

  console.log(tagParamsFilter);
}

function WhichDataToload(photographer) {
  if (hasTagParams) {
    filterByTagInPhotographer(photographer);
  } else {
    photographer.map((element) => renderPhotographerCard(element));
  }
}
