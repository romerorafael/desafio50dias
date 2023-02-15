const container = document.getElementById("container");
const number = document.getElementById("percentage");

let caller = setInterval(Loading, 30);

let percentage = 0;

function Loading(){
    percentage++;

    if (percentage > 99) {
        clearInterval(caller)
    }

    number.innerText = `${percentage}%`
    number.style.opacity = scale(percentage, 0, 100, 1, 0)
    container.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`
}

//Tive que dar uma colada no código pq não imaginava como se fazia essa escala. A minha tentativa foi por animation.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }