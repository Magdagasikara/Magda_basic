
const beach = document.getElementById("welcome-beach");
const beachImg = document.getElementById("beach-intro");
const main = document.querySelector("main");
let backgroundChanged = false;
if (beach) {
    beach.addEventListener("click",
        (b) => {
            backgroundChanged = !backgroundChanged;
            if (backgroundChanged) {
                beachImg.style.display = "none";
                main.style.backgroundImage = "url(./img/beach-extra.jpg)";
                main.style.backgroundRepeat = "no-repeat";
                main.style.backgroundSize = "cover";
                main.style.minHeight = "800px";
            }
            else {
                beachImg.style.display = "block";
                main.style.backgroundImage = "";
                main.style.backgroundRepeat = "";
                main.style.backgroundSize = "";
                main.style.minHeight = "";
            }
        })
}

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

