var levels = document.querySelectorAll(".levels p");
var result = ["Good Job", "Greate Job", "Amazing"];
var totalChar = document.querySelector(".totalChar");
var totalTypedChar = document.querySelector(".totalTypedChar");
var totalCorrectChar = document.querySelector(".totalCorrectChar");
var totalInorrectChar = document.querySelector(".totalInorrectChar");
var accuracy = document.querySelector(".accuracy");

    //  Func to change levels
    function dificultyLevels(Level) {
    var input = document.querySelector("textarea").value;
    if (input.length != 0) {
        alert("Please Check or Blank this Rounch first");
    } else {
        // Hide every Paragraph on change
        for (let index = 0; index < 3; index++) {
        levels[index].classList.add("invisible");
        }
        // Show Choosen Paragraph on change
        totalChar.innerHTML = levels[Level].innerHTML.length;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        levels[Level].classList.toggle("invisible");
    }
    }

    // Func to check
    function check() {
        var input = document.querySelector("textarea").value;
        var selectedLevel = document.querySelector(".form-select").value;
        var correctChar = [];
        var incorrectChar = [];
        console.log(selectedLevel);
        if (selectedLevel == "Choose Your Dificulty Level") {
            alert("please Choose Your Level First!!!");
        } else {
            if (input.length == 0) {
            alert("You Haven't Typed anything.");
            } else {
            var para = levels[selectedLevel].innerHTML;

            for (let i = 0; i < input.length; i++) {
                if (input[i] == para[i]) {
                correctChar.push(input[i]);
                } else {
                incorrectChar.push(input[i]);
                }
            }
            totalTypedChar.innerHTML = input.length;
            totalCorrectChar.innerHTML = correctChar.length;
            totalInorrectChar.innerHTML = incorrectChar.length;
            accuracy.innerHTML = Math.round((correctChar.length / input.length) * 100) + "%";
            }
        }
    }
    // Func to Blank Textarea
    function emptyValue() {
        document.querySelector("textarea").value = "";
    }
