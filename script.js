console.log("Hallo!");

const hamburgerButton = document.getElementsByClassName("hamburgerButton")[0];
const menuGeopend = document.getElementsByClassName("open")[0];
const sluitButton = document.getElementsByClassName("sluit")[0];
const logoBijenkorf = document.getElementsByClassName("logoBijenkorf")[0];

function openMenu() {
     menuGeopend.classList.add("showMenu");
}

function closeMenu() {
     menuGeopend.classList.remove("showMenu");
    //*console.log("Gelukt")
}

hamburgerButton.addEventListener("click", openMenu);

logoBijenkorf.addEventListener("click", closeMenu);

sluitButton.addEventListener("click", closeMenu);