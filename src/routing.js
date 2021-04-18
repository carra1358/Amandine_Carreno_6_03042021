
/*
const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const mimi = urlParams.has("243");
const testData = document.getElementById("testdata");
window.onload = function renderContent (){

    if (mimi === true){
        testData.innerHTML = `page mimi`
      }
    else{
        testData.innerHTML = `error`
    }

}
*/ 
const getData = () => import("./data/data.json");
getData().then(data => {data.default.photographers.find(profil => profil.id === "243")
   
    });