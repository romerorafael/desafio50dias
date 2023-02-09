const cartoes = document.getElementsByClassName("cartao")

for(var i= 0; i< cartoes.length; i++){
    cartoes[i].addEventListener("click", toogleActiveCard);
}

function toogleActiveCard({target}){
    document.getElementsByClassName("ativo")[0].classList.remove("ativo");
    target.classList.add("ativo");
}