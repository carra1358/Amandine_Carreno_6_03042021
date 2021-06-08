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

// DOM bouton trie
const filtersMedia = document.getElementById("filters");
const buttonPopularity = document.getElementById("popularite");
const buttonDate = document.getElementById("date");
const buttonTittle = document.getElementById("titre");
const chevron = document.getElementById("chevron");
const buttonSelected = document.getElementById("selected_filter");
let textSelected = document.getElementById("selected_text");

//DOM lightbox
const header = document.querySelector("header");
const main = document.querySelector("main");
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightbox_media");
const closelightbox = document.querySelector(".close");
// test event listenner
const accesModal = document.getElementById("acces-modal");

//Url params
let querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const getIdParams = urlParams.get("id");
const getNameParams = urlParams.get("name");

//importation du json
const getData = () => import("./data/data.json");

getData().then((data) => {
  const photographer = data.default.photographers.find(
    (p) => p.id == getIdParams
  );
  let media = data.default.media
    .filter((m) => m.photographerId == photographer.id)
    .map((m) => factory(m));
  if (photographer === undefined) {
    window.location.href = "index.html";
  }

  buttonSelected.addEventListener("click", () => {
    buttonDate.classList.replace("invisible", "visible");
    buttonTittle.classList.replace("invisible", "visible");
    buttonPopularity.classList.replace("invisible", "visible");
    buttonSelected.classList.replace("visible", "invisible");
  });

  buttonPopularity.addEventListener("click", () => {
    media.sort((a, b) => a.likes - b.likes).reverse();
    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(" ");
    makeButtonSelectedVisible();
    textSelected.textContent = "Popularité";
  });

  buttonDate.addEventListener("click", () => {
    media.sort((a, b) => new Date(b.date) - new Date(a.date));
    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(" ");
    makeButtonSelectedVisible();
    textSelected.textContent = "Date";
  });
  buttonTittle.addEventListener("click", (e) => {
    media.sort((a, b) =>
      a.src
        .split("_")
        .splice(1)
        .join("")
        .localeCompare(b.src.split("_").splice(1).join(""), {
          sensitivity: "base",
        })
    );
    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(" ");
    makeButtonSelectedVisible();
    textSelected.textContent = "Titre";
  });

  renderProfilInfo(photographer);
  renderTag(photographer);
  buttonPopularity.click();
  const allLikes = galerieMedia.querySelectorAll(".likes");
  allLikes.forEach((el) =>
    el.addEventListener("click", (e) => {
      let likes = parseInt(el.dataset.id);
      let findM = media.find((m) => m.id == likes);
      el.firstChild.innerHTML = findM.addLikes();
    })
  );

  modalPhotographerName.innerHTML = `${photographer.name}`;

  const allMedia = galerieMedia.querySelectorAll(".preview");

  let currentIndex = 0;
  let nextMedia = 0;
  let previousMedia = 0;
  allMedia.forEach((el) => {
    el.addEventListener("click", (e) => {
      header.classList.replace("visible", "invisible");
      main.classList.replace("visible", "invisible");
      lightbox.classList.replace("invisible", ".visible");
      let singleMedia = media.find((m) => m.id == e.target.id);
      lightboxMedia.innerHTML = singleMedia.renderLightboxMedia();
      currentIndex = media.findIndex((el) => el.id == e.target.id);
      console.log(currentIndex);
    });
  });
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  next.addEventListener("click", () => {
    if (currentIndex == media.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    nextMedia = media[currentIndex];
    lightboxMedia.innerHTML = nextMedia.renderLightboxMedia();
  });
  prev.addEventListener("click", () => {
    if (currentIndex == 0) {
      currentIndex = media.length - 1;
    } else {
      currentIndex--;
    }
    previousMedia = media[currentIndex];
    lightboxMedia.innerHTML = previousMedia.renderLightboxMedia();
  });
});

function makeButtonSelectedVisible() {
  buttonDate.classList.replace("visible", "invisible");
  buttonTittle.classList.replace("visible", "invisible");
  buttonPopularity.classList.replace("visible", "invisible");
  buttonSelected.classList.replace("invisible", "visible");
}

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
          `<a href="index.html?tagValue=${tag}#tag" class="tag"><span class="screen-reader">tag</span><i class="fas fa-hashtag" aria-hidden="true"></i>${tag}</a>`
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
  addLikes() {
    this.likes++;
    return this.likes;
  }
  renderLightboxMedia() {}
}

class Video extends Media {
  createMediaContent() {
    return `<figure class="media">
   <video id="${this.id}" class="preview" src="../images/${this.name}/${
      this.src
    }"></video>
    <figcaption class="media-info">
        <span>${this.src.split(/[._]/).slice(1, -1).join(" ")}</span>
        <span>${this.price}€</span>
          <span class="likes" data-id="${this.id}"><span>${
      this.likes
    }</span><i class="fas fa-heart"></i></span>
    </figcaption>
    </figure>`;
  }

  renderLightboxMedia() {
    return `<figure>
          <video
            class="testimg"
            id="${this.id}" src="../images/${this.name}/${this.src}"
            alt="">
         </video>
          <figcaption class="media-info">${this.src
            .split(/[._]/)
            .slice(1, -1)
            .join(" ")}
            </figcaption>
      </figure>
        <div id="prev">
          <i class="fas fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div id="next">
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </div>`;
  }
}

class Image extends Media {
  createMediaContent() {
    return `<figure class="media">
   <img class="preview" id="${this.id}" src="../images/${this.name}/${
      this.src
    }" alt="">
    <figcaption class="media-info">
        <span>${this.src.split(/[._]/).slice(1, -1).join(" ")}</span>
        <span>${this.price}€</span>
        <span class="likes" data-id="${this.id}"><span>${
      this.likes
    }</span><i class="fas fa-heart"></i></span>
    </figcaption>
    </figure>`;
  }

  renderLightboxMedia() {
    return `<figure>
          <img
            class="testimg"
            id="${this.id}" src="../images/${this.name}/${this.src}"
            alt=""
          />
          <figcaption class="media-info">${this.src
            .split(/[._]/)
            .slice(1, -1)
            .join(" ")}
            </figcaption>
      </figure>
     `;
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
    );
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
    );
  }
}

closelightbox.addEventListener("click", () => {
  lightbox.classList.replace(".visible", "invisible");
  header.classList.replace("invisible", "visible");
  main.classList.replace("invisible", "visible");
});

/* function pour navigation entre media 

 img/vid.addEventListener("click", (e) => {
  // trouve Media cliquer

    let findM = media.find((m) => m.id == e.target.id);

   // trouve son index
    let i = media.indexOf(findM);
    console.log(i);
    console.log(findM);
    // va au prochain media 

    console.log(media[i + 1]);
  });

  // ajouter le contenu a charger

*/
