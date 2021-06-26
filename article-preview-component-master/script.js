let shareIcon = document.querySelector(".share-icon");
let shareLinkItems = document.querySelector(".share-links") 
let shareLinkTriangle = document.querySelector(".share-link-triangle");

shareIcon.addEventListener("click", ()=>{
     shareLinkItems.classList.toggle("hide")
     shareLinkTriangle.classList.toggle("hide")
     shareIcon.classList.toggle("active-share")
})