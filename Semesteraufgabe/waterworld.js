/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", init);
    Semesteraufgabe.myGradient = Semesteraufgabe.crc2.createLinearGradient(0, 0, 0, 150);
    let imgData;
    let n = 15;
    let allFish = [];
    let allFood = [];
    let newFood = document.getElementById("Food");
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Semesteraufgabe.crc2 = canvas.getContext("2d");
        console.log(Semesteraufgabe.crc2);
        let background = new Semesteraufgabe.Background();
        //Schleife für SeeBegrünung
        for (var i = 0; i < 20; i++) {
            let sw = new Semesteraufgabe.Seeweed(0, 0);
            sw.setRandomPosition();
            sw.drawRandomSeeweed();
        }
        drawWater(0, 0);
        // Canvas Bild abspeichern
        imgData = Semesteraufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < n; i++) {
            let rf = new Semesteraufgabe.RegularFish(10, 10);
            rf.drawRegularFish();
            rf.setRandomFirstPosition();
            allFish.push(rf);
        }
        console.log("Fische", allFish);
        newFood.addEventListener("click", addFood);
        newFood.addEventListener("touch", addFood);
        window.setTimeout(animate, 120);
    }
    function addFood(_event) {
        //Schleife für Futter
        for (let i = 0; i < n; i++) {
            let freshfood = new Semesteraufgabe.Food(10, 10);
            freshfood.drawFood();
            freshfood.move();
            allFood.push(freshfood);
        }
    }
    function drawWater(_x, _y) {
        Semesteraufgabe.crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        Semesteraufgabe.crc2.fillRect(_x, _y, 1000, 700);
        Semesteraufgabe.crc2.fill();
        Semesteraufgabe.crc2.stroke();
    }
    // Animation der Bienen
    function animate() {
        Semesteraufgabe.crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i = 0; i < allFish.length; i++) {
            let fish = (allFish[i]);
            allFish[i].update();
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (fish.x < 0) {
                fish.x = 1000;
            }
            if (fish.y < 0) {
                fish.y = 700;
            }
            if (fish.y > 700) {
                fish.y = 0;
            }
        }
        window.setTimeout(animate, 40);
    }
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=waterworld.js.map