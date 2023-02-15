const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");

button.addEventListener("click", toogleInput);

function toogleInput(){
    input.classList.toggle("ative");
}