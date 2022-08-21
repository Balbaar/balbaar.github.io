var dropdownIcon;
var dropdownMenu;
window.onload = init;

function init(){
    dropdownIcon = document.getElementById("dropdown-icon");
    dropdownMenu = document.getElementById("dropdown");
}

function toggleDropdown() {
    dropdownMenu.classList.toggle("hide-dropdown");  
}

const readmore = document.querySelectorAll("[button]");
console.log(readmore)
readmore[1].addEventListener("click", () => {
    console.log("hej")
})

