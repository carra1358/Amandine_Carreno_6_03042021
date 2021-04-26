import "../styles/stylesheet.scss";
import "../styles/sass/responsive_photographer.scss";
import { config } from '@fortawesome/fontawesome-svg-core'
console.log(config.autoA11y) // true

//DOM
// conteneur template
const photographerProfil = document.getElementById("photographer-profil");
const galerieMedia = document.getElementById("galerie-media");
const photographerTag = document.getElementById("photographer-tag")
//Url params
const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const getIdParams = urlParams.get("id");

//importation du json
const getData = () => import("./data/data.json");

getData().then(data => {
   const photographer =  data.default.photographers.find(p => p.id == getIdParams);
   const media = data.default.media.filter( m => m.photographerId == photographer.id && m.image != undefined );
   if (photographer === undefined){
       window.location.href = "index.html"
   }
   renderProfilInfo(photographer);
   renderTag(photographer);
   renderMedia(photographer, media);
   
});


function renderProfilInfo(photographer) {
  photographerProfil.innerHTML = `
        <div id="profil-text">
        <h1 id="profil-header">${photographer.name}</h1>
        <p>
            <span class="ville">${photographer.city}, ${photographer.country}</span><br>
            <span class="quote">${photographer.tagline}</span><br>
            <span class="prix">${photographer.price}€/jour</span><br>
        </p>
       </div>
        <div class="profil-img"><img src="${"../images/PhotographersIDPhotos/"+ photographer.portrait}" alt=""> </div> 
         
        `
};

function renderTag(photographer){
    photographerTag.innerHTML = `
    <div class="card-tagwrapper">
    ${photographer.tags.map(tag =>`<a href="" class="tag"><span class="screen-reader">tag</span><i class="fas fa-hashtag" aria-hidden="true"></i>${tag}</a>`).join("")}
         </div>
    `
};

function renderMedia(photographer, media) {
galerieMedia.innerHTML += media.map( m => 
  
    `<figure class="media">
    <img src="../images/${photographer.name.split(" ")[0]}/${m.image}" alt=""> 
    <figcaption class="media-info">
        <span>${m.image.split(/[._]/).slice(1,-1).join(" ")}</span>
        <span>${m.price}€</span>
        <span>${m.likes}<i class="fas fa-heart"></i></span>
    </figcaption>
    </figure>`).join("")
                                     
};

