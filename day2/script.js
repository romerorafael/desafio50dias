let actualStep = 1;

const steps = document.getElementsByClassName("number");
const spaces = document.getElementsByClassName("space");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", changeStep.bind(null, "next"));
prevButton.addEventListener("click", changeStep.bind(null, "prev"));

function changeStep(type){
    if(type === "next" ){
        this.nextStep();
    }else if(type === "prev"){
        this.prevStep();
    }
    this.updateProgress(type)

    if(actualStep > 1){
        prevButton.removeAttribute("disabled");
    }
    if(actualStep < steps.length -1){
        nextButton.removeAttribute("disabled");
    }


}

function nextStep(){
    actualStep++;
    if(actualStep == steps.length){
        nextButton.setAttribute("disabled", "disabled");
    }
    if(actualStep == steps.length) actualStep = steps.length;
}

function prevStep(){
    actualStep--
    if(actualStep == 1){
        prevButton.setAttribute("disabled", "disabled");
    }
    if(actualStep < 1) actualStep = 1;
}

function updateProgress(type)
{
    let space = 0;
    let step = 0;

    if(type == "next")
    {
        
        space = spaces[actualStep -2];
        step = steps[actualStep - 1];

        space.classList.add("ativo");   
        step.classList.add("ativo");   
    }

    if(type == "prev")
    {
        if(actualStep == 1){
            space = spaces[0];
            step = steps[actualStep];
        }else {
            space = spaces[actualStep -1];
            step = steps[actualStep ];
        }
        step.classList.remove("ativo");   
        space.classList.remove("ativo");   
    }
}
