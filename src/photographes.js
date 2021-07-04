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
const filterMedia = document.getElementById("filter-media");
const buttonPopularity = document.getElementById("popularite");
const buttonDate = document.getElementById("date");
const buttonTittle = document.getElementById("titre");
const buttonSelected = document.getElementById("selected_filter");
let textSelected = document.getElementById("selected_text");

//DOM lightbox
const header = document.querySelector("header");
const main = document.querySelector("main");
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightbox_media");
const closelightbox = lightbox.querySelector(".close");
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
    buttonSelected.setAttribute("aria-expanded", "true");
    buttonPopularity.focus();
  });

  function makeButtonSelectedVisible() {
    buttonDate.classList.replace("visible", "invisible");
    buttonTittle.classList.replace("visible", "invisible");
    buttonPopularity.classList.replace("visible", "invisible");
    buttonSelected.classList.replace("invisible", "visible");
    buttonSelected.setAttribute("aria-expanded", "false");
  }

  buttonPopularity.addEventListener("click", () => {
    media.sort((a, b) => a.likes - b.likes).reverse();
    createMediaAndInteractions(media);
    makeButtonSelectedVisible();
    textSelected.textContent = "Popularité";
    buttonPopularity.setAttribute("aria-selected", "true");
    buttonDate.setAttribute("aria-selected", "false");
    buttonTittle.setAttribute("aria-selected", "false");
  });

  buttonDate.addEventListener("click", () => {
    media.sort((a, b) => new Date(b.date) - new Date(a.date));
    createMediaAndInteractions(media);
    makeButtonSelectedVisible();
    textSelected.textContent = "Date";
    buttonDate.setAttribute("aria-selected", "true");
    buttonPopularity.setAttribute("aria-selected", "false");
    buttonTittle.setAttribute("aria-selected", "false");
    buttonSelected.focus();
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
    buttonTittle.setAttribute("aria-selected", "true");
    buttonPopularity.setAttribute("aria-selected", "false");
    buttonDate.setAttribute("aria-selected", "false");
    buttonSelected.focus();
  });

  renderProfilInfo(photographer);
  renderTag(photographer);
  buttonPopularity.click();
  modalPhotographerName.innerHTML = `${photographer.name}`;

  function createMediaAndInteractions(media) {
    // render Media in the galerie

    galerieMedia.innerHTML = media.map((m) => m.createMediaContent()).join(" ");

    // render photographer Likes and rate per day

    let sumOfLikes = media.map((m) => m.likes).reduce((a, b) => a + b, 0);
    const ratePerDay = media.map((m) => m.photographerRates)[0];
    photographerCount.innerHTML = `<p aria-label="total des j'aime"><span id="new-sum-of-likes">${sumOfLikes}</span><i class="fas fa-heart" aria-hidden="true"></i></p><p aria-label="tarif">${ratePerDay}/jour</p>`;
    let newSumOfLikes = document.getElementById("new-sum-of-likes");
    // add interaction with likes buttons

    const allLikes = galerieMedia.querySelectorAll(".likes");
    allLikes.forEach((el) =>
      el.addEventListener("click", (e) => {
        let likes = parseInt(el.dataset.id);
        let findM = media.find((m) => m.id == likes);
        el.firstChild.innerHTML = findM.addLikes();
        sumOfLikes = sumOfLikes + 1;
        newSumOfLikes.innerHTML = sumOfLikes++;
      })
    );

    // create lightbox

    const allMedia = galerieMedia.querySelectorAll(".preview");

    allMedia.forEach((el) => {
      el.addEventListener("click", (e) => {
        header.classList.replace("visible", "invisible");
        header.setAttribute("aria-hidden", "true");
        main.setAttribute("aria-hidden", "true");
        main.classList.replace("visible", "invisible");
        lightbox.classList.replace("invisible", "visible");
        body.classList.add("overflow");
        let findSingleMedia = parseInt(el.dataset.id);
        singleMedia = media.find((m) => m.id == findSingleMedia);
        //singleMedia = media.find((m) => m.id == e.target.id);
        lightboxMedia.innerHTML = singleMedia.renderLightboxMedia();
        currentIndex = media.findIndex((el) => el.id == findSingleMedia);
      });
    });

    // lightbox navigation

    document.onkeydown = navigationKey;

    function navigationKey(e) {
      e = e || window.event;

      if (e.keyCode == "37" && lightbox.classList.contains("visible")) {
        // left arrow
        currentIndex--;
        previousMedia = media[currentIndex];
        lightboxMedia.innerHTML = previousMedia.renderLightboxMedia();
      } else if (e.keyCode == "39" && lightbox.classList.contains("visible")) {
        // right arrow
        currentIndex++;
        nextMedia = media[currentIndex];
        lightboxMedia.innerHTML = nextMedia.renderLightboxMedia();
      }
    }

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

closelightbox.addEventListener("click", () => {
  lightbox.classList.replace("visible", "invisible");
  header.classList.replace("invisible", "visible");
  main.classList.replace("invisible", "visible");
  body.classList.remove("overflow");
  header.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "false");
});

function renderProfilInfo(photographer) {
  photographerProfil.innerHTML = `
        <div id="profil-text" >
        <h1 id="profil-header"> ${photographer.name}</h1>
        <p>
            <span class="ville"><span class="screen-reader">ville</span>${
              photographer.city
            }, ${photographer.country}</span><br>
            <span class="quote"><span class="screen-reader">citation</span>${
              photographer.tagline
            }</span><br>
            <span class="prix"><span class="screen-reader">prix</span>${
              photographer.price
            }€/jour</span><br>
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
    return `<li class="media" aria-label="video,${this.src
      .split(/[._]/)
      .slice(1, -1)
      .join(" ")}" > 
      <a class="preview" href="#" data-id="${
        this.id
      }"  aria-label="agrandir la video">
   <video ><source src="../images/${this.photographerName}/${
      this.src
    }" type="video/mp4"></video>  </a>
    <p class="media-info" aria-label="informations">
        <span><span class="screen-reader">titre</span>${this.src
          .split(/[._]/)
          .slice(1, -1)
          .join(" ")}</span>
        <span>${this.price}€</span>
          <span class="likes" data-id="${this.id}" aria-label="j'aime"><span>${
      this.likes
    }</span><i class="fas fa-heart" role="button"aria-label="ajoutez un j'aime"></i></span>
    </p>
    </li>`;
  }

  renderLightboxMedia() {
    return `<figure>
         
          <video  aria-label="vidéo,${this.src
            .split(/[._]/)
            .slice(1, -1)
            .join(" ")}" controls width="250"
            class="lightbox-img"
            data-id="${this.id}">
            <source src="../images/${this.photographerName}/${
      this.src
    }" type="video/mp4">
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
    return `<li class="media" aria-label="image,${this.src
      .split(/[._]/)
      .slice(1, -1)
      .join(" ")}">
   <img class="preview" role="link" aria-label="agrandir l'image" data-id="${
     this.id
   }" src="../images/${this.photographerName}/${this.src}" alt="${this.src
      .split(/[._]/)
      .slice(1, -1)
      .join(" ")}">
    <p class="media-info" aria-label="informations">
        <span>${this.src.split(/[._]/).slice(1, -1).join(" ")}</span>
        <span>${this.price}€</span>
        <span class="likes" data-id="${this.id}" aria-label="j'aime"><span>${
      this.likes
    }</span><i class="fas fa-heart" role="button" aria-label="ajoutez un j'aime"></i></span>
    </p>
    </li>`;
  }

  renderLightboxMedia() {
    return `<figure>
          <img
            class="lightbox-img"
            data-id="${this.id}" src="../images/${this.photographerName}/${
      this.src
    }"
            alt="image,${this.src.split(/[._]/).slice(1, -1).join(" ")}"
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

// DOM contact form
const mainTop = document.getElementById("main_top");
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
  header.setAttribute("aria-hidden", "true");
  mainTop.setAttribute("aria-hidden", "true");
  filterMedia.setAttribute("aria-hidden", "true");
  galerieMedia.setAttribute("aria-hidden", "true");
  openModal.classList.add("invisible");
  openModal.setAttribute("aria-expanded", "true");
  modalContainer.classList.replace("invisible", "visible-flex");
  body.classList.add("overflow");
  main.classList.remove("main");
  formName.focus();
});

closeModal.addEventListener("click", () => {
  modalContainer.classList.replace("visible-flex", "invisible");
  body.classList.remove("overflow");
  main.classList.add("main");
  openModal.setAttribute("aria-expanded", "false");
  header.setAttribute("aria-hidden", "false");
  mainTop.setAttribute("aria-hidden", "false");
  filterMedia.setAttribute("aria-hidden", "false");
  galerieMedia.setAttribute("aria-hidden", "false");
  openModal.classList.remove("invisible");
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
    openModal.setAttribute("aria-expanded", "false");
    header.setAttribute("aria-hidden", "false");
    mainTop.setAttribute("aria-hidden", "false");
    filterMedia.setAttribute("aria-hidden", "false");
    galerieMedia.setAttribute("aria-hidden", "false");
    openModal.classList.remove("invisible");
    body.classList.remove("overflow");
    main.classList.add("main");
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
  } else {
    return false;
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
    formName.setAttribute("aria-invalid", "false");
    formName.setAttribute("aria-describedby", "error-name");
    return true;
  } else {
    formName.setAttribute("aria-invalid", "true");
    errorName.classList.replace("invisible", "visible");
  }
}

function isLastNameValid() {
  if (formLastName.value.trim().length >= 2) {
    errorLastName.classList.replace("visible", "invisible");
    formLastName.setAttribute("aria-invalid", "false");
    formLastName.setAttribute("aria-describedby", "error-lastname");
    return true;
  } else {
    formLastName.setAttribute("aria-invalid", "true");
    errorLastName.classList.replace("invisible", "visible");
  }
}

function isEmailValid() {
  if (emailRegx.test(formEmail.value)) {
    errorEmail.classList.replace("visible", "invisible");
    formEmail.setAttribute("aria-invalid", "false");
    formEmail.setAttribute("aria-describedby", "error-email");
    return true;
  } else {
    formEmail.setAttribute("aria-invalid", "true");
    errorEmail.classList.replace("invisible", "visible");
  }
}

function isMessageValid() {
  if (formMessage.value.trim().length > 0) {
    errorMessage.classList.replace("visible", "invisible");
    formMessage.setAttribute("aria-invalid", "false");
    formMessage.setAttribute("aria-describedby", "error-message");
    return true;
  } else {
    formMessage.setAttribute("aria-invalid", "true");
    errorMessage.classList.replace("invisible", "visible");
  }
}
