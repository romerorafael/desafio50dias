const botao = document.getElementById("button");
const areaGiro = document.getElementById("main");

botao.addEventListener("click", girarMundo);

function girarMundo(){
    botao.classList.toggle("rotate90");
    areaGiro.classList.toggle("rotate30");
}