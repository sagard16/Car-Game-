let Bluecar = document.getElementById("Bluecar")
let Rececar = document.getElementById("Rececar")
let result = document.getElementById("result")
let game = document.getElementById("game")
const Score = document.getElementById("Score")

let counter = 0

// Car Move

Bluecar.addEventListener("animationiteration", function () {
    let random = ((Math.floor(Math.random() * 3)) * 130);
    Bluecar.style.left = random + "px";
    counter++
})

// Rececar Move

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        let receCarLeft = parseInt(this.window.getComputedStyle(Rececar).getPropertyValue("left"));
        if (receCarLeft < 260) {
            Rececar.style.left = (receCarLeft + 130) + "px"
        }
    }


    if (e.keyCode == "37") {
        let receCarLeft = parseInt(this.window.getComputedStyle(Rececar).getPropertyValue("left"));
        if (receCarLeft > 0) {
            Rececar.style.left = (receCarLeft - 130) + "px"
        }
    }
});


// Game over 


setInterval(function Gameover() {
    let BlueCarTop = parseInt(window.getComputedStyle(Bluecar).getPropertyValue("Top"));
    let BlueCarLeft = parseInt(window.getComputedStyle(Bluecar).getPropertyValue("Left"));
    let receCarLeft = parseInt(window.getComputedStyle(Rececar).getPropertyValue("Left"));

    if ((BlueCarLeft === receCarLeft) && (BlueCarTop > 250) && (BlueCarTop < 450)) {
        result.style.display = "bolck";
        game.style.display = "none";
        Score.innerHTML = `score : ${counter}`

        counter = 0
    }
},10); 