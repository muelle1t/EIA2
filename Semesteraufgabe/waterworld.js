/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Leider ist die Abgabe funktionslos. Ich habe alles veruchst. Die Konsole zeigt mir an das RegularFish und BigFish kein Constructor ist und
obwohl ich auch danach gegoogelt habe leuchtet es mir einfach nicht ein. Aber ich wollte wenigstens etwas abgeben.*/
var Aquarium;
(function (Aquarium) {
    window.addEventListener("load", init);
    let canvas;
    let imgData;
    let n = (Math.floor((Math.random() * 2) + 1)); //random Anzahl generierter Fische
    Aquarium.allFish = [];
    Aquarium.myGradient = Aquarium.crc2.createLinearGradient(0, 0, 0, 150);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Aquarium.crc2 = canvas.getContext("2d");
        let background = new Aquarium.Background();
        drawWater(0, 0);
        // Canvas Bild abspeichern
        imgData = Aquarium.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * 900;
            let y = Math.random() * 450;
            let _color;
            let bf = new Aquarium.BigFish(x, y, "#FF8000");
            bf.drawFish();
            Aquarium.allFish.push(bf);
            console.log("Fish", Aquarium.BigFish);
            let rf = new Aquarium.RegularFish(x, y, _color);
            rf.drawFish();
            Aquarium.allFish.push(rf);
        }
        console.log("Fish", Aquarium.allFish);
        window.setTimeout(animate, 120);
        //Eat-Button
        let eatButton = document.getElementById("eat");
        eatButton.addEventListener("click", eatFish);
        eatButton.addEventListener("touch", eatFish);
        //Restart-Button
        let restartButton = document.getElementById("restart");
        restartButton.addEventListener("click", restartGame);
        restartButton.addEventListener("touch", restartGame);
    }
    //FUNKTIONEN     
    function eatFish(_event) {
        Aquarium.allFish.shift(); //gefressenen Fish aus dem Array entfernen
        //addMoreBalloons();
    }
    //Restart game: Seite neu laden
    function restartGame(_event) {
        location.reload(true);
    }
    //animate
    function animate() {
        Aquarium.crc2.putImageData(imgData, 0, 0);
        //Updatefunktion aufrufen
        for (let i = 0; i < n; i++) {
            let f = Aquarium.allFish[i];
            f.update();
        }
        window.setTimeout(animate, 120);
    }
    function drawWater(_x, _y) {
        Aquarium.crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        Aquarium.crc2.fillRect(_x, _y, 1000, 700);
        Aquarium.crc2.fill();
        Aquarium.crc2.stroke();
    }
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=waterworld.js.map