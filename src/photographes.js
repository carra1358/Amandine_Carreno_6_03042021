import "../styles/photographer.scss";
import "../styles/sass/responsive_photographer.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
console.log(config.autoA11y); // true

//DOM
// conteneur template
const photographerProfil = document.getElementById("photographer-profil");
const galerieMedia = document.getElementById("galerie-media");
const photographerTag = document.getElementById("photographer-tag");
const modalPhotographerName = document.getElementById(
  "modal-photographer-name"
);
//Url params
const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const getIdParams = urlParams.get("id");
const getNameParams = urlParams.get("name");

//importation du json
const getData = () => import("./data/data.json");

getData().then((data) => {
  const photographer = data.default.photographers.find(
    (p) => p.id == getIdParams
  );
  const media = data.default.media
    .filter((m) => m.photographerId == photographer.id)
    .map((m) => factory(m))
    .join(" ");
  if (photographer === undefined) {
    window.location.href = "index.html";
  }

  renderProfilInfo(photographer);
  renderTag(photographer);
  console.log(media);
  galerieMedia.innerHTML = media;
  modalPhotographerName.innerHTML = `${photographer.name}`;

  // renderMedia(photographer, media);
});

function renderProfilInfo(photographer) {
  photographerProfil.innerHTML = `
        <div id="profil-text">
        <h1 id="profil-header">${photographer.name}</h1>
        <p>
            <span class="ville">${photographer.city}, ${
    photographer.country
  }</span><br>
            <span class="quote">${photographer.tagline}</span><br>
            <span class="prix">${photographer.price}€/jour</span><br>
        </p>
       </div>
        <div class="profil-img"><img id="profil-img-photographes" src="${
          "../images/PhotographersIDPhotos/" + photographer.portrait
        }" alt=""> </div> 
         
        `;
}

function renderTag(photographer) {
  photographerTag.innerHTML = `
    
    ${photographer.tags
      .map(
        (tag) =>
          `<a href="" class="tag"><span class="screen-reader">tag</span><i class="fas fa-hashtag" aria-hidden="true"></i>${tag}</a>`
      )
      .join("")}
         
    `;
}

class Media {
  constructor(id, photographerId, tags, likes, date, price, src, name) {
    this.id = id;
    this.photographerId = photographerId;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
    this.src = src;
    this.name = name;
  }
  createMediaContent() {}
}

class Video extends Media {
  createMediaContent() {
    return `<figure class="media">
    <video src="../images/${this.name}/${this.src}"></video>
    <figcaption class="media-info">
        <span>${this.src.split(/[._]/).slice(1, -1).join(" ")}</span>
        <span>${this.price}€</span>
        <span>${this.likes}<i class="fas fa-heart"></i></span>
    </figcaption>
    </figure>`;
  }
}

class Image extends Media {
  createMediaContent() {
    return `<figure class="media">
    <img src="../images/${this.name}/${this.src}" alt="">
    <figcaption class="media-info">
        <span>${this.src.split(/[._]/).slice(1, -1).join(" ")}</span>
        <span>${this.price}€</span>
        <span>${this.likes}<i class="fas fa-heart"></i></span>
    </figcaption>
    </figure>`;
  }
}

function factory(media) {
  if (media.hasOwnProperty("image")) {
    return new Image(
      media.id,
      media.photographerId,
      media.tags,
      media.likes,
      media.date,
      media.price,
      media.image,
      getNameParams
    ).createMediaContent();
  } else if (media.hasOwnProperty("video")) {
    return new Video(
      media.id,
      media.photographerId,
      media.tags,
      media.likes,
      media.date,
      media.price,
      media.video,
      getNameParams
    ).createMediaContent();
  }
}
