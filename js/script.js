let pressedKeys = "";
window.addEventListener("keyup",
    (k) => {
        pressedKeys += k.key
        console.log(pressedKeys);
        if (pressedKeys.slice(-11).toUpperCase() == "MAGDAGASKAR") {
            window.open('https://photos.app.goo.gl/ZabYzb6a8zTDijjQ9', '_blank');
        }

    });
