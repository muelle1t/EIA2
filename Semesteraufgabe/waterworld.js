/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aquarium;
(function (Aquarium) {
    window.addEventListener("load", init);
    let imgData;
    let n = 15;
    Aquarium.allFish = [];
    let canvas;
    canvas = document.getElementsByTagName("canvas")[0];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aquarium.crc2 = canvas.getContext("2d");
        console.log(Aquarium.crc2);
        let myGradient = Aquarium.crc2.createLinearGradient(0, 0, 0, 150);
        myGradient.addColorStop(0, "#ccccff");
        myGradient.addColorStop(1, "#000066");
        Aquarium.crc2.fillStyle = myGradient; //wasser im Hintergrund
        Aquarium.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Aquarium.crc2.fillStyle = "#F2F5A9"; //Sand
        Aquarium.crc2.fillRect(0, 630, canvas.width, canvas.height / 10);
        //Schleife für SeeBegrünung
        for (var i = 0; i < 40; i++) {
            let sw = new Aquarium.Seeweed(0, 0);
            sw.setRandomPosition();
            sw.drawRandomSeeweed();
        }
        drawRock(700, 650);
        drawSandcastle(400, 650);
        drawSeestar(450, 660, 5, 30, 10);
        drawSeestar(550, 670, 5, 30, 10);
        drawSeestar(750, 650, 5, 30, 10);
        drawWater(0, 0);
        // Canvas Bild abspeichern
        imgData = Aquarium.crc2.getImageData(0, 0, canvas.width, canvas.height);
        placeRegularFish();
        drawBigFish();
        window.setTimeout(animatefish, 100);
    }
    function placeRegularFish() {
        for (let i = 0; i < n; i++) {
            let x = Math.random() * 900;
            let y = Math.random() * 450;
            let _color;
            //            let p: number = Math.round((Math.random() * 3) + 0);
            let rf = new Aquarium.RegularFish(x, y, _color);
            rf.setRandomStyle();
            rf.drawRegularFish();
            rf.move();
            rf.setRandomDirection();
            Aquarium.allFish.push(rf);
        }
        window.setTimeout(animatefish, 100);
    }
    function drawBigFish() {
        let bady = new Aquarium.BigFish(300, 100);
        bady.update();
    }
    function animatefish() {
        Aquarium.crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        //Schwimmverhalten regulärer Fische
        for (let i = 0; i < Aquarium.allFish.length; i++) {
            let fish = (Aquarium.allFish[i]);
            Aquarium.allFish[i].update();
        }
        drawBigFish();
        window.setTimeout(animatefish, 100);
    }
    function drawRock(_x, _y) {
        Aquarium.crc2.beginPath();
        Aquarium.crc2.strokeStyle = "#8c8c8c";
        Aquarium.crc2.fillStyle = "#8c8c8c";
        Aquarium.crc2.moveTo(_x, _y);
        Aquarium.crc2.lineTo(_x + 5, _y - 20);
        Aquarium.crc2.lineTo(_x + 10, _y - 20);
        Aquarium.crc2.lineTo(_x + 10, _y - 25);
        Aquarium.crc2.lineTo(_x + 15, _y - 25);
        Aquarium.crc2.lineTo(_x + 15, _y - 30);
        Aquarium.crc2.lineTo(_x + 25, _y - 35);
        Aquarium.crc2.lineTo(_x + 25, _y - 40);
        Aquarium.crc2.lineTo(_x + 30, _y - 40);
        Aquarium.crc2.lineTo(_x + 30, _y - 45);
        Aquarium.crc2.lineTo(_x + 40, _y - 55);
        Aquarium.crc2.lineTo(_x + 40, _y - 60);
        Aquarium.crc2.lineTo(_x + 50, _y - 80);
        Aquarium.crc2.lineTo(_x + 50, _y - 90);
        Aquarium.crc2.lineTo(_x + 60, _y - 100);
        Aquarium.crc2.lineTo(_x + 70, _y - 100);
        Aquarium.crc2.lineTo(_x + 90, _y - 120);
        Aquarium.crc2.lineTo(_x + 100, _y - 120);
        Aquarium.crc2.lineTo(_x + 120, _y - 135);
        Aquarium.crc2.lineTo(_x + 140, _y - 130);
        Aquarium.crc2.lineTo(_x + 160, _y - 135);
        Aquarium.crc2.lineTo(_x + 200, _y - 135);
        Aquarium.crc2.lineTo(_x + 240, _y - 130);
        Aquarium.crc2.lineTo(_x + 280, _y - 135);
        Aquarium.crc2.lineTo(_x + 300, _y - 130);
        Aquarium.crc2.lineTo(_x + 300, _y);
        Aquarium.crc2.closePath();
        Aquarium.crc2.fill();
        Aquarium.crc2.stroke();
    }
    function drawSandcastle(_x, _y) {
        Aquarium.crc2.beginPath();
        Aquarium.crc2.fillStyle = "#F2F5A9";
        Aquarium.crc2.strokeStyle = "#F2F5A9";
        Aquarium.crc2.moveTo(_x, _y);
        Aquarium.crc2.lineTo(_x, _y - 70);
        Aquarium.crc2.lineTo(_x + 3, _y - 70);
        Aquarium.crc2.lineTo(_x + 3, _y - 90);
        Aquarium.crc2.lineTo(_x + 8, _y - 90);
        Aquarium.crc2.lineTo(_x + 8, _y - 82);
        Aquarium.crc2.lineTo(_x + 13, _y - 82);
        Aquarium.crc2.lineTo(_x + 13, _y - 90);
        Aquarium.crc2.lineTo(_x + 18, _y - 90);
        Aquarium.crc2.lineTo(_x + 18, _y - 82);
        Aquarium.crc2.lineTo(_x + 23, _y - 82);
        Aquarium.crc2.lineTo(_x + 23, _y - 90);
        Aquarium.crc2.lineTo(_x + 23, _y - 90);
        Aquarium.crc2.lineTo(_x + 28, _y - 90);
        Aquarium.crc2.lineTo(_x + 28, _y - 82);
        Aquarium.crc2.lineTo(_x + 28, _y - 82);
        Aquarium.crc2.lineTo(_x + 33, _y - 82);
        Aquarium.crc2.lineTo(_x + 33, _y - 90);
        Aquarium.crc2.lineTo(_x + 33, _y - 90);
        Aquarium.crc2.lineTo(_x + 38, _y - 90);
        Aquarium.crc2.lineTo(_x + 38, _y - 70);
        Aquarium.crc2.lineTo(_x + 41, _y - 70);
        Aquarium.crc2.lineTo(_x + 41, _y - 50);
        Aquarium.crc2.lineTo(_x + 60, _y - 50);
        Aquarium.crc2.lineTo(_x + 60, _y - 100);
        Aquarium.crc2.lineTo(_x + 55, _y - 100);
        Aquarium.crc2.lineTo(_x + 70, _y - 130);
        Aquarium.crc2.lineTo(_x + 85, _y - 100);
        Aquarium.crc2.lineTo(_x + 80, _y - 100);
        Aquarium.crc2.lineTo(_x + 80, _y - 50);
        Aquarium.crc2.lineTo(_x + 109, _y - 50);
        Aquarium.crc2.lineTo(_x + 109, _y - 70);
        Aquarium.crc2.lineTo(_x + 112, _y - 70);
        Aquarium.crc2.lineTo(_x + 112, _y - 90);
        Aquarium.crc2.lineTo(_x + 117, _y - 90);
        Aquarium.crc2.lineTo(_x + 117, _y - 82);
        Aquarium.crc2.lineTo(_x + 122, _y - 82);
        Aquarium.crc2.lineTo(_x + 122, _y - 90);
        Aquarium.crc2.lineTo(_x + 127, _y - 90);
        Aquarium.crc2.lineTo(_x + 127, _y - 90);
        Aquarium.crc2.lineTo(_x + 127, _y - 82);
        Aquarium.crc2.lineTo(_x + 132, _y - 82);
        Aquarium.crc2.lineTo(_x + 132, _y - 90);
        Aquarium.crc2.lineTo(_x + 137, _y - 90);
        Aquarium.crc2.lineTo(_x + 137, _y - 90);
        Aquarium.crc2.lineTo(_x + 137, _y - 82);
        Aquarium.crc2.lineTo(_x + 142, _y - 82);
        Aquarium.crc2.lineTo(_x + 142, _y - 90);
        Aquarium.crc2.lineTo(_x + 147, _y - 90);
        Aquarium.crc2.lineTo(_x + 147, _y - 90);
        Aquarium.crc2.lineTo(_x + 147, _y - 70);
        Aquarium.crc2.lineTo(_x + 150, _y - 70);
        Aquarium.crc2.lineTo(_x + 150, _y);
        Aquarium.crc2.closePath();
        Aquarium.crc2.fill();
        Aquarium.crc2.stroke();
    }
    function drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = this.x;
        var y = this.y;
        var step = Math.PI / spikes;
        Aquarium.crc2.beginPath();
        Aquarium.crc2.moveTo(_x, _y - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = _x + Math.cos(rot) * outerRadius;
            y = _y + Math.sin(rot) * outerRadius;
            Aquarium.crc2.lineTo(x, y);
            rot += step;
            x = _x + Math.cos(rot) * innerRadius;
            y = _y + Math.sin(rot) * innerRadius;
            Aquarium.crc2.lineTo(x, y);
            rot += step;
        }
        Aquarium.crc2.closePath();
        Aquarium.crc2.fillStyle = "#ff6600";
        Aquarium.crc2.fill();
    }
    function drawWater(_x, _y) {
        Aquarium.crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        Aquarium.crc2.fillRect(_x, _y, 1000, 700);
        Aquarium.crc2.fill();
        Aquarium.crc2.stroke();
    }
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=waterworld.js.map