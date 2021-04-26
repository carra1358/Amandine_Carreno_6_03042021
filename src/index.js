import { config } from '@fortawesome/fontawesome-svg-core'
console.log(config.autoA11y) // true
import "../styles/stylesheet.scss";
import "../styles/sass/responsive.scss";
const logo = require("../images/logo.png");

const getData = () => import("./data/data.json");
const template = document.getElementById("nos_photographes");


getData().then(data => {data.default.photographers.map(element => { 

return  template.innerHTML +=`
<li class="card">
<a href="photographes.html?id=${element.id}">
<div class="profil-img"><img src="${"../images/PhotographersIDPhotos/"+ element.portrait}" alt=""> </div> 
<h2>${element.name}</h2>
</a>
<p>
    <span class="ville">${element.city}, ${element.country}</span><br>
    <span class="quote">${element.tagline}</span><br>
    <span class="prix">${element.price}€/jour</span><br>
</p>
<div class="card-tagwrapper">
   ${element.tags.map(tag =>`<a href="" class="tag"><span class="screen-reader">tag</span><i class="fas fa-hashtag" aria-hidden="true"></i>${tag}</a>`).join("")}
</div>
</li>

`
    }
  
)});

