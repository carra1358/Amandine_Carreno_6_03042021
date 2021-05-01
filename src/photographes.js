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

function renderTag(photographer) {
    photographerTag.innerHTML = `
    <div class="card-tagwrapper">
    ${photographer.tags.map(tag =>`<a href="" class="tag"><span class="screen-reader">tag</span><i class="fas fa-hashtag" aria-hidden="true"></i>${tag}</a>`).join("")}
         </div>
    `
};

function renderMedia(photographer, media) {
    
galerieMedia.innerHTML += media.map( m => 
  
    `<figure class="media">
    <figcaption class="media-info">
        <span>${m.image.split(/[._]/).slice(1,-1).join(" ")}</span>
        <span>${m.price}€</span>
        <span>${m.likes}<i class="fas fa-heart"></i></span>
    </figcaption>
    </figure>`).join("")                      
};

  class Media {
        constructor(id,photographerId,tags,likes,date,price){
         id;
         photographerId;
         tags;
         likes;
         date;
         price;
         
           }
      createMedia () {
       console.log("cest un media")}
    }
 
  
class Video extends Media {
    constructor(id,photographerId,tags,likes,date,price,video){
       super(id,photographerId,tags,likes,date,price)
       this.video = video
    }
    createMedia(){
        console.log("ce media est une video")
        //galerieMedia.appendChild(document.createElement("video")).innerHTML =`
       // src="../images/${photographer.name.split(" ")[0]}/${m.video}" alt="" `
    }
    
}

class Image extends Media {
    constructor(id,photographerId,tags,likes,date,price,image){
    super(id,photographerId,tags,likes,date,price)
       this.image = image
       
    }

    createMedia(){
        return galerieMedia.innerHTML += `<p>CEST UNE IMAGE ${this.id}</p>`
    }

}
 getData().then( data => { 
     
     const media = data.default.media;
     let image = new Image();
         image = media.from(Image);
     console.log(image);
     let video = new Video();
     
      media.map(m =>  {
      
         function factory (m){

        function Isimage(){
             if(m.hasOwnProperty("image")){
            return image.createMedia()}
        }
        function IsVideo(){
            if (m.hasOwnProperty("video")){
        return video.createMedia()
    }
        }
       Isimage();
       IsVideo();
        
    
    };
    console.log(factory(m));
     });
  
    });

    console.log( new Media());
    


let image1 = new Image(12,13,"mimi",12,"29 janvier", "30$", "photo.jpg");
let video2 = new Video(13,16,"jojo",17,"20 janvier", "60$", "phoo.mp4");












