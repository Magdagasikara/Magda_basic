
const beach = document.getElementById("welcome-beach");
const beachImg = document.getElementById("beach-intro");
const body = document.querySelector("body");
beach.addEventListener("click",
    (b) => {
        body.style.backgroundImage = "url(./img/beach-extra.jpg)";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        beachImg.remove();
    })

let pressedKeys = "";
window.addEventListener("keyup",
    (k) => {
        pressedKeys += k.key
        console.log(pressedKeys);
        if (pressedKeys.slice(-5).toUpperCase() == "MAGDA"
            || pressedKeys.slice(-4).toUpperCase() == "MADA") {
            window.open('https://photos.app.goo.gl/ZabYzb6a8zTDijjQ9', '_blank');
        }
    });

