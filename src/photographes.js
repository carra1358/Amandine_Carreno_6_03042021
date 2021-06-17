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
let photographerCount = document.getElementById("photographer-count");

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
const body = document.querySelector("body");
let currentIndex = 0;
let nextMedia = 0;
let previousMedia = 0;
let singleMedia;
const next = document.getElementById("next");
const prev = document.getElementById("prev");

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
    .map((m) =>
      factory({
        ...m,
        photographerName: photographer.name.split(" ")[0],
        photographerRates: photographer.price,
      })
    );
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
    createMediaAndInteractions(media);
    makeButtonSelectedVisible();
    textSelected.textContent = "Popularité";
  });

  buttonDate.addEventListener("click", () => {
    media.sort((a, b) => new Date(b.date) - new Date(a.date));
    createMediaAndInteractions(media);
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
    createMediaAndInteractions(media);
    makeButtonSelectedVisible();
    textSelected.textContent = "Titre";
  });

  renderProfilInfo(photographer);
  renderTag(photographer);
  buttonPopularity.click();
  modalPhotographerName.innerHTML = `${photographer.name}`;

  function createMediaAndInteractions(media, photographer) {
    // render Media in the galerie

    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(" ");

    // render photographer Likes and rate per day

    let sumOfLikes = media.map((m) => m.likes).reduce((a, b) => a + b, 0);
    const ratePerDay = media.map((m) => m.photographerRates)[0];
    photographerCount.innerHTML = `<p>${sumOfLikes}<i class="fas fa-heart"></i></p> <p>${ratePerDay}/jour</p>`;

    // add interaction with likes buttons

    const allLikes = galerieMedia.querySelectorAll(".likes");
    allLikes.forEach((el) =>
      el.addEventListener("click", (e) => {
        let likes = parseInt(el.dataset.id);
        let findM = media.find((m) => m.id == likes);
        el.firstChild.innerHTML = findM.addLikes();
        sumOfLikes = sumOfLikes + 1;
        photographerCount.firstChild.innerHTML = sumOfLikes++;
      })
    );

    // create lightbox

    const allMedia = galerieMedia.querySelectorAll(".preview");
    allMedia.forEach((el) => {
      el.addEventListener("click", (e) => {
        header.classList.replace("visible", "invisible");
        main.classList.replace("visible", "invisible");
        lightbox.classList.replace("invisible", "visible");
        body.classList.add("overflow");
        singleMedia = media.find((m) => m.id == e.target.id);
        lightboxMedia.innerHTML = singleMedia.renderLightboxMedia();
        currentIndex = media.findIndex((el) => el.id == e.target.id);
      });
    });

    // lightbox navigation

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
  }
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
  constructor(
    id,
    photographerId,
    tags,
    likes,
    date,
    price,
    src,
    photographerName,
    photographerRates
  ) {
    this.id = id;
    this.photographerId = photographerId;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
    this.src = src;
    this.photographerName = photographerName;
    this.photographerRates = photographerRates;
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
   <video id="${this.id}" class="preview" src="../images/${
      this.photographerName
    }/${this.src}" alt="${this.src
      .split(/[._]/)
      .slice(1, -1)
      .join(" ")}"></video>
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
            class="lightbox-img"
            id="${this.id}" src="../images/${this.photographerName}/${this.src}"
            alt="${this.src.split(/[._]/).slice(1, -1).join(" ")}">
         </video>
          <figcaption class="media-info">${this.src
            .split(/[._]/)
            .slice(1, -1)
            .join(" ")}
            </figcaption>
      </figure>
      `;
  }
}

class Image extends Media {
  createMediaContent() {
    return `<figure class="media">
   <img class="preview" id="${this.id}" src="../images/${
      this.photographerName
    }/${this.src}" alt="${this.src.split(/[._]/).slice(1, -1).join(" ")}">
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
            class="lightbox-img"
            id="${this.id}" src="../images/${this.photographerName}/${this.src}"
            alt="${this.src.split(/[._]/).slice(1, -1).join(" ")}"
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
      media.photographerName,
      media.photographerRates
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
      media.photographerName,
      media.photographerRates
    );
  }
}

closelightbox.addEventListener("click", () => {
  lightbox.classList.replace("visible", "invisible");
  header.classList.replace("invisible", "visible");
  main.classList.replace("invisible", "visible");
  body.classList.remove("overflow");
});

// DOM contact form
const modalContainer = document.getElementById("modal-container");
const openModal = document.getElementById("acces-modal");
const form = document.querySelector("form");
const closeModal = modalContainer.querySelector(".close");
const formName = document.getElementById("name");
const formLastName = document.getElementById("lastname");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");
const emailRegx = new RegExp("^[a-zA-Z0-9.-_-]+@[a-zA-Z0-9-_-]+[.]+[a-z]+$");
const errorName = document.getElementById("error-name");
const errorLastName = document.getElementById("error-lastname");
const errorEmail = document.getElementById("error-email");
const errorMessage = document.getElementById("error-message");
openModal.addEventListener("click", () => {
  modalContainer.classList.replace("invisible", "visible-flex");
  body.classList.add("overflow");
});

closeModal.addEventListener("click", () => {
  modalContainer.classList.replace("visible-flex", "invisible");
  body.classList.remove("overflow");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formValidation() == true) {
    modalContainer.classList.replace("visible-flex", "invisible");
    let formComplited = {
      prénom: formName.value,
      nom: formLastName.value,
      email: formEmail.value,
    };
    console.log(formComplited);
    form.reset();
  } else {
    fieldValidation();
  }
});

function formValidation() {
  if (
    isNameValid() &&
    isLastNameValid() &&
    isEmailValid() &&
    isMessageValid()
  ) {
    return true;
  }
}

function fieldValidation() {
  isNameValid();
  isLastNameValid();
  isEmailValid();
  isMessageValid();
}

function isNameValid() {
  if (formName.value.trim().length >= 2) {
    errorName.classList.replace("visible", "invisible");
    return true;
  } else {
    errorName.classList.replace("invisible", "visible");
  }
}

function isLastNameValid() {
  if (formLastName.value.trim().length >= 2) {
    errorLastName.classList.replace("visible", "invisible");
    return true;
  } else {
    errorLastName.classList.replace("invisible", "visible");
  }
}

function isEmailValid() {
  if (emailRegx.test(formEmail.value)) {
    errorEmail.classList.replace("visible", "invisible");
    return true;
  } else {
    errorEmail.classList.replace("invisible", "visible");
  }
}

function isMessageValid() {
  if (formMessage.value.trim().length > 0) {
    errorMessage.classList.replace("visible", "invisible");
    return true;
  } else {
    errorMessage.classList.replace("invisible", "visible");
  }
}
