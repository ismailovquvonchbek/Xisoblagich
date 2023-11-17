var elText = document.querySelector(".text")
var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elDollor = document.querySelector(".rubley")
var elEvro = document.querySelector(".evro")
var dollor = 50;
var evro = 10;

console.log(elEvro , elDollor);

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var Input = elInput.value.trim()

    if (isNaN(Input)) {
        elText.textContent = "Raqam kiriting !!!"
        return
    }

    if (Input / dollor) {
        elDollor.textContent = Input / dollor + '   rubley'
    }


    if (Input / evro) {
        elEvro.textContent = Input / evro + '   evro'
    }
}
)